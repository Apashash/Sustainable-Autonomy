import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, CheckCircle, Star, Shield, Clock, ThumbsUp,
  Recycle, Zap, Building2, Truck, Droplet, Factory,
  Award, Users, Wrench, Leaf, TrendingUp, Sun,
  ChevronRight, Phone
} from "lucide-react";

import heroImg    from "@assets/feceb23a-4a60-414a-943f-282e1c2ab911_1782452676920.jpeg";
import heroBgImg  from "@assets/71b93d8a-1e71-46c9-8664-998421ba93d8_1782460261138.jpeg";
import aboutImg   from "@assets/efcd27e7-9cc0-41fe-8c8e-a590ec77c2a6_1782452676920.jpeg";
import svc1Img    from "@assets/8486619a-4af6-478a-8ed2-b378cd2cf4e3_1782452676920.jpeg";
import svc2Img    from "@assets/a22b47b7-9012-4f22-93f7-9019ab75b306_1782452676920.jpeg";
import svc3Img    from "@assets/d533f035-dad8-4e38-9532-945543a9faa2_1782452676919.jpeg";
import equipImg   from "@assets/dd12a05e-615d-4ebe-b991-0a2af297bcd0_1782452676920.jpeg";
import matImg     from "@assets/7f0dac84-e7e2-4d58-89d7-dc8b22228aa9_1782452676920.jpeg";
import proj1Img   from "@assets/308ead75-fc65-4e7a-8a66-6129152ad5d7_1782452676920.jpeg";
import proj2Img   from "@assets/aa2f8511-e97e-4985-8caf-4fb54a44bfcb_1782452676920.jpeg";
import proj3Img   from "@assets/f838483e-0d73-4d7c-ab3a-70bb00fe2395_1782452676920.jpeg";
import proj4Img   from "@assets/1a8eaeba-11cf-4372-8881-47b0d19ed33f_1782452676920.jpeg";
import proj5Img   from "@assets/ae7fe586-7bf4-4de0-b0ad-0874113871ad_1782452676920.jpeg";
import proj6Img   from "@assets/df0e837b-4930-429c-832d-8a8a6e78715c_1782452676920.jpeg";

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  { icon: <Recycle size={28} />,   color: "#4CAF50", title: "Construction PLASTI-BUILD®",    desc: "Briques et parpaings composite plastique-sable en système LEGO-BLOCK emboîtable sans mortier. Construction 5× plus rapide, 3× plus résistante que le béton, hydrofuge, ignifuge et parasismique." },
  { icon: <Building2 size={28} />, color: "#8B1A1A", title: "Architecture & Art Époxy",       desc: "Plafonds artistiques en BA13, sols en résine époxy « Miroir » effet marbré, ébénisterie de prestige River Tables — le luxe structurel au service de l'esthétique royale." },
  { icon: <Zap size={28} />,       color: "#F57C00", title: "PADESS-BIOFLOW POWER™",          desc: "Innovation de rupture : électricité microbienne (MFC) 24h/24 à partir des bactéries des sols et racines de raphia/mangrove. Zéro réseau, souveraineté totale." },
  { icon: <Droplet size={28} />,   color: "#1565C0", title: "Forages & Eau Potable",          desc: "Forages intelligents et filtration ionique pour un accès permanent à l'eau de qualité supérieure, même en zone reculée." },
  { icon: <Truck size={28} />,     color: "#1565C0", title: "Rétrofit & Mobilité Électrique", desc: "Conversion de véhicules thermiques en 100 % électrique. Tricycles cargo électriques pour la logistique urbaine et réduction totale du coût carburant." },
  { icon: <Factory size={28} />,   color: "#4CAF50", title: "H.E.R.O.® System",               desc: "Habitation Écologique à Rendement Optimisé — assainissement Biofil zéro vidange à vie, fosses à transformation biologique, sans odeurs et sans entretien." },
  { icon: <Sun size={28} />,       color: "#F57C00", title: "Biogaz & Micro-Hydroélectricité", desc: "Transformation des biodéchets en gaz de cuisson et exploitation des micro-courants d'eau locaux pour une indépendance énergétique complète et durable." },
  { icon: <TrendingUp size={28} />,color: "#8B1A1A", title: "Conseil & Investissement",        desc: "Accompagnement stratégique, trading international et opportunités d'investissement à ROI de 18–30 mois dans les secteurs à forte croissance en Afrique." },
  { icon: <Leaf size={28} />,      color: "#4CAF50", title: "Métallurgie & Recyclage",         desc: "Transformation des canettes aluminium en jantes de luxe et composants mécaniques. Mobilier de chantier indestructible en polymères renforcés pour conditions extrêmes." },
];

const whyUs = [
  { icon: <Users size={24} />,      label: "Ingénieurs\nExpérimentés" },
  { icon: <Wrench size={24} />,     label: "Travail\nSoigné" },
  { icon: <Shield size={24} />,     label: "Devis\nTransparents" },
  { icon: <Award size={24} />,      label: "Entreprise\nAgréée" },
  { icon: <Clock size={24} />,      label: "Délais\nRespectés" },
  { icon: <ThumbsUp size={24} />,   label: "Équipes\nLocales" },
  { icon: <CheckCircle size={24} />,label: "Résultats\nGarantis" },
];

const steps = [
  { n: "1", title: "Demande de Devis",   desc: "Soumettez votre projet via le formulaire et recevez une réponse sous 24h." },
  { n: "2", title: "Étude Technique",    desc: "Nos ingénieurs analysent vos besoins et préparent une solution sur mesure." },
  { n: "3", title: "Planification",      desc: "Nous définissons les étapes, le calendrier et les ressources nécessaires." },
  { n: "4", title: "Réalisation",        desc: "Exécution professionnelle du projet dans les délais et selon les standards." },
  { n: "5", title: "Livraison & Suivi",  desc: "Réception du projet avec suivi post-livraison et service après-vente dédié." },
];

const testimonials = [
  { name: "Alain T.", city: "Douala", stars: 5, text: "PADESS a transformé notre immeuble avec un sol époxy magnifique. Travail soigné, délais respectés, équipe très professionnelle. Je recommande vivement !" },
  { name: "Marie-Claire N.", city: "Yaoundé", stars: 5, text: "Notre système solaire fonctionne parfaitement depuis l'installation. L'équipe PADESS a été réactive et compétente du début à la fin du projet." },
  { name: "Ibrahim K.", city: "Bafoussam", stars: 5, text: "Le système PLASTI-BUILD® est révolutionnaire. Des briques solides fabriquées à partir de déchets plastiques — PADESS est en avance sur son temps." },
];

const realizations = [
  { img: proj1Img, label: "PLASTI-BUILD®",    title: "Chantier Résidentiel, Douala" },
  { img: proj2Img, label: "ART ÉPOXY",         title: "Sol Industriel Haut de Gamme" },
  { img: proj3Img, label: "ÉNERGIE SOLAIRE",   title: "Installation Système Autonome" },
  { img: proj4Img, label: "H.E.R.O.®",         title: "Valorisation Déchets Plastiques" },
  { img: proj5Img, label: "MOBILITÉ",           title: "Tricycle Cargo Électrique" },
  { img: proj6Img, label: "TRAITEMENT EAU",    title: "Système de Purification" },
];

// ─── Component ───────────────────────────────────────────────────────────────

function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = [...testimonials, ...testimonials, ...testimonials];

  const CARD_W = 320; // card width + gap
  const TOTAL = testimonials.length * CARD_W;

  // Auto-scroll via requestAnimationFrame
  const offset = useRef(0);
  const rafId = useRef<number | null>(null);

  const tick = () => {
    if (!containerRef.current) return;
    offset.current += 0.6;
    if (offset.current >= TOTAL) offset.current -= TOTAL;
    containerRef.current.scrollLeft = offset.current;
    rafId.current = requestAnimationFrame(tick);
  };

  // sync offset with actual scrollLeft when manually scrolling
  const startAuto = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (containerRef.current) offset.current = containerRef.current.scrollLeft;
    rafId.current = requestAnimationFrame(tick);
    setPaused(false);
  };

  const stopAuto = () => {
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null; }
    setPaused(true);
  };

  // Start auto-scroll on mount
  React.useEffect(() => {
    startAuto();
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  // Pointer drag handlers (works for both mouse and touch via pointer events)
  const onPointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    stopAuto();
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = containerRef.current.scrollLeft;
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const delta = dragStart.current - e.clientX;
    containerRef.current.scrollLeft = scrollStart.current + delta;
    offset.current = containerRef.current.scrollLeft;
  };

  const onPointerUp = () => {
    setIsDragging(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(startAuto, 1500);
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-5 overflow-x-auto select-none"
      style={{
        scrollbarWidth: "none",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        cursor: isDragging ? "grabbing" : "grab",
        scrollSnapType: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      {items.map((t, i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex-shrink-0" style={{ width: "300px" }}>
          <div className="flex gap-0.5 text-yellow-400 mb-3">
            {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-sm font-bold shrink-0">
              {t.name[0]}
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">{t.name}</div>
              <div className="text-xs text-gray-500">{t.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [form, setForm] = useState({ nom: "", tel: "", email: "", service: "", message: "" });

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      {/* spacer for fixed bars */}
      <div className="h-[6.5rem]" />

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "560px",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#1a2b4a]/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 flex flex-col justify-center min-h-[560px]">
          <h1 className="font-bold leading-snug mb-5 text-white tracking-normal" style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)" }}>
            Services d'Ingénierie<br />
            <span className="text-[#F57C00]">Innovants & Durables</span><br />
            pour l'Afrique
          </h1>
          <p className="text-white/80 text-base mb-8 max-w-xl">
            Construction écologique PLASTI-BUILD®, systèmes énergétiques souverains, art époxy, mobilité industrielle et bien plus encore — des solutions complètes de confiance pour vos projets en Afrique.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-6 py-3.5 rounded transition-colors shadow-md text-sm">
              OBTENIR UN DEVIS <ChevronRight size={16} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2b4a] font-bold px-6 py-3.5 rounded transition-colors text-sm">
              VOIR NOS SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* ══ VISION & DIRECTION ══════════════════════════════════════════════ */}
      <section id="vision" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">VISION STRATÉGIQUE</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-4">L'Ère de la Transformation</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Sous la direction de <strong>M. Ahmed NCHANGE</strong>, Ingénieur en Procédés des Énergies Renouvelables et Trader-Broker International, et son équipe chevronnée, <strong>PADESS Engineering SARL</strong> ne se contente pas de construire : nous créons des systèmes de vie.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Nous transformons les passifs environnementaux — déchets plastiques, pollution organique, isolement — en actifs technologiques et financiers de haute performance.
              </p>
              <blockquote className="border-l-4 border-[#F57C00] pl-4 italic text-[#1a2b4a] text-sm leading-relaxed">
                "Le déchet n'est pas une fin, c'est le gisement d'une nouvelle ère industrielle. Nous ne consommons pas le monde, nous l'ingénions."
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "#4CAF50", icon: "🏗️", title: "Construction Révolutionnaire", desc: "5× plus rapide que le béton traditionnel avec PLASTI-BUILD®" },
                { color: "#F57C00", icon: "⚡", title: "Énergie Souveraine", desc: "PADESS-BIOFLOW POWER™ : électricité microbienne 24h/24" },
                { color: "#1565C0", icon: "💧", title: "Eau Pure", desc: "Forages intelligents & filtration ionique même en zone reculée" },
                { color: "#8B1A1A", icon: "♻️", title: "Zéro Déchet", desc: "Valorisation industrielle totale des plastiques et biodéchets" },
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <h4 className="font-bold text-xs text-gray-900 mb-1" style={{ color: c.color }}>{c.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4 PILIERS DE LA DISRUPTION ══════════════════════════════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">VITRINE PRIMAIRE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">Les Piliers de la Disruption</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: "🏛️", bg: "#4CAF50",
                title: "Hub de l'Autonomie Territoriale",
                desc: "Nous ne vendons pas des produits, nous installons des systèmes souverains. De l'énergie puisée dans les racines du sol à l'habitat érigé en un temps record, PADESS transforme chaque mètre carré en unité de production de richesse.",
              },
              {
                icon: "📈", bg: "#F57C00",
                title: "Levier du Trading Stratégique",
                desc: "Connecter le génie local aux flux financiers mondiaux. En tant que Broker-Trader International, nous sécurisons les chaînes d'approvisionnement et valorisons les matières premières critiques pour une croissance sans frontières.",
              },
              {
                icon: "🔬", bg: "#8B1A1A",
                title: "Ingénierie du Futur (R&D)",
                desc: "Pionnier du concept H.E.R.O.® et de la technologie PLASTI-BUILD®, PADESS Engineering efface la notion de déchet pour instaurer celle de ressource éternelle.",
              },
              {
                icon: "♻️", bg: "#1565C0",
                title: "Zéro Déchet, 100% Valeur",
                desc: "Chaque déchet plastique, organique ou métallique devient une matière première. PADESS transforme les passifs environnementaux en actifs technologiques et financiers à haute performance.",
              },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: p.bg }}>
                <div className="text-3xl">{p.icon}</div>
                <h3 className="font-bold text-base text-white leading-snug">{p.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Shield size={22} className="text-[#4CAF50]" />, title: "Entreprise Agréée",    sub: "Sécurité & Conformité" },
              { icon: <Star   size={22} className="text-[#F57C00]" />, title: "Noté 5 Étoiles",       sub: "Par nos clients" },
              { icon: <Clock  size={22} className="text-[#1565C0]" />, title: "Livraison à Temps",    sub: "À chaque projet" },
              { icon: <ThumbsUp size={22} className="text-[#8B1A1A]" />, title: "Soins & Fiabilité", sub: "Experts Locaux" },
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-center gap-3 py-2">
                {b.icon}
                <div className="text-left">
                  <div className="font-bold text-sm text-gray-800">{b.title}</div>
                  <div className="text-xs text-gray-500">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOS SERVICES ════════════════════════════════════════════════════ */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">NOS EXPERTISES</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">
              Solutions d'Ingénierie Complètes<br />
              <span className="text-[#F57C00]">pour Particuliers & Entreprises</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white group">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: s.color }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xs leading-tight">{s.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed hidden sm:block">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-[11px] font-bold transition-colors" style={{ color: s.color }}>
                  EN SAVOIR PLUS <ArrowRight size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ARCHITECTURE HAUTE COUTURE ══════════════════════════════════════ */}
      <section id="architecture" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">ARCHITECTURE & DESIGN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">Haute Couture & Art Époxy</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">L'espace devient une œuvre d'art fonctionnelle. Nous fusionnons la solidité structurelle avec une esthétique de palace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "🏛️", color: "#8B1A1A",
                title: "Plafonds Artistiques (BA13)",
                desc: "Conceptions sculptées complexes, motifs géométriques et artistiques avec intégration de jeux de lumières indirectes pour une atmosphère royale.",
              },
              {
                icon: "✨", color: "#F57C00",
                title: 'Sols Époxy "Miroir"',
                desc: "Finition monolithique aux effets marbrés profonds, incassable, antibactérienne et d'un éclat incomparable. Hygiénique et éternel.",
              },
              {
                icon: "🪵", color: "#4CAF50",
                title: "Ébénisterie Bois & Époxy",
                desc: 'Création de "River Tables" et mobiliers de luxe fusionnant des essences nobles (ébène, bubinga) avec de la résine cristalline.',
              },
            ].map((a, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ color: a.color }}>{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1a2b4a] rounded-xl p-6 flex items-start gap-4">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <h4 className="font-bold text-[#F57C00] text-sm uppercase tracking-wide mb-1">Projection VIP</h4>
              <p className="text-white/80 text-sm leading-relaxed">Une résidence VIP où le mobilier semble flotter sur un sol de quartz liquide, chaque pièce étant numérotée et personnalisée selon l'identité du propriétaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PÔLE ÉNERGIE & EAU ══════════════════════════════════════════════ */}
      <section id="energie" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">ÉNERGIE & EAU</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">L'Indépendance Totale</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">Interconnexion intelligente multi-sources pour une résilience 24h/24. Nous brisons la dépendance aux réseaux.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "⚡", color: "#F57C00", title: "PADESS-BIOFLOW POWER™", desc: "Énergie microbienne (MFC) — électricité stable même par temps couvert ou sans vent." },
              { icon: "🔥", color: "#8B1A1A", title: "Biogaz Domestique & Industriel", desc: "Biodéchets transformés en gaz de cuisson et électricité stable." },
              { icon: "💧", color: "#1565C0", title: "Forages & Filtration Ionique", desc: "Eau potable de qualité supérieure en zone reculée, 24h/24." },
              { icon: "🚗", color: "#4CAF50", title: "Rétrofit Électrique", desc: "Véhicules thermiques convertis en 100% électrique — zéro carburant." },
            ].map((e, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow bg-white">
                <div className="text-2xl mb-2">{e.icon}</div>
                <h3 className="font-bold text-xs mb-1" style={{ color: e.color }}>{e.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POURQUOI NOUS CHOISIR ════════════════════════════════════════════ */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-8">Pourquoi Nos Clients Nous Choisissent</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {whyUs.map((w, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center">
                  {w.icon}
                </div>
                <p className="text-xs font-semibold text-gray-700 whitespace-pre-line leading-tight">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOS RÉALISATIONS — galerie défilante ════════════════════════════ */}
      <section className="py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">GALERIE</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">Nos Réalisations</h2>
          <p className="text-gray-500 text-sm mt-2">Produits PLASTI-BUILD®, cuisine, toiture, art époxy — fabriqués à partir de déchets recyclés</p>
        </div>

        {/* Row 1 — défile vers la gauche — Sanitaires & Construction */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-left w-max">
            {[
              { src: "/realisations/toilet-gray-speckled.jpeg",      label: "Toilette PLASTI-BUILD® Gris Granit" },
              { src: "/realisations/toilet-black-chunks.jpeg",        label: "Toilette PLASTI-BUILD® Noir Terrazzo" },
              { src: "/realisations/toilet-set-room.jpeg",            label: "Collection Sanitaires Recyclés" },
              { src: "/realisations/toilet-colorful-green.jpeg",      label: "Gamme Couleurs PLASTI-BUILD®" },
              { src: "/realisations/toilet-white.jpeg",               label: "Toilette PLASTI-BUILD® Blanc" },
              { src: "/realisations/toilet-orange-wallhung.jpeg",     label: "Toilette Suspendue Orange" },
              { src: "/realisations/toilet-multicolor-set.jpeg",      label: "Gamme Multicolore Sanitaires" },
              { src: "/realisations/bathroom-set-gray.jpeg",          label: "Collection Salle de Bain Complète" },
              { src: "/realisations/bathroom-vanity-collection.jpeg", label: "Meubles Vasque PADESS" },
              { src: "/realisations/bathroom-pods.jpeg",              label: "Modules Sanitaires Intégrés" },
              { src: "/realisations/plastibuild-team.jpeg",           label: "Équipe PLASTI-BUILD® — Construction" },
              { src: "/realisations/paving-cobblestone.jpeg",         label: "Pavage Recyclé — Allée" },
              { src: "/realisations/paving-colorful-house.jpeg",      label: "Pavage Hexagonal Multicolore" },
              { src: "/realisations/paving-closeup.jpeg",             label: "Pavé Recyclé — Détail Texture" },
              /* duplicate for infinite loop */
              { src: "/realisations/toilet-gray-speckled.jpeg",      label: "Toilette PLASTI-BUILD® Gris Granit" },
              { src: "/realisations/toilet-black-chunks.jpeg",        label: "Toilette PLASTI-BUILD® Noir Terrazzo" },
              { src: "/realisations/toilet-set-room.jpeg",            label: "Collection Sanitaires Recyclés" },
              { src: "/realisations/toilet-colorful-green.jpeg",      label: "Gamme Couleurs PLASTI-BUILD®" },
              { src: "/realisations/toilet-white.jpeg",               label: "Toilette PLASTI-BUILD® Blanc" },
              { src: "/realisations/toilet-orange-wallhung.jpeg",     label: "Toilette Suspendue Orange" },
              { src: "/realisations/toilet-multicolor-set.jpeg",      label: "Gamme Multicolore Sanitaires" },
              { src: "/realisations/bathroom-set-gray.jpeg",          label: "Collection Salle de Bain Complète" },
              { src: "/realisations/bathroom-vanity-collection.jpeg", label: "Meubles Vasque PADESS" },
              { src: "/realisations/bathroom-pods.jpeg",              label: "Modules Sanitaires Intégrés" },
              { src: "/realisations/plastibuild-team.jpeg",           label: "Équipe PLASTI-BUILD® — Construction" },
              { src: "/realisations/paving-cobblestone.jpeg",         label: "Pavage Recyclé — Allée" },
              { src: "/realisations/paving-colorful-house.jpeg",      label: "Pavage Hexagonal Multicolore" },
              { src: "/realisations/paving-closeup.jpeg",             label: "Pavé Recyclé — Détail Texture" },
            ].map((img, i) => (
              <div key={i} className="shrink-0 w-56 h-44 rounded-xl overflow-hidden relative group shadow-sm border border-gray-100">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-white text-xs font-semibold leading-tight drop-shadow">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — défile vers la droite — Tuiles, Cuisine & Mobilité */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-right w-max">
            {[
              { src: "/realisations/roof-tiles-display.jpeg",    label: "Tuiles Plastique — Stand Exposition" },
              { src: "/realisations/roof-tiles-on-house.jpeg",   label: "Toiture PLASTI-BUILD® Installée" },
              { src: "/realisations/roof-tiles-closeup.jpeg",    label: "Tuiles Multicolores Closeup" },
              { src: "/realisations/roof-tiles-eco.jpeg",        label: "Tuiles Écologiques — Alliage Plastique-Sable" },
              { src: "/realisations/kitchen-teal-pink.jpeg",     label: "Cuisine PLASTI-BUILD® Design" },
              { src: "/realisations/kitchen-sink-unit.jpeg",     label: "Évier & Plan de Travail Recyclé" },
              { src: "/realisations/kitchen-counter.jpeg",       label: "Plan de Travail Époxy Granit" },
              { src: "/realisations/kitchen-gray-premium.jpeg",  label: "Plan de Travail Premium Gris" },
              { src: "/realisations/kitchen-green-white.jpeg",   label: "Cuisine Verte PLASTI-BUILD®" },
              { src: "/realisations/kitchen-white-yellow.jpeg",  label: "Cuisine Blanche & Accents Jaunes" },
              { src: "/realisations/sink-closeup.jpeg",          label: "Évier PADESS — Détail Texture" },
              { src: "/realisations/wheels-showroom.jpeg",       label: "Showroom Jantes PADESS" },
              { src: "/realisations/wheels-center.jpeg",         label: "Centre Mobilité PADESS" },
              { src: "/realisations/wheels-red.jpeg",            label: "Atelier Jantes — Rétrofit" },
              { src: "/realisations/retrofit-workshop.jpeg",     label: "Rétrofit Électrique — Atelier" },
              /* duplicate for infinite loop */
              { src: "/realisations/roof-tiles-display.jpeg",    label: "Tuiles Plastique — Stand Exposition" },
              { src: "/realisations/roof-tiles-on-house.jpeg",   label: "Toiture PLASTI-BUILD® Installée" },
              { src: "/realisations/roof-tiles-closeup.jpeg",    label: "Tuiles Multicolores Closeup" },
              { src: "/realisations/roof-tiles-eco.jpeg",        label: "Tuiles Écologiques — Alliage Plastique-Sable" },
              { src: "/realisations/kitchen-teal-pink.jpeg",     label: "Cuisine PLASTI-BUILD® Design" },
              { src: "/realisations/kitchen-sink-unit.jpeg",     label: "Évier & Plan de Travail Recyclé" },
              { src: "/realisations/kitchen-counter.jpeg",       label: "Plan de Travail Époxy Granit" },
              { src: "/realisations/kitchen-gray-premium.jpeg",  label: "Plan de Travail Premium Gris" },
              { src: "/realisations/kitchen-green-white.jpeg",   label: "Cuisine Verte PLASTI-BUILD®" },
              { src: "/realisations/kitchen-white-yellow.jpeg",  label: "Cuisine Blanche & Accents Jaunes" },
              { src: "/realisations/sink-closeup.jpeg",          label: "Évier PADESS — Détail Texture" },
              { src: "/realisations/wheels-showroom.jpeg",       label: "Showroom Jantes PADESS" },
              { src: "/realisations/wheels-center.jpeg",         label: "Centre Mobilité PADESS" },
              { src: "/realisations/wheels-red.jpeg",            label: "Atelier Jantes — Rétrofit" },
              { src: "/realisations/retrofit-workshop.jpeg",     label: "Rétrofit Électrique — Atelier" },
            ].map((img, i) => (
              <div key={i} className="shrink-0 w-56 h-44 rounded-xl overflow-hidden relative group shadow-sm border border-gray-100">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-white text-xs font-semibold leading-tight drop-shadow">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 — défile vers la gauche — Sols Époxy & Ateliers */}
        <div className="relative mb-4">
          <div className="flex gap-4 animate-scroll-left w-max">
            {[
              { src: "/realisations/epoxy-team-applying.jpeg",   label: "Équipe PADESS — Application Sol Époxy" },
              { src: "/realisations/epoxy-dark-team.jpeg",       label: "Application Sol Époxy Prestige" },
              { src: "/realisations/epoxy-large-team.jpeg",      label: "Chantier Époxy — Grande Surface" },
              { src: "/realisations/workshop-epoxy-tables.jpeg", label: "Atelier River Tables — Production" },
              { src: "/realisations/workshop-blue-resin.jpeg",   label: "Atelier Résine Bleue PADESS" },
              { src: "/realisations/factory-workers.jpeg",       label: "Atelier de Production PADESS" },
              { src: "/realisations/factory-brouettes.jpeg",     label: "Brouettes Recyclées — Production" },
              { src: "/realisations/factory-brouettes-2.jpeg",   label: "Ligne de Production Brouettes" },
              { src: "/realisations/waste-raw-material.jpeg",    label: "Notre Matière Première — Déchets Valorisés" },
              { src: "/realisations/padess-meeting-room.jpeg",   label: "Salle de Réunion PADESS Époxy" },
              /* duplicate for infinite loop */
              { src: "/realisations/epoxy-team-applying.jpeg",   label: "Équipe PADESS — Application Sol Époxy" },
              { src: "/realisations/epoxy-dark-team.jpeg",       label: "Application Sol Époxy Prestige" },
              { src: "/realisations/epoxy-large-team.jpeg",      label: "Chantier Époxy — Grande Surface" },
              { src: "/realisations/workshop-epoxy-tables.jpeg", label: "Atelier River Tables — Production" },
              { src: "/realisations/workshop-blue-resin.jpeg",   label: "Atelier Résine Bleue PADESS" },
              { src: "/realisations/factory-workers.jpeg",       label: "Atelier de Production PADESS" },
              { src: "/realisations/factory-brouettes.jpeg",     label: "Brouettes Recyclées — Production" },
              { src: "/realisations/factory-brouettes-2.jpeg",   label: "Ligne de Production Brouettes" },
              { src: "/realisations/waste-raw-material.jpeg",    label: "Notre Matière Première — Déchets Valorisés" },
              { src: "/realisations/padess-meeting-room.jpeg",   label: "Salle de Réunion PADESS Époxy" },
            ].map((img, i) => (
              <div key={i} className="shrink-0 w-56 h-44 rounded-xl overflow-hidden relative group shadow-sm border border-gray-100">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-white text-xs font-semibold leading-tight drop-shadow">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 — défile vers la droite — Mobilier Époxy & Showrooms */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-right w-max">
            {[
              { src: "/realisations/epoxy-living-blue-wood.jpeg",    label: "Salon Époxy Bois & Bleu Prestige" },
              { src: "/realisations/epoxy-dining-green-wood.jpeg",   label: "Salle à Manger River Table Verte" },
              { src: "/realisations/padess-showroom-epoxy.jpeg",     label: "Showroom PADESS — Art Époxy" },
              { src: "/realisations/interior-hex-shelves.jpeg",      label: "Intérieur Étagères Hexagonales Époxy" },
              { src: "/realisations/epoxy-blue-green-furniture.jpeg",label: "Mobilier Époxy Bleu & Vert LED" },
              { src: "/realisations/epoxy-living-blue2.jpeg",        label: "Salon Époxy — Tons Bleu Océan" },
              { src: "/realisations/epoxy-ocean-furniture.jpeg",     label: "River Table Océan — Sur Mesure" },
              { src: "/realisations/epoxy-green-geometric.jpeg",     label: "Sol Époxy Géométrique Vert" },
              { src: "/realisations/padess-reception-stars.jpeg",    label: "Réception PADESS — Sol Étoilé" },
              { src: "/realisations/shelf-hexagonal-1.jpeg",         label: "Bibliothèque Hexagonale Époxy" },
              { src: "/realisations/shelf-hexagonal-2.jpeg",         label: "Étagère Prestige — Art Époxy" },
              { src: "/realisations/shelf-hexagonal-3.jpeg",         label: "Bibliothèque Couleurs Vives" },
              { src: "/realisations/epoxy-lamps.jpeg",               label: "Lampes Art Époxy PADESS" },
              { src: "/realisations/epoxy-dome-lamp.jpeg",           label: "Dôme Époxy Fleurs — Art de Prestige" },
              { src: "/realisations/epoxy-bedroom.jpeg",             label: "Art Époxy — Chambre Prestige" },
              /* duplicate for infinite loop */
              { src: "/realisations/epoxy-living-blue-wood.jpeg",    label: "Salon Époxy Bois & Bleu Prestige" },
              { src: "/realisations/epoxy-dining-green-wood.jpeg",   label: "Salle à Manger River Table Verte" },
              { src: "/realisations/padess-showroom-epoxy.jpeg",     label: "Showroom PADESS — Art Époxy" },
              { src: "/realisations/interior-hex-shelves.jpeg",      label: "Intérieur Étagères Hexagonales Époxy" },
              { src: "/realisations/epoxy-blue-green-furniture.jpeg",label: "Mobilier Époxy Bleu & Vert LED" },
              { src: "/realisations/epoxy-living-blue2.jpeg",        label: "Salon Époxy — Tons Bleu Océan" },
              { src: "/realisations/epoxy-ocean-furniture.jpeg",     label: "River Table Océan — Sur Mesure" },
              { src: "/realisations/epoxy-green-geometric.jpeg",     label: "Sol Époxy Géométrique Vert" },
              { src: "/realisations/padess-reception-stars.jpeg",    label: "Réception PADESS — Sol Étoilé" },
              { src: "/realisations/shelf-hexagonal-1.jpeg",         label: "Bibliothèque Hexagonale Époxy" },
              { src: "/realisations/shelf-hexagonal-2.jpeg",         label: "Étagère Prestige — Art Époxy" },
              { src: "/realisations/shelf-hexagonal-3.jpeg",         label: "Bibliothèque Couleurs Vives" },
              { src: "/realisations/epoxy-lamps.jpeg",               label: "Lampes Art Époxy PADESS" },
              { src: "/realisations/epoxy-dome-lamp.jpeg",           label: "Dôme Époxy Fleurs — Art de Prestige" },
              { src: "/realisations/epoxy-bedroom.jpeg",             label: "Art Époxy — Chambre Prestige" },
            ].map((img, i) => (
              <div key={i} className="shrink-0 w-56 h-44 rounded-xl overflow-hidden relative group shadow-sm border border-gray-100">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-white text-xs font-semibold leading-tight drop-shadow">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT FORM SECTION ════════════════════════════════════════════ */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl">
            {/* Left — dark info panel */}
            <div className="bg-[#1a2b4a] text-white p-10 flex flex-col justify-between">
              <div>
                <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-3">CONTACTEZ-NOUS</p>
                <h2 className="text-2xl font-bold mb-4 leading-tight">
                  Planifiez votre<br />Projet Maintenant !
                </h2>
                <p className="text-white/70 text-sm mb-8">
                  Obtenez un devis gratuit et sans engagement. Nos ingénieurs analysent votre projet et vous répondent sous 24h.
                </p>
                <ul className="space-y-3 text-sm">
                  {["Devis Gratuits & Rapides", "Sans Frais Cachés", "Entreprise Agréée", "Équipe Locale Expérimentée"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90">
                      <CheckCircle size={16} className="text-[#4CAF50] shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-8 border-t border-white/20 space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-[#F57C00] shrink-0 mt-0.5" />
                  <div>
                    <div>📲 WhatsApp : <a href="https://wa.me/237697221970" className="hover:text-[#F57C00]">+237 697 221 970</a></div>
                    <div>📞 <a href="tel:+237658929070" className="hover:text-[#F57C00]">(+237) 658 92 90 70</a></div>
                    <div>📞 <a href="tel:+237690389545" className="hover:text-[#F57C00]">(+237) 690 38 95 45</a></div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#F57C00] shrink-0">✉</span>
                  <div>
                    <div>npadess@hoo.com</div>
                    <div>padess@engineering.com</div>
                    <div>ahmednchange@yahoo.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-2"><span className="text-[#F57C00]">📍</span> Siège Social : Douala, Cameroun</div>
              </div>
            </div>
            {/* Right — form */}
            <div className="bg-gray-50 p-10">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Votre Nom</label>
                    <input type="text" placeholder="Nom complet" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1565C0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Numéro de Téléphone</label>
                    <input type="tel" placeholder="+237 ..." className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1565C0]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                    <input type="email" placeholder="votre@email.com" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1565C0]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Type de Service</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1565C0] text-gray-700">
                      <option value="">Sélectionner...</option>
                      <option>Construction PLASTI-BUILD®</option>
                      <option>Architecture & Art Époxy</option>
                      <option>Systèmes Énergétiques</option>
                      <option>Traitement de l'Eau</option>
                      <option>Mobilité Industrielle</option>
                      <option>Conseil & Investissement</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Décrivez votre Projet</label>
                  <textarea rows={4} placeholder="Ex : Sol époxy pour entrepôt 500m², installation solaire 10kWc, maison PLASTI-BUILD® 3 chambres..." className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1565C0] resize-y" />
                </div>
                <button type="submit" className="w-full bg-[#F57C00] hover:bg-[#E65100] text-white font-bold py-3.5 rounded transition-colors text-sm tracking-wide shadow-md">
                  OBTENIR MON DEVIS GRATUIT →
                </button>
                <p className="text-center text-xs text-gray-400">🔒 Vos données sont confidentielles et sécurisées.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS / RATINGS ════════════════════════════════════════ */}
      <section id="avis" className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-0.5 text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <div className="font-bold text-gray-900 text-sm mt-1">Note 4.9 / 5</div>
              <div className="text-xs text-gray-500">Basé sur 80+ avis clients</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield size={28} className="text-[#4CAF50]" />
              <div className="font-bold text-gray-900 text-sm mt-1">ENTREPRISE AGRÉÉE</div>
              <div className="text-xs text-gray-500">Pour votre tranquillité d'esprit</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award size={28} className="text-[#F57C00]" />
              <div className="font-bold text-gray-900 text-sm mt-1">PRÉSENCE EN AFRIQUE</div>
              <div className="text-xs text-gray-500">Cameroun, régional & international</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLASTI-BUILD & H.E.R.O ══════════════════════════════════════════ */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">PLASTI-BUILD® & H.E.R.O.®</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">La Révolution de la Rapidité Fulgurante</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">Le concept H.E.R.O.® (Habitation Écologique à Rendement Optimisé) redéfinit la vitesse de construction mondiale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img src={equipImg} alt="Équipements PADESS" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#1a2b4a]/60 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Équipements Industriels</h3>
                <p className="text-white/80 text-sm mt-1">Machines et outils professionnels de dernière génération pour chaque chantier.</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img src={matImg} alt="Matériaux PADESS" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#4CAF50]/70 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Matériaux Écologiques PLASTI-BUILD®</h3>
                <p className="text-white/80 text-sm mt-1">Briques certifiées en composite plastique-sable : hydrofuges, ignifuges et parasismiques.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: "🧱", color: "#4CAF50", title: "Technologie LEGO-BLOCK", desc: "Emboîtement mécanique mâle-femelle sans mortier classique" },
              { icon: "⚡", color: "#F57C00", title: "5× Plus Rapide", desc: "Temps de chantier divisé par 5 — isolation thermique native" },
              { icon: "💪", color: "#8B1A1A", title: "3× Plus Résistant", desc: "Plus robuste que le béton, hydrofuge, ignifuge, parasismique" },
              { icon: "🌿", color: "#1565C0", title: "Assainissement Biofil", desc: "Biocompostage intégré — zéro vidange à vie, zéro odeur" },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h4 className="font-bold text-xs mb-1" style={{ color: f.color }}>{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1a2b4a] rounded-xl p-6 flex items-start gap-4">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <h4 className="font-bold text-[#F57C00] text-sm uppercase tracking-wide mb-1">Projection Chantier</h4>
              <p className="text-white/80 text-sm leading-relaxed">L'érection d'une cité ouvrière ou d'un complexe scolaire de <strong className="text-white">20 bâtiments en seulement 30 jours</strong>, avec une isolation thermique native supprimant le besoin de climatisation énergivore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMMENT ÇA MARCHE ════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-12">Comment Ça Marche</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />
            {steps.map((s, i) => (
              <div key={i} className={`flex flex-col items-center text-center relative z-10${steps.length % 2 !== 0 && i === steps.length - 1 ? " col-span-2 lg:col-span-1" : ""}`}>
                <div className="w-16 h-16 rounded-full bg-[#F57C00] text-white flex items-center justify-center text-2xl font-bold shadow-md mb-4">
                  {s.n}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RÉALISATIONS ════════════════════════════════════════════════════ */}
      <section id="realisations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">NOS RÉALISATIONS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">Ce Que Nos Clients Disent de Nous</h2>
          </div>
          {/* Testimonials carousel */}
          <div className="mb-14">
            <TestimonialsCarousel />
          </div>
          {/* Project gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {realizations.map((r, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden aspect-square shadow-sm cursor-pointer">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#F57C00] text-[10px] font-bold uppercase">{r.label}</span>
                  <p className="text-white text-xs font-semibold leading-tight">{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INVESTISSEURS ════════════════════════════════════════════════════ */}
      <section id="investisseurs" className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">OPPORTUNITÉS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4a]">Espace Investisseurs</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">PADESS offre des opportunités d'investissement exceptionnelles dans des marchés en forte croissance en Afrique.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { val: "50–75%", label: "Marges Nettes",           color: "#4CAF50", desc: "PLASTI-BUILD® & Design Époxy — matière première gratuite (les déchets sont notre ressource)." },
              { val: "18–30m", label: "ROI Projeté",             color: "#F57C00", desc: "Retour sur investissement en 18 à 30 mois grâce à une demande massive et sans concurrence." },
              { val: "$/€",    label: "Trading International",   color: "#8B1A1A", desc: "Couverture naturelle contre les dévaluations monétaires locales via opérations internationales." },
              { val: "↑🌍",   label: "Emplois & Impact Social",  color: "#1565C0", desc: "Création d'emplois locaux, lutte contre l'exode rural et dépollution des villes africaines." },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow shadow-sm">
                <div className="text-3xl font-bold mb-2" style={{ color: c.color }}>{c.val}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{c.label}</h4>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { n: "1", color: "#4CAF50", title: "Rentabilité Exceptionnelle", desc: "Notre matière première est gratuite (les déchets). Marges nettes sur PLASTI-BUILD® et Design Époxy entre 50% et 75%." },
              { n: "2", color: "#F57C00", title: "ROI Rapide & Garanti", desc: "Retour sur investissement projeté entre 18 et 30 mois grâce à une demande massive et une absence de concurrence sur l'offre intégrée." },
              { n: "3", color: "#8B1A1A", title: "Appui aux Gouvernements", desc: "Solution clé en main pour stopper l'exode rural, lutter contre l'immigration clandestine en créant des emplois locaux et dépolluer les villes." },
              { n: "4", color: "#1565C0", title: "Souveraineté Nationale", desc: "Nous aidons les États à réduire leurs importations (ciment, pétrole) en utilisant le génie local et les ressources disponibles en Afrique." },
            ].map((r, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 text-white" style={{ backgroundColor: r.color }}>{r.n}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{r.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-10 py-4 rounded transition-colors shadow-lg text-sm">
              DEVENIR PARTENAIRE <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
