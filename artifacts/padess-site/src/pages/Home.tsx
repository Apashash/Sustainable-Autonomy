import React, { useState, useRef } from "react";
import AutoScrollRow from "@/components/AutoScrollRow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight, CheckCircle, Star, Shield, Clock, ThumbsUp,
  Recycle, Zap, Building2, Truck, Droplet, Factory,
  Award, Users, Wrench, Leaf, TrendingUp, Sun,
  ChevronRight, Phone, Landmark, Flame, Car, Sparkles,
  TreePine, Lightbulb, Smartphone, Mail, MapPin, Lock,
  HardHat, FlaskConical, MessageCircle, X, Plus
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
  {
    icon: <Recycle size={28} />, color: "#4CAF50",
    title: "Construction PLASTI-BUILD®",
    desc: "Briques et parpaings composite plastique-sable en système LEGO-BLOCK emboîtable sans mortier. Construction 5× plus rapide, 3× plus résistante que le béton, hydrofuge, ignifuge et parasismique. Toitures, pavages, sanitaires et cuisines — tout en matériaux recyclés certifiés.",
    bullets: ["Technologie LEGO-BLOCK sans mortier", "5× plus rapide que le béton classique", "Hydrofuge, ignifuge et parasismique", "Tuiles, pavés, sanitaires recyclés"],
    photos: ["/realisations/plastibuild-team.jpeg", "/realisations/paving-colorful-house.jpeg", "/realisations/roof-tiles-on-house.jpeg"],
  },
  {
    icon: <Building2 size={28} />, color: "#8B1A1A",
    title: "Architecture & Art Époxy",
    desc: "Plafonds artistiques en BA13 avec jeux de lumières, sols en résine époxy « Miroir » aux effets marbrés profonds, ébénisterie de prestige River Tables — le luxe structurel au service d'une esthétique royale et personnalisée.",
    bullets: ["Plafonds BA13 sculptés & éclairés", "Sols époxy miroir incassables", "River Tables bois noble & résine", "Mobilier & lampes art époxy"],
    photos: ["/realisations/padess-showroom-epoxy.jpeg", "/realisations/epoxy-living-blue-wood.jpeg", "/realisations/workshop-epoxy-tables.jpeg"],
  },
  {
    icon: <Zap size={28} />, color: "#F57C00",
    title: "PADESS-BIOFLOW POWER™",
    desc: "Innovation de rupture exploitant l'énergie microbienne (MFC) à partir des bactéries des sols et racines de raphia/mangrove. Électricité stable 24h/24, même par temps couvert. Zéro réseau, souveraineté énergétique totale.",
    bullets: ["Électricité microbienne 24h/24", "Aucun réseau électrique requis", "Source : bactéries du sol & racines", "Stable par temps couvert ou sans vent"],
    photos: ["/media/before-after.jpeg", "/realisations/factory-workers.jpeg", "/realisations/waste-raw-material.jpeg"],
  },
  {
    icon: <Droplet size={28} />, color: "#1565C0",
    title: "Forages & Eau Potable",
    desc: "Forages intelligents et systèmes de filtration ionique pour un accès permanent à une eau potable de qualité supérieure, même en zone reculée. Pompage autonome, zéro dépendance au réseau public.",
    bullets: ["Forage jusqu'en zones reculées", "Filtration ionique — eau pure certifiée", "Pompage solaire autonome", "Installation clé en main"],
    photos: ["/realisations/kitchen-sink-unit.jpeg", "/realisations/sink-closeup.jpeg", "/realisations/bathroom-pods.jpeg"],
  },
  {
    icon: <Truck size={28} />, color: "#1565C0",
    title: "Rétrofit & Mobilité Électrique",
    desc: "Conversion de véhicules thermiques en 100 % électriques pour une économie totale de carburant. Tricycles cargo électriques pour la logistique urbaine. Réduction des coûts d'exploitation jusqu'à 80 %.",
    bullets: ["Conversion thermique → 100% électrique", "Tricycles cargo pour logistique", "Économie carburant jusqu'à 80%", "Entretien simplifié & durable"],
    photos: ["/realisations/retrofit-workshop.jpeg", "/realisations/wheels-showroom.jpeg", "/realisations/wheels-red.jpeg"],
  },
  {
    icon: <Factory size={28} />, color: "#4CAF50",
    title: "H.E.R.O.® System",
    desc: "Habitation Écologique à Rendement Optimisé — assainissement Biofil par biocompostage zéro vidange à vie, sans odeurs, sans entretien. Le système transforme les déchets biologiques en ressource, même en milieu rural.",
    bullets: ["Assainissement Biofil zéro vidange", "Biocompostage intégré & sans odeurs", "Applicable en milieu rural isolé", "Zéro pollution des sols"],
    photos: ["/realisations/factory-brouettes.jpeg", "/realisations/plastibuild-team.jpeg", "/realisations/waste-raw-material.jpeg"],
  },
  {
    icon: <Sun size={28} />, color: "#F57C00",
    title: "Biogaz & Micro-Hydroélectricité",
    desc: "Transformation des biodéchets organiques en gaz de cuisson et en électricité stable. Exploitation des micro-courants d'eau locaux pour une indépendance énergétique complète, durable et sans coût de carburant.",
    bullets: ["Biodéchets → gaz de cuisson", "Micro-courants → électricité locale", "Zéro intrant, zéro facture énergie", "Adapté aux ménages & industries"],
    photos: ["/realisations/factory-workers.jpeg", "/realisations/factory-brouettes-2.jpeg", "/realisations/waste-raw-material.jpeg"],
  },
  {
    icon: <TrendingUp size={28} />, color: "#8B1A1A",
    title: "Conseil & Investissement",
    desc: "Accompagnement stratégique, trading international de matières premières africaines et opportunités d'investissement à ROI de 18–30 mois. Marges nettes 50–75 % sur les pôles PLASTI-BUILD® et Design Époxy.",
    bullets: ["ROI projeté 18–30 mois", "Trading international $/€", "Marges nettes 50–75%", "Dossiers d'investissement sur mesure"],
    photos: ["/realisations/padess-meeting-room.jpeg", "/realisations/padess-reception-stars.jpeg", "/realisations/epoxy-large-team.jpeg"],
  },
  {
    icon: <Leaf size={28} />, color: "#4CAF50",
    title: "Métallurgie & Recyclage",
    desc: "Transformation des canettes en aluminium pour fabriquer des jantes de luxe et des composants mécaniques haute performance. Mobilier de chantier indestructible en polymères renforcés, conçus pour les conditions extrêmes.",
    bullets: ["Canettes → jantes de luxe", "Composants mécaniques recyclés", "Brouettes en polymères renforcés", "Mobilier de chantier indestructible"],
    photos: ["/realisations/wheels-center.jpeg", "/realisations/factory-brouettes-2.jpeg", "/realisations/wheels-showroom.jpeg"],
  },
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

// ─── Floating Action Button ──────────────────────────────────────────────────

function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "WhatsApp",
      href: "https://wa.me/237697221970",
      bg: "#25D366",
      icon: <MessageCircle size={18} />,
    },
    {
      label: "Donner un Avis",
      href: "#avis",
      bg: "#F57C00",
      icon: <Star size={18} />,
    },
    {
      label: "Nous Contacter",
      href: "#contact",
      bg: "#1a2b4a",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className="flex flex-col items-end gap-2 transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(12px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {actions.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-white text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: a.bg }}
          >
            {a.icon}
            {a.label}
          </a>
        ))}
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        style={{ backgroundColor: "#F57C00" }}
        aria-label="Menu rapide"
      >
        {open ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
}

// ─── Testimonials Carousel ───────────────────────────────────────────────────

function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = [...testimonials, ...testimonials, ...testimonials];

  const CARD_W = 320;
  const TOTAL = testimonials.length * CARD_W;

  const offset = useRef(0);
  const rafId = useRef<number | null>(null);

  const tick = () => {
    if (!containerRef.current) return;
    offset.current += 0.6;
    if (offset.current >= TOTAL) offset.current -= TOTAL;
    containerRef.current.scrollLeft = offset.current;
    rafId.current = requestAnimationFrame(tick);
  };

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

  React.useEffect(() => {
    startAuto();
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

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

// ─── Section label helper ─────────────────────────────────────────────────────

function SectionLabel({ color = "#F57C00", children }: { color?: string; children: React.ReactNode }) {
  return <p className="sr-up font-bold text-xs tracking-widest uppercase mb-2" style={{ color }}>{children}</p>;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollReveal();
  const [form, setForm] = useState({ nom: "", tel: "", email: "", service: "", message: "" });

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <div className="h-24 sm:h-[5.5rem]" />

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
              <SectionLabel>VISION STRATÉGIQUE</SectionLabel>
              <h2 className="sr-left sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-4">L'Ère de la Transformation</h2>
              <p className="sr-left sr-d2 text-gray-600 text-sm leading-relaxed mb-6">
                Sous la direction de <strong>M. Ahmed NCHANGE</strong>, Ingénieur en Procédés des Énergies Renouvelables et Trader-Broker International, et son équipe chevronnée, <strong>PADESS Engineering SARL</strong> ne se contente pas de construire : nous créons des systèmes de vie.
              </p>
              <p className="sr-left sr-d3 text-gray-600 text-sm leading-relaxed mb-8">
                Nous transformons les passifs environnementaux — déchets plastiques, pollution organique, isolement — en actifs technologiques et financiers de haute performance.
              </p>
              <blockquote className="sr-left sr-d4 border-l-4 border-[#F57C00] pl-4 italic text-[#1a2b4a] text-sm leading-relaxed">
                "Le déchet n'est pas une fin, c'est le gisement d'une nouvelle ère industrielle. Nous ne consommons pas le monde, nous l'ingénions."
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "#4CAF50", icon: <HardHat size={22} />, title: "Construction Révolutionnaire", desc: "5× plus rapide que le béton avec PLASTI-BUILD®" },
                { color: "#F57C00", icon: <Zap size={22} />, title: "Énergie Souveraine", desc: "Électricité microbienne BIOFLOW™ 24h/24" },
                { color: "#1565C0", icon: <Droplet size={22} />, title: "Eau Pure", desc: "Forages & filtration ionique partout" },
                { color: "#1a2b4a", icon: <Recycle size={22} />, title: "Zéro Déchet", desc: "Plastiques et biodéchets valorisés à 100%" },
              ].map((c, i) => (
                <div key={i} className={`sr-scale sr-d${i + 1} p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow`} style={{ backgroundColor: c.color }}>
                  <div className="mb-2 text-white">{c.icon}</div>
                  <h4 className="font-bold text-xs text-white mb-1">{c.title}</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{c.desc}</p>
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
            <SectionLabel>VITRINE PRIMAIRE</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">Les Piliers de la Disruption</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: <Landmark size={28} />, bg: "#4CAF50", title: "Autonomie Territoriale", desc: "Systèmes souverains clé-en-main : habitat, énergie, eau. Chaque mètre carré devient une unité productive." },
              { icon: <TrendingUp size={28} />, bg: "#F57C00", title: "Trading Stratégique", desc: "Broker international : chaînes d'approvisionnement sécurisées, matières premières africaines valorisées mondialmente." },
              { icon: <FlaskConical size={28} />, bg: "#8B1A1A", title: "Ingénierie du Futur (R&D)", desc: "Pionniers de H.E.R.O.® et PLASTI-BUILD® — le déchet devient ressource éternelle." },
              { icon: <Recycle size={28} />, bg: "#1565C0", title: "Zéro Déchet, 100% Valeur", desc: "Plastiques, biodéchets, métaux — transformés en actifs industriels à haute performance." },
            ].map((p, i) => (
              <div key={i} className={`sr-scale sr-d${i + 1} rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 shadow-md hover:shadow-lg transition-shadow`} style={{ backgroundColor: p.bg }}>
                <div className="text-white">{p.icon}</div>
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
            <SectionLabel>NOS EXPERTISES</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">
              Solutions d'Ingénierie Complètes<br />
              <span className="text-[#F57C00]">pour Particuliers & Entreprises</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className={`sr-up sr-d${Math.min(i + 1, 6)} flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}>
                {/* Header coloré */}
                <div className="relative p-5 flex items-start gap-3" style={{ backgroundColor: s.color }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 bg-white/20">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm leading-snug pr-8">{s.title}</h3>
                  </div>
                  {/* Badge numéro */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-xs border border-white/40">
                    {i + 1}
                  </div>
                </div>

                {/* Corps blanc */}
                <div className="bg-white flex flex-col flex-1 p-4 gap-3">
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                  <ul className="space-y-1">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: s.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Mini galerie photos */}
                  <div className="grid grid-cols-3 gap-1 mt-auto pt-2">
                    {s.photos.map((src, j) => (
                      <div key={j} className="aspect-square rounded-md overflow-hidden bg-gray-100">
                        <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold hover:underline transition-colors mt-1" style={{ color: s.color }}>
                    DEMANDER UN DEVIS <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLASTI-BUILD® & H.E.R.O.® ═══════════════════════════════════════ */}
      <section id="plastibuild" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>PLASTI-BUILD® & H.E.R.O.®</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">La Révolution de la Rapidité Fulgurante</h2>
            <p className="sr-up sr-d2 text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
              Le concept <strong>H.E.R.O.® (Habitation Écologique à Rendement Optimisé)</strong> redéfinit la vitesse de construction mondiale par l'innovation des matériaux.
            </p>
          </div>

          {/* Hero images */}
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

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <HardHat size={24} />, color: "#4CAF50", title: "Technologie LEGO-BLOCK", desc: "Emboîtement mécanique mâle-femelle sans mortier classique" },
              { icon: <Zap size={24} />, color: "#F57C00", title: "5× Plus Rapide", desc: "Temps de chantier divisé par 5 — isolation thermique native" },
              { icon: <Shield size={24} />, color: "#8B1A1A", title: "3× Plus Résistant", desc: "Plus robuste que le béton, hydrofuge, ignifuge, parasismique" },
              { icon: <Leaf size={24} />, color: "#1565C0", title: "Assainissement Biofil", desc: "Biocompostage intégré — zéro vidange à vie, zéro odeur" },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 flex flex-col items-center">
                <div className="mb-2" style={{ color: f.color }}>{f.icon}</div>
                <h4 className="font-bold text-xs mb-1" style={{ color: f.color }}>{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Projection box */}
          <div className="bg-[#1a2b4a] rounded-xl p-6 flex items-start gap-4 mb-10">
            <Lightbulb size={22} className="text-[#F57C00] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#F57C00] text-sm uppercase tracking-wide mb-1">Projection Chantier</h4>
              <p className="text-white/80 text-sm leading-relaxed">L'érection d'une cité ouvrière ou d'un complexe scolaire de <strong className="text-white">20 bâtiments en seulement 30 jours</strong>, avec une isolation thermique native supprimant le besoin de climatisation énergivore.</p>
            </div>
          </div>

          {/* PLASTI-BUILD photo galleries */}
          <div className="overflow-hidden">
            <p className="text-center text-[#4CAF50] font-bold text-xs tracking-widest uppercase mb-4">NOS RÉALISATIONS PLASTI-BUILD®</p>
            <AutoScrollRow direction="left" images={[
              { src: "/realisations/plastibuild-team.jpeg",           label: "Équipe PLASTI-BUILD® — Chantier" },
              { src: "/realisations/paving-cobblestone.jpeg",         label: "Pavage Recyclé — Allée" },
              { src: "/realisations/paving-colorful-house.jpeg",      label: "Pavage Hexagonal Multicolore" },
              { src: "/realisations/paving-closeup.jpeg",             label: "Pavé Recyclé — Détail Texture" },
              { src: "/realisations/roof-tiles-display.jpeg",         label: "Tuiles Plastique — Stand Exposition" },
              { src: "/realisations/roof-tiles-on-house.jpeg",        label: "Toiture PLASTI-BUILD® Installée" },
              { src: "/realisations/roof-tiles-closeup.jpeg",         label: "Tuiles Multicolores Closeup" },
              { src: "/realisations/roof-tiles-eco.jpeg",             label: "Tuiles Écologiques — Alliage Plastique-Sable" },
              { src: "/realisations/factory-workers.jpeg",            label: "Atelier de Production PADESS" },
              { src: "/realisations/waste-raw-material.jpeg",         label: "Matière Première — Déchets Valorisés" },
            ]} />
            <AutoScrollRow direction="right" images={[
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
              { src: "/realisations/sink-closeup.jpeg",               label: "Évier PADESS — Détail Texture" },
            ]} />
            <AutoScrollRow direction="left" images={[
              { src: "/realisations/kitchen-teal-pink.jpeg",     label: "Cuisine PLASTI-BUILD® Design" },
              { src: "/realisations/kitchen-sink-unit.jpeg",     label: "Évier & Plan de Travail Recyclé" },
              { src: "/realisations/kitchen-counter.jpeg",       label: "Plan de Travail Époxy Granit" },
              { src: "/realisations/kitchen-gray-premium.jpeg",  label: "Plan de Travail Premium Gris" },
              { src: "/realisations/kitchen-green-white.jpeg",   label: "Cuisine Verte PLASTI-BUILD®" },
              { src: "/realisations/kitchen-white-yellow.jpeg",  label: "Cuisine Blanche & Accents Jaunes" },
              { src: "/realisations/factory-brouettes.jpeg",     label: "Brouettes Recyclées — Production" },
              { src: "/realisations/factory-brouettes-2.jpeg",   label: "Ligne de Production Brouettes" },
            ]} />
          </div>
        </div>
      </section>

      {/* ══ ARCHITECTURE & ART ÉPOXY ═════════════════════════════════════════ */}
      <section id="architecture" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>ARCHITECTURE & DESIGN</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">Haute Couture & Art Époxy</h2>
            <p className="sr-up sr-d2 text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
              L'espace devient une œuvre d'art fonctionnelle. Nous fusionnons la solidité structurelle avec une esthétique de palace.
            </p>
          </div>

          {/* 3 service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: <Landmark size={28} />, color: "#1a2b4a", title: "Plafonds Artistiques (BA13)", desc: "Sculptures géométriques, lumières indirectes — une atmosphère de palace sur mesure." },
              { icon: <Sparkles size={28} />, color: "#F57C00", title: 'Sols Époxy "Miroir"', desc: "Finition marbrée monolithique : incassable, antibactérienne, d'un éclat éternel." },
              { icon: <TreePine size={28} />, color: "#4CAF50", title: "Ébénisterie Bois & Époxy", desc: 'River Tables et mobiliers de luxe — essences nobles fusionnées à la résine cristalline.' },
            ].map((a, i) => (
              <div key={i} className={`sr-up sr-d${i + 1} rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow`} style={{ backgroundColor: a.color }}>
                <div className="mb-3 text-white">{a.icon}</div>
                <h3 className="font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Projection VIP */}
          <div className="bg-[#1a2b4a] rounded-xl p-6 flex items-start gap-4 mb-10">
            <Lightbulb size={22} className="text-[#F57C00] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#F57C00] text-sm uppercase tracking-wide mb-1">Projection VIP</h4>
              <p className="text-white/80 text-sm leading-relaxed">Une résidence VIP où le mobilier semble flotter sur un sol de quartz liquide, chaque pièce étant numérotée et personnalisée selon l'identité du propriétaire.</p>
            </div>
          </div>

          {/* Architecture photo galleries */}
          <div className="overflow-hidden">
            <p className="text-center text-[#8B1A1A] font-bold text-xs tracking-widest uppercase mb-4">NOS RÉALISATIONS ART ÉPOXY</p>
            <AutoScrollRow direction="left" images={[
              { src: "/realisations/padess-showroom-epoxy.jpeg",     label: "Showroom PADESS — Art Époxy" },
              { src: "/realisations/epoxy-living-blue-wood.jpeg",    label: "Salon Époxy Bois & Bleu Prestige" },
              { src: "/realisations/epoxy-dining-green-wood.jpeg",   label: "Salle à Manger River Table Verte" },
              { src: "/realisations/epoxy-ocean-furniture.jpeg",     label: "River Table Océan — Sur Mesure" },
              { src: "/realisations/epoxy-bedroom.jpeg",             label: "Art Époxy — Chambre Prestige" },
              { src: "/realisations/epoxy-green-geometric.jpeg",     label: "Sol Époxy Géométrique Vert" },
              { src: "/realisations/padess-reception-stars.jpeg",    label: "Réception PADESS — Sol Étoilé" },
              { src: "/realisations/padess-meeting-room.jpeg",       label: "Salle de Réunion PADESS Époxy" },
              { src: "/realisations/epoxy-lamps.jpeg",               label: "Lampes Art Époxy PADESS" },
              { src: "/realisations/epoxy-dome-lamp.jpeg",           label: "Dôme Époxy Fleurs — Art de Prestige" },
            ]} />
            <AutoScrollRow direction="right" images={[
              { src: "/realisations/epoxy-team-applying.jpeg",   label: "Équipe PADESS — Application Sol Époxy" },
              { src: "/realisations/epoxy-dark-team.jpeg",       label: "Application Sol Époxy Prestige" },
              { src: "/realisations/epoxy-large-team.jpeg",      label: "Chantier Époxy — Grande Surface" },
              { src: "/realisations/workshop-epoxy-tables.jpeg", label: "Atelier River Tables — Production" },
              { src: "/realisations/workshop-blue-resin.jpeg",   label: "Atelier Résine Bleue PADESS" },
              { src: "/realisations/epoxy-blue-green-furniture.jpeg", label: "Mobilier Époxy Bleu & Vert LED" },
              { src: "/realisations/epoxy-living-blue2.jpeg",    label: "Salon Époxy — Tons Bleu Océan" },
              { src: "/realisations/interior-hex-shelves.jpeg",  label: "Intérieur Étagères Hexagonales Époxy" },
            ]} />
            <AutoScrollRow direction="left" images={[
              { src: "/realisations/shelf-hexagonal-1.jpeg",         label: "Bibliothèque Hexagonale Époxy" },
              { src: "/realisations/shelf-hexagonal-2.jpeg",         label: "Étagère Prestige — Art Époxy" },
              { src: "/realisations/shelf-hexagonal-3.jpeg",         label: "Bibliothèque Couleurs Vives" },
            ]} />
          </div>
        </div>
      </section>

      {/* ══ PÔLE ÉNERGIE & EAU ══════════════════════════════════════════════ */}
      <section id="energie" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>ÉNERGIE & EAU</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">L'Indépendance Totale</h2>
            <p className="sr-up sr-d2 text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
              Interconnexion intelligente multi-sources pour une résilience 24h/24. Nous brisons la dépendance aux réseaux grâce à une technologie multi-sources intégrée.
            </p>
          </div>

          {/* 4 energy cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Zap size={22} />, color: "#F57C00", title: "PADESS-BIOFLOW POWER™", desc: "Électricité microbienne 24h/24 — aucun réseau requis. Bactéries des sols et racines de raphia/mangrove." },
              { icon: <Flame size={22} />, color: "#4CAF50", title: "Biogaz Domestique & Industriel", desc: "Biodéchets → gaz de cuisson et électricité stable. Zéro intrant, zéro pollution." },
              { icon: <Droplet size={22} />, color: "#1565C0", title: "Forages & Filtration Ionique", desc: "Eau potable de qualité supérieure, partout, 24h/24 via pompage autonome." },
              { icon: <Car size={22} />, color: "#1a2b4a", title: "Rétrofit Électrique", desc: "Véhicules thermiques convertis en 100% électrique. Suppression totale de la dépendance aux hydrocarbures." },
            ].map((e, i) => (
              <div key={i} className={`sr-up sr-d${i + 1} rounded-xl p-5 hover:shadow-lg transition-shadow`} style={{ backgroundColor: e.color }}>
                <div className="mb-3 text-white">{e.icon}</div>
                <h3 className="font-bold text-sm mb-2 text-white">{e.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* Vidéos terrain */}
          <div className="bg-[#1a2b4a] rounded-2xl p-6 md:p-10">
            <div className="text-center mb-8">
              <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">NOS TRAVAUX EN ACTION</p>
              <h3 className="text-2xl font-bold text-white">Voir par vous-même</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {["/media/video1.mp4", "/media/video2.mp4", "/media/video3.mp4"].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg aspect-video bg-black">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto">
              <img src="/media/before-after.jpeg" alt="Avant / Après — Sol Époxy PADESS" className="w-full object-cover" />
              <div className="bg-[#F57C00] text-white text-center py-2 text-xs font-bold tracking-widest uppercase">
                Avant / Après — Sol Époxy PADESS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MOBILITÉ & INDUSTRIE CIRCULAIRE ══════════════════════════════════ */}
      <section id="mobilite" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel color="#1565C0">MOBILITÉ & INDUSTRIE CIRCULAIRE</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">Industrie du Futur, Dès Aujourd'hui</h2>
            <p className="sr-up sr-d2 text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
              Rétrofit électrique, métallurgie de recyclage et mobilier de chantier indestructible — PADESS transforme chaque déchet en actif industriel.
            </p>
          </div>

          {/* 3 mobility cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Car size={28} />, color: "#1565C0", title: "Rétrofit Électrique", desc: "Conversion de véhicules thermiques en 100% électriques pour une économie totale de carburant. Tricycles cargo pour la logistique urbaine." },
              { icon: <Recycle size={28} />, color: "#4CAF50", title: "Métallurgie de Recyclage", desc: "Transformation des canettes en aluminium pour fabriquer des jantes de luxe et des composants mécaniques haute performance." },
              { icon: <HardHat size={28} />, color: "#8B1A1A", title: "Mobilier de Chantier Indestructible", desc: "Brouettes et sanitaires en polymères renforcés, conçus pour résister aux conditions de chantier les plus extrêmes." },
            ].map((m, i) => (
              <div key={i} className={`sr-up sr-d${i + 1} rounded-xl p-6 hover:shadow-lg transition-shadow`} style={{ backgroundColor: m.color }}>
                <div className="mb-3 text-white">{m.icon}</div>
                <h3 className="font-bold text-white mb-2">{m.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobility photo galleries */}
          <div className="overflow-hidden">
            <p className="text-center text-[#1565C0] font-bold text-xs tracking-widest uppercase mb-4">NOS RÉALISATIONS MOBILITÉ & INDUSTRIE</p>
            <AutoScrollRow direction="left" images={[
              { src: "/realisations/wheels-showroom.jpeg",    label: "Showroom Jantes PADESS" },
              { src: "/realisations/wheels-center.jpeg",      label: "Centre Mobilité PADESS" },
              { src: "/realisations/wheels-red.jpeg",         label: "Atelier Jantes — Rétrofit" },
              { src: "/realisations/retrofit-workshop.jpeg",  label: "Rétrofit Électrique — Atelier" },
              { src: "/realisations/factory-brouettes.jpeg",  label: "Brouettes Recyclées — Production" },
              { src: "/realisations/factory-brouettes-2.jpeg",label: "Ligne de Production Brouettes" },
              { src: "/realisations/factory-workers.jpeg",    label: "Atelier de Production PADESS" },
              { src: "/realisations/waste-raw-material.jpeg", label: "Notre Matière Première — Déchets Valorisés" },
            ]} />
          </div>
        </div>
      </section>

      {/* ══ POURQUOI NOUS CHOISIR ════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-up text-center text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-8">Pourquoi Nos Clients Nous Choisissent</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {whyUs.map((w, i) => (
              <div key={i} className={`sr-up sr-d${Math.min(i + 1, 7)} flex flex-col items-center gap-2`}>
                <div className="w-14 h-14 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center">
                  {w.icon}
                </div>
                <p className="text-xs font-semibold text-gray-700 whitespace-pre-line leading-tight">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMMENT ÇA MARCHE ════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-up text-center text-2xl md:text-3xl font-bold text-[#1a2b4a] mb-12">Comment Ça Marche</h2>
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((s, i) => (
              <div key={i} className={`sr-left sr-d${i + 1} flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100`}>
                <div className="w-12 h-12 rounded-full bg-[#F57C00] text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0">
                  {s.n}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
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

      {/* ══ CONTACT FORM SECTION ════════════════════════════════════════════ */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-[#1a2b4a] text-white p-6 lg:p-10 flex flex-col justify-between">
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
                  <Smartphone size={14} className="text-[#F57C00] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white/90 mb-0.5">WhatsApp / Téléphone :</div>
                    <div><a href="https://wa.me/237697221970" className="hover:text-[#F57C00]">+237 697 221 970</a></div>
                    <div><a href="tel:+237658929070" className="hover:text-[#F57C00]">(+237) 658 92 90 70</a></div>
                    <div><a href="tel:+237690389545" className="hover:text-[#F57C00]">(+237) 690 38 95 45</a></div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={14} className="text-[#F57C00] shrink-0 mt-0.5" />
                  <div>
                    <div>npadess@hoo.com</div>
                    <div>padess@engineering.com</div>
                    <div>ahmednchange@yahoo.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-[#F57C00] shrink-0" /> Siège Social : Douala, Cameroun</div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 lg:p-10">
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
                      <option>Mobilité & Rétrofit Électrique</option>
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
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1"><Lock size={11} /> Vos données sont confidentielles et sécurisées.</p>
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

      {/* ══ TÉMOIGNAGES & RÉALISATIONS ══════════════════════════════════════ */}
      <section id="realisations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>TÉMOIGNAGES</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">Ce Que Nos Clients Disent de Nous</h2>
          </div>
          <div className="mb-14">
            <TestimonialsCarousel />
          </div>
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
            <SectionLabel>OPPORTUNITÉS</SectionLabel>
            <h2 className="sr-up sr-d1 text-2xl md:text-3xl font-bold text-[#1a2b4a]">Espace Investisseurs</h2>
            <p className="sr-up sr-d2 text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              PADESS offre des opportunités d'investissement exceptionnelles dans des marchés en forte croissance en Afrique. Profil de risque bas pour un rendement de croissance exponentiel.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              { val: "50–75%", label: "Marges Nettes",           color: "#4CAF50", desc: "PLASTI-BUILD® & Design Époxy — matière première gratuite (les déchets sont notre ressource)." },
              { val: "18–30m", label: "ROI Projeté",             color: "#F57C00", desc: "Retour sur investissement en 18 à 30 mois grâce à une demande massive et sans concurrence." },
              { val: "$/€",    label: "Trading International",   color: "#8B1A1A", desc: "Couverture naturelle contre les dévaluations monétaires locales via opérations internationales." },
              { val: "+500",  label: "Emplois & Impact Social",  color: "#1565C0", desc: "Création d'emplois locaux, lutte contre l'exode rural et dépollution des villes africaines." },
            ].map((c, i) => (
              <div key={i} className={`sr-scale sr-d${i + 1} bg-white border border-gray-100 rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow shadow-sm`}>
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
              <div key={i} className={`sr-up sr-d${i + 1} bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start`}>
                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-base shrink-0" style={{ backgroundColor: r.color }}>
                  {r.n}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{r.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#1a2b4a] rounded-xl p-6 md:p-8 flex items-start gap-4">
            <Lightbulb size={24} className="text-[#F57C00] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#F57C00] text-sm uppercase tracking-wide mb-2">Projection Financière</h4>
              <p className="text-white/80 text-sm leading-relaxed">Le déploiement d'un cluster industriel H.E.R.O.® combiné au trading de matériaux recyclés permet de capter des marchés publics et privés se chiffrant en <strong className="text-white">millions d'euros, de dollars et en dizaines de milliards de FCFA</strong>.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md">
              DEMANDER UN DOSSIER D'INVESTISSEMENT <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <FloatingActionButton />
      <Footer />
    </div>
  );
}
