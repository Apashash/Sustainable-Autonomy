import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Recycle, Zap, Building2, Truck, Droplet, Factory } from "lucide-react";

// Assets
import heroImg       from "@assets/feceb23a-4a60-414a-943f-282e1c2ab911_1782452676920.jpeg";
import aboutImg      from "@assets/efcd27e7-9cc0-41fe-8c8e-a590ec77c2a6_1782452676920.jpeg";
import svc1Img       from "@assets/8486619a-4af6-478a-8ed2-b378cd2cf4e3_1782452676920.jpeg";
import svc2Img       from "@assets/a22b47b7-9012-4f22-93f7-9019ab75b306_1782452676920.jpeg";
import svc3Img       from "@assets/d533f035-dad8-4e38-9532-945543a9faa2_1782452676919.jpeg";
import svc4Img       from "@assets/7f0dac84-e7e2-4d58-89d7-dc8b22228aa9_1782452676920.jpeg";
import svc5Img       from "@assets/dd12a05e-615d-4ebe-b991-0a2af297bcd0_1782452676920.jpeg";
import svc6Img       from "@assets/ae7fe586-7bf4-4de0-b0ad-0874113871ad_1782452676920.jpeg";
import proj1Img      from "@assets/308ead75-fc65-4e7a-8a66-6129152ad5d7_1782452676920.jpeg";
import proj2Img      from "@assets/aa2f8511-e97e-4985-8caf-4fb54a44bfcb_1782452676920.jpeg";
import proj3Img      from "@assets/f838483e-0d73-4d7c-ab3a-70bb00fe2395_1782452676920.jpeg";
import proj4Img      from "@assets/1a8eaeba-11cf-4372-8881-47b0d19ed33f_1782452676920.jpeg";

// ── Feature cards below hero ────────────────────────────────────────────────
const features = [
  { icon: <Recycle size={36} className="text-[#4CAF50]" />, title: "PLASTI-BUILD®", desc: "Construction écologique à partir de déchets plastiques transformés en briques durables." },
  { icon: <Zap size={36} className="text-[#F57C00]" />, title: "Énergie Solaire", desc: "Systèmes solaires et hydrauliques souverains pour une autonomie énergétique totale." },
  { icon: <Building2 size={36} className="text-[#8B1A1A]" />, title: "Architecture Époxy", desc: "Revêtements époxy haut de gamme et finitions architecturales de prestige." },
  { icon: <Truck size={36} className="text-[#1565C0]" />, title: "Mobilité & Industrie", desc: "Tricycles cargo électriques et solutions industrielles pour le marché africain." },
];

// ── Services ────────────────────────────────────────────────────────────────
const services = [
  { img: svc1Img, icon: <Building2 size={22} />, color: "#8B1A1A", title: "Architecture & Art Époxy", desc: "Sols époxy industriels, décoration murale et finitions architecturales pour particuliers et entreprises." },
  { img: svc2Img, icon: <Recycle size={22} />, color: "#4CAF50", title: "PLASTI-BUILD® & H.E.R.O.®", desc: "Briques en plastique recyclé, panneaux modulaires et systèmes de construction révolutionnaires." },
  { img: svc3Img, icon: <Zap size={22} />, color: "#F57C00", title: "Énergie & Eau", desc: "Installations solaires, systèmes hydrauliques autonomes et gestion durable des ressources." },
  { img: svc4Img, icon: <Truck size={22} />, color: "#1565C0", title: "Mobilité Industrielle", desc: "Tricycles cargo électriques pour la logistique urbaine et transport de marchandises en Afrique." },
  { img: svc5Img, icon: <Factory size={22} />, color: "#4CAF50", title: "Ingénierie Industrielle", desc: "Conception, installation et maintenance d'équipements industriels sur mesure." },
  { img: svc6Img, icon: <Droplet size={22} />, color: "#1565C0", title: "Traitement de l'Eau", desc: "Systèmes de purification, de stockage et de distribution d'eau pour particuliers et collectivités." },
];

// ── Projects ────────────────────────────────────────────────────────────────
const projects = [
  { img: proj1Img, label: "PLASTI-BUILD®", title: "Chantier Résidentiel Douala" },
  { img: proj2Img, label: "ART ÉPOXY", title: "Sol Industriel Haut de Gamme" },
  { img: proj3Img, label: "ÉNERGIE SOLAIRE", title: "Installation Système Autonome" },
  { img: proj4Img, label: "H.E.R.O.®", title: "Transformation Déchets Plastiques" },
];

// ── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: "15+", label: "Années d'Expérience" },
  { value: "200+", label: "Projets Réalisés" },
  { value: "5", label: "Domaines d'Expertise" },
  { value: "3", label: "Pays Couverts" },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center" style={{ paddingTop: "7rem" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="PADESS Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="inline-block bg-[#F57C00] text-white text-xs font-bold px-4 py-1.5 rounded mb-6 tracking-widest uppercase">
            15 Ans d'Expérience en Ingénierie
          </div>
          <h1 className="text-white font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", maxWidth: "700px" }}>
            Solutions d'Ingénierie<br />
            <span className="text-[#F57C00]">Innovantes & Durables</span><br />
            pour l'Afrique
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-xl">
            PADESS ENGINEERING SARL — Le centre de commandement d'une nouvelle révolution industrielle africaine. Transformer le déchet en richesse, installer des systèmes énergétiques souverains.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-8 py-4 rounded transition-colors shadow-lg">
              NOS SERVICES <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded transition-colors">
              NOUS CONTACTER
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS (below hero) ────────────────────────────────────── */}
      <section className="relative z-10 -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mt-16 gap-0 shadow-xl rounded-lg overflow-hidden">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border-r border-gray-100 last:border-r-0 p-8 flex flex-col gap-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="mb-1">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                <a href="#services" className="text-sm font-bold text-[#1565C0] hover:text-[#F57C00] transition-colors flex items-center gap-1 mt-auto">
                  EN SAVOIR PLUS <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image col */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={aboutImg} alt="À propos de PADESS" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#1565C0]/10" />
              </div>
              {/* Years badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#F57C00] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl text-center">
                <span className="text-4xl font-extrabold leading-none">15</span>
                <span className="text-xs font-bold uppercase leading-tight mt-1">Ans<br/>d'Expertise</span>
              </div>
              {/* Accent bar */}
              <div className="absolute -left-4 top-8 w-2 h-2/3 bg-[#4CAF50] rounded-full" />
            </div>

            {/* Text col */}
            <div className="lg:pl-6">
              <p className="text-[#F57C00] font-bold text-sm tracking-widest uppercase mb-3">À PROPOS DE NOUS</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                PADESS Engineering —<br />
                <span className="text-[#1565C0]">L'Innovation au Service</span><br />
                de l'Autonomie Africaine
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fondée à Douala, Cameroun, PADESS ENGINEERING SARL est une entreprise d'ingénierie multi-sectorielle spécialisée dans la construction écologique, l'énergie durable et la mobilité industrielle. Nous transformons les défis africains en opportunités économiques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle size={20} className="text-[#4CAF50] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Travail Innovant</h4>
                    <p className="text-gray-500 text-xs mt-1">Technologies brevetées adaptées au marché africain</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle size={20} className="text-[#4CAF50] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Construction Unique</h4>
                    <p className="text-gray-500 text-xs mt-1">Systèmes PLASTI-BUILD® et H.E.R.O.® exclusifs</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold px-8 py-4 rounded transition-colors shadow-md">
                DÉCOUVRIR PLUS <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1565C0] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-extrabold text-[#F57C00]">{s.value}</div>
                <div className="text-sm font-semibold mt-2 text-white/80 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F57C00] font-bold text-sm tracking-widest uppercase mb-3">NOS SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Nous Fournissons des Solutions<br />
              <span className="text-[#1565C0]">d'Ingénierie de Qualité</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-0 right-0 w-14 h-14 flex items-center justify-center text-white rounded-tl-xl"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <a href="#contact" className="text-sm font-bold uppercase tracking-wide flex items-center gap-1 transition-colors" style={{ color: s.color }}>
                    EN SAVOIR PLUS <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ──────────────────────────────────────────────────── */}
      <section id="realisations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F57C00] font-bold text-sm tracking-widest uppercase mb-3">NOS RÉALISATIONS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Nos Projets <span className="text-[#1565C0]">en Afrique</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden shadow-md aspect-[3/4] cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[#F57C00] text-xs font-bold uppercase tracking-widest">{p.label}</span>
                  <h4 className="text-white font-bold mt-1">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTISSEURS ─────────────────────────────────────────────────── */}
      <section id="investisseurs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F57C00] font-bold text-sm tracking-widest uppercase mb-3">OPPORTUNITÉS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Espace <span className="text-[#1565C0]">Investisseurs</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              PADESS offre des opportunités d'investissement exceptionnelles dans des marchés en forte croissance sur le continent africain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { val: "65%", label: "Marges PLASTI-BUILD®", color: "#4CAF50", desc: "Matière première à coût zéro — le déchet est notre ressource principale." },
              { val: "18–30m", label: "ROI Projeté", color: "#F57C00", desc: "Retour sur investissement en 18 à 30 mois selon les unités déployées." },
              { val: "$/€", label: "Trading International", color: "#8B1A1A", desc: "Couverture naturelle contre les dévaluations monétaires locales." },
              { val: "↑", label: "Emplois Massifs", color: "#1565C0", desc: "Création d'emplois locaux dans la collecte, transformation et construction." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow border-t-4" style={{ borderColor: item.color }}>
                <div className="text-5xl font-extrabold mb-3" style={{ color: item.color }}>{item.val}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-10 py-4 rounded transition-colors shadow-lg">
              DEVENIR PARTENAIRE <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#F57C00] font-bold text-sm tracking-widest uppercase mb-3">CONTACTEZ-NOUS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Parlons de <span className="text-[#1565C0]">Votre Projet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Chaque demande est traitée avec la rigueur d'un cabinet de conseil international. Notre équipe d'experts vous répond dans les 24 heures.
              </p>
              {[
                { icon: "📞", title: "Téléphone & WhatsApp", lines: ["WhatsApp / Expertise : +237 697 221 970", "(+237) 658 92 90 70  |  (+237) 690 38 95 45"], color: "#4CAF50" },
                { icon: "✉️", title: "Email", lines: ["npadess@hoo.com", "padess@engineering.com", "ahmednchange@yahoo.com"], color: "#1565C0" },
                { icon: "📍", title: "Siège Social", lines: ["Douala, Cameroun"], color: "#F57C00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: item.color + "18" }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    {item.lines.map((l, j) => <p key={j} className="text-gray-500 text-sm">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom complet ou Entreprise</label>
                  <input type="text" placeholder="Votre nom" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] bg-white text-gray-900" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input type="email" placeholder="votre@email.com" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] bg-white text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone</label>
                    <input type="tel" placeholder="+237 ..." className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] bg-white text-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Votre Projet / Message</label>
                  <textarea rows={5} placeholder="Décrivez vos besoins d'ingénierie, d'investissement ou de partenariat..." className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1565C0] bg-white resize-y text-gray-900" />
                </div>
                <button type="submit" className="w-full bg-[#F57C00] hover:bg-[#E65100] text-white font-bold py-4 rounded text-base transition-colors shadow-md">
                  ENVOYER MA DEMANDE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
