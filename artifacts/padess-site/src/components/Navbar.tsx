import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/padess-logo-transparent.png";

const navLinks = [
  { name: "Vision", href: "#vision" },
  { name: "Architecture & Époxy", href: "#architecture" },
  { name: "H.E.R.O.®", href: "#hero-concept" },
  { name: "Énergie & Eau", href: "#energie" },
  { name: "Industrie", href: "#industrie" },
  { name: "Investisseurs", href: "#investisseurs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* 4-color brand stripe */}
      <div className="fixed top-0 w-full z-50 flex h-1">
        <div className="flex-1 bg-[#4CAF50]" />
        <div className="flex-1 bg-[#F57C00]" />
        <div className="flex-1 bg-[#8B1A1A]" />
        <div className="flex-1 bg-[#1565C0]" />
      </div>

      {/* Main navbar */}
      <header
        className={`fixed top-1 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md border-b border-gray-200 shadow-sm py-2"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logo} alt="PADESS ENGINEERING" className="h-14 sm:h-16 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#F57C00] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="bg-[#4CAF50] hover:bg-[#43A047] text-white ml-2 font-bold shadow-md">
              <a href="#contact">Contactez-nous</a>
            </Button>
          </nav>

          {/* Hamburger button */}
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay, completely outside header */}
      <div
        className={`fixed inset-0 z-[200] bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header row inside menu */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <img src={logo} alt="PADESS ENGINEERING" className="h-12 w-auto object-contain" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 text-gray-700 hover:text-[#F57C00] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Color stripe */}
        <div className="flex h-1 w-full">
          <div className="flex-1 bg-[#4CAF50]" />
          <div className="flex-1 bg-[#F57C00]" />
          <div className="flex-1 bg-[#8B1A1A]" />
          <div className="flex-1 bg-[#1565C0]" />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 justify-center px-8 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-gray-100 text-xl font-bold text-gray-800 hover:text-[#F57C00] transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span>{link.name}</span>
              <span className="text-gray-300 group-hover:text-[#F57C00] transition-colors text-2xl">›</span>
            </a>
          ))}
        </nav>

        {/* CTA + slogan */}
        <div className="px-8 pb-10 space-y-4">
          <Button
            asChild
            className="w-full h-14 text-lg font-bold bg-[#4CAF50] hover:bg-[#43A047] text-white shadow-md"
          >
            <a href="#contact" onClick={() => setOpen(false)}>Contactez-nous</a>
          </Button>
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
            L'Innovation Durable au Service de votre Autonomie
          </p>
        </div>
      </div>
    </>
  );
}
