import React, { useRef, useEffect, useCallback } from "react";

interface AutoScrollRowProps {
  images: { src: string; label: string }[];
  direction: "left" | "right";
  speed?: number;
}

export default function AutoScrollRow({ images, direction, speed = 0.4 }: AutoScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);
  const rafRef = useRef<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getHalf = () => (trackRef.current ? trackRef.current.scrollWidth / 2 : 0);

  const normalize = (pos: number, half: number) => {
    let p = pos % half;
    if (p < 0) p += half;
    return p;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    if (direction === "right") {
      posRef.current = el.scrollWidth / 2;
    }
    el.style.transform = `translateX(${-posRef.current}px)`;

    const tick = () => {
      if (!isDragging.current) {
        const half = el.scrollWidth / 2;
        if (direction === "left") {
          posRef.current += speed;
          if (posRef.current >= half) posRef.current -= half;
        } else {
          posRef.current -= speed;
          if (posRef.current <= 0) posRef.current += half;
        }
        el.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed]);

  const onDragStart = useCallback((clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
    startPos.current = posRef.current;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grabbing";
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = startX.current - clientX;
    const half = trackRef.current.scrollWidth / 2;
    posRef.current = normalize(startPos.current + delta, half);
    trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
  }, []);

  const onDragEnd = useCallback(() => {
    isDragging.current = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden mb-4 select-none"
      style={{ cursor: "grab" }}
      onMouseDown={(e) => { e.preventDefault(); onDragStart(e.clientX); }}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); onDragMove(e.touches[0].clientX); }}
      onTouchEnd={onDragEnd}
    >
      <div ref={trackRef} className="flex gap-4 w-max">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-56 h-44 rounded-xl overflow-hidden relative shadow-sm border border-gray-100"
          >
            <img
              src={img.src}
              alt={img.label}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
              <p className="text-white text-xs font-semibold leading-tight drop-shadow">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
