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
  { icon: <Recycle size={28} />,   color: "#4CAF50", title: "Construction PLASTI-BUILD®",    desc: "Briques écologiques à partir de déchets plastiques recyclés pour une construction durable et économique." },
  { icon: <Building2 size={28} />, color: "#8B1A1A", title: "Architecture & Art Époxy",       desc: "Revêtements époxy industriels, décoration murale et finitions architecturales haut de gamme." },
  { icon: <Zap size={28} />,       color: "#F57C00", title: "Systèmes Énergétiques",           desc: "Installations solaires et hydrauliques souverains pour une autonomie énergétique totale." },
  { icon: <Droplet size={28} />,   color: "#1565C0", title: "Traitement de l'Eau",             desc: "Systèmes de purification, stockage et distribution d'eau pour particuliers et collectivités." },
  { icon: <Truck size={28} />,     color: "#1565C0", title: "Mobilité Industrielle",           desc: "Tricycles cargo électriques pour la logistique urbaine et transport de marchandises." },
  { icon: <Factory size={28} />,   color: "#4CAF50", title: "H.E.R.O.® System",               desc: "Technologie brevetée de valorisation des déchets plastiques en matériaux de construction." },
  { icon: <Sun size={28} />,       color: "#F57C00", title: "Pôle Énergie Renouvelable",       desc: "Études, conception et maintenance de centrales solaires et micro-hydrauliques." },
  { icon: <TrendingUp size={28} />,color: "#8B1A1A", title: "Conseil & Investissement",        desc: "Accompagnement stratégique et opportunités d'investissement dans les secteurs porteurs d'Afrique." },
  { icon: <Leaf size={28} />,      color: "#4CAF50", title: "Gestion des Déchets",             desc: "Collecte, tri et valorisation industrielle des déchets plastiques pour les villes et entreprises." },
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
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className="overflow-hidden w-full relative"
      style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={track}
        className="flex gap-5"
        style={{
          animation: `scrollLeft 28s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
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
      {paused && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-black/40 text-white text-xs px-3 py-1 rounded-full">⏸ En pause</span>
        </div>
      )}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
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
      <section className="bg-white py-12 lg:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-stretch lg:min-h-[560px]">
          {/* Left — text */}
          <div className="flex flex-col justify-center lg:w-1/2 lg:pr-12 py-10">
            <h1 className="font-bold leading-snug mb-5 text-[#1a2b4a] tracking-normal" style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)" }}>
              Services d'Ingénierie<br />
              <span className="text-[#F57C00]">Innovants & Durables</span><br />
              pour l'Afrique
            </h1>
            <p className="text-gray-500 text-base mb-8 max-w-lg">
              Construction écologique PLASTI-BUILD®, systèmes énergétiques souverains, art époxy, mobilité industrielle et bien plus encore — des solutions complètes de confiance pour vos projets en Afrique.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-6 py-3.5 rounded transition-colors shadow-md text-sm">
                OBTENIR UN DEVIS <ChevronRight size={16} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-[#1a2b4a] text-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white font-bold px-6 py-3.5 rounded transition-colors text-sm">
                VOIR NOS SERVICES
              </a>
            </div>
          </div>
          {/* Right — image */}
          <div className="lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="h-72 lg:h-full w-full overflow-hidden lg:rounded-none rounded-xl">
              <img src={heroImg} alt="PADESS Engineering Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent lg:from-white/10" />
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white group">
                <div className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold mt-2 transition-colors" style={{ color: s.color }}>
                    EN SAVOIR PLUS <ArrowRight size={12} />
                  </a>
                </div>
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
                <div className="flex items-center gap-2"><Phone size={14} className="text-[#F57C00]" /> +237 697 221 970</div>
                <div className="flex items-center gap-2"><span className="text-[#F57C00]">✉</span> npadess@hoo.com</div>
                <div className="flex items-center gap-2"><span className="text-[#F57C00]">📍</span> Douala, Cameroun</div>
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

      {/* ══ ÉQUIPEMENTS & MATÉRIAUX ════════════════════════════════════════ */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 className="text-white font-bold text-xl">Matériaux Écologiques</h3>
              <p className="text-white/80 text-sm mt-1">Briques PLASTI-BUILD® certifiées et matériaux durables pour vos constructions.</p>
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
      <section id="investisseurs" className="py-16 bg-[#1a2b4a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#F57C00] font-bold text-xs tracking-widest uppercase mb-2">OPPORTUNITÉS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Espace Investisseurs</h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto text-sm">PADESS offre des opportunités d'investissement exceptionnelles dans des marchés en forte croissance en Afrique.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { val: "65%",    label: "Marges PLASTI-BUILD®",   color: "#4CAF50", desc: "Matière première à coût zéro — le déchet est notre ressource principale." },
              { val: "18–30m", label: "ROI Projeté",             color: "#F57C00", desc: "Retour sur investissement en 18 à 30 mois selon les unités déployées." },
              { val: "$/€",    label: "Trading International",   color: "#8B1A1A", desc: "Couverture naturelle contre les dévaluations monétaires locales." },
              { val: "↑",      label: "Emplois Massifs",         color: "#1565C0", desc: "Création d'emplois locaux dans la collecte, transformation et construction." },
            ].map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold mb-2" style={{ color: c.color }}>{c.val}</div>
                <h4 className="font-bold text-white text-sm mb-2">{c.label}</h4>
                <p className="text-white/50 text-xs">{c.desc}</p>
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
