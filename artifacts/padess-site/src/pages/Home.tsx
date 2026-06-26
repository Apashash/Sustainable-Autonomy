import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, Shield, Zap, Target, Factory, Droplet, 
  Leaf, TrendingUp, Globe, Recycle, Building,
  Mail, MapPin, Phone
} from "lucide-react";

// Assets
import heroImg from "@assets/feceb23a-4a60-414a-943f-282e1c2ab911_1782452676920.jpeg";
import visionImg from "@assets/efcd27e7-9cc0-41fe-8c8e-a590ec77c2a6_1782452676920.jpeg";
import archImg1 from "@assets/8486619a-4af6-478a-8ed2-b378cd2cf4e3_1782452676920.jpeg";
import archImg2 from "@assets/feceb23a-4a60-414a-943f-282e1c2ab911_1782452676920.jpeg";
import archImg3 from "@assets/dd12a05e-615d-4ebe-b991-0a2af297bcd0_1782452676920.jpeg";
import archImg4 from "@assets/f838483e-0d73-4d7c-ab3a-70bb00fe2395_1782452676920.jpeg";
import plastiImg1 from "@assets/a22b47b7-9012-4f22-93f7-9019ab75b306_1782452676920.jpeg";
import plastiImg2 from "@assets/308ead75-fc65-4e7a-8a66-6129152ad5d7_1782452676920.jpeg";
import plastiImg3 from "@assets/aa2f8511-e97e-4985-8caf-4fb54a44bfcb_1782452676920.jpeg";
import plastiImg4 from "@assets/ae7fe586-7bf4-4de0-b0ad-0874113871ad_1782452676920.jpeg";
import energieImg1 from "@assets/d533f035-dad8-4e38-9532-945543a9faa2_1782452676919.jpeg";
import energieImg2 from "@assets/8464e48a-bcf9-4b34-b469-ef4523c2acd0_1782452676919.jpeg";
import energieImg3 from "@assets/df0e837b-4930-429c-832d-8a8a6e78715c_1782452676920.jpeg";
import energieImg4 from "@assets/71b93d8a-1e71-46c9-8664-998421ba93d8_1782452676919.jpeg";
import energieImg5 from "@assets/6d54bec4-c789-4c3e-bfcc-c0839f61e8fc_1782452676919.jpeg";
import indImg1 from "@assets/7f0dac84-e7e2-4d58-89d7-dc8b22228aa9_1782452676920.jpeg";
import indImg2 from "@assets/1a8eaeba-11cf-4372-8881-47b0d19ed33f_1782452676920.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24" id="hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg} 
            alt="PADESS Team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 mb-6 border border-padess-gold/30 bg-padess-gold/10 text-padess-gold rounded-full text-sm font-bold tracking-widest uppercase">
              L'INNOVATION DURABLE AU SERVICE DE VOTRE AUTONOMIE !
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,7vw,5.5rem)] font-display font-extrabold leading-[1.05] mb-8 text-white">
              NOUS NE RÉPARONS PAS L'AVENIR,{" "}
              <span className="text-[#F57C00]">NOUS L'INVENTONS.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-light">
              Le centre de commandement d'une nouvelle révolution industrielle africaine. Transformer le déchet en richesse, installer des systèmes énergétiques souverains et bâtir l'éco-construction à une vitesse fulgurante.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-padess-green hover:bg-padess-green/90 text-white font-bold h-14 px-8 text-lg">
                <a href="#hero-concept">Découvrir nos solutions <ArrowRight className="ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-padess-orange text-padess-orange hover:bg-padess-orange hover:text-white font-bold h-14 px-8 text-lg">
                <a href="#contact">Contacter l'expert</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VISION STRATÉGIQUE */}
      <section className="py-32 relative" id="vision">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-padess-orange font-bold tracking-widest text-sm mb-4">I. VISION STRATÉGIQUE</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-8">L'ÈRE DE LA TRANSFORMATION</motion.h3>
              
              <motion.blockquote variants={fadeUp} className="border-l-4 border-padess-gold pl-6 py-2 mb-10">
                <p className="text-2xl font-display italic text-white/90">
                  "Le déchet n'est pas une fin, c'est le gisement d'une nouvelle ère industrielle. Nous ne consommons pas le monde, nous l'ingénions."
                </p>
                <footer className="mt-4 text-padess-gold font-bold">— M. Ahmed NCHANGE</footer>
              </motion.blockquote>

              <div className="space-y-8">
                <motion.div variants={fadeUp} className="flex gap-4">
                  <div className="mt-1 bg-padess-blue/20 p-3 rounded-lg text-padess-blue shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">L'HUB DE L'AUTONOMIE TERRITORIALE</h4>
                    <p className="text-foreground/70">Systèmes souverains, énergie des sols, habitat rapide, chaque mètre carré devient une unité de richesse.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-4">
                  <div className="mt-1 bg-padess-orange/20 p-3 rounded-lg text-padess-orange shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">LE LEVIER DU TRADING STRATÉGIQUE</h4>
                    <p className="text-foreground/70">Broker-Trader International, sécuriser les chaînes d'approvisionnement, valoriser les matières premières critiques.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-4">
                  <div className="mt-1 bg-padess-green/20 p-3 rounded-lg text-padess-green shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">L'INGÉNIERIE DU FUTUR (R&D)</h4>
                    <p className="text-foreground/70">Pionnier du concept H.E.R.O.®️ et PLASTI-BUILD®️, le déchet devient ressource éternelle.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div variants={fadeUp} className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-padess-orange/10">
              <div className="absolute inset-0 bg-padess-orange/20 mix-blend-overlay z-10"></div>
              <img src={visionImg} alt="Engineer at sunset" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ARCHITECTURE & DESIGN */}
      <section className="py-32 bg-card relative" id="architecture">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-padess-blue font-bold tracking-widest text-sm mb-4">II. ARCHITECTURE & DESIGN "HAUTE COUTURE"</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-6">L'Ingénierie au Service du Raffinement Sensoriel</motion.h3>
            <motion.p variants={fadeUp} className="text-lg text-foreground/70">
              PROJECTION : Une résidence VIP où le mobilier semble flotter sur un sol de quartz liquide, chaque pièce numérotée et personnalisée.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div variants={fadeUp} className="group relative h-80 rounded-xl overflow-hidden">
              <img src={archImg1} alt="River table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white">Ébénisterie Prestige</h4>
                <p className="text-white/70 text-sm mt-2">Bois & Époxy "River Tables"</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative h-80 rounded-xl overflow-hidden">
              <img src={archImg2} alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white">Art Époxy "Miroir"</h4>
                <p className="text-white/70 text-sm mt-2">Finition monolithique incassable</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative h-80 rounded-xl overflow-hidden">
              <img src={archImg3} alt="Epoxy patterns" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white">Motifs Géométriques</h4>
                <p className="text-white/70 text-sm mt-2">Effets marbrés profonds</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative h-80 rounded-xl overflow-hidden">
              <img src={archImg4} alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white">Plafonds Artistiques</h4>
                <p className="text-white/70 text-sm mt-2">Atmosphère royale & jeux de lumières</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLASTI-BUILD & H.E.R.O */}
      <section className="py-32 relative overflow-hidden" id="hero-concept">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-padess-green/5 blur-[150px] -z-10 rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src={plastiImg1} alt="Roof tiles" className="rounded-xl w-full h-64 object-cover" />
              <img src={plastiImg2} alt="Macro tiles" className="rounded-xl w-full h-64 object-cover mt-8" />
              <img src={plastiImg3} alt="Display stand" className="rounded-xl w-full h-64 object-cover" />
              <img src={plastiImg4} alt="Shelving unit" className="rounded-xl w-full h-64 object-cover mt-8" />
            </div>

            <div className="order-1 lg:order-2">
              <motion.h2 variants={fadeUp} className="text-padess-green font-bold tracking-widest text-sm mb-4">III. PLASTI-BUILD®️ & CONCEPT H.E.R.O.®️</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-6">La Révolution de la Rapidité Fulgurante</motion.h3>
              <motion.p variants={fadeUp} className="text-xl text-foreground/80 mb-8">
                Le Bâtiment "Lego". Érection d'une cité ouvrière de 20 bâtiments en seulement 30 jours, isolation thermique native supprimant la climatisation.
              </motion.p>

              <ul className="space-y-6">
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-padess-green mt-2.5"></div>
                  <div>
                    <strong className="text-white block mb-1">H.E.R.O.®️ (Habitation Écologique à Rendement Optimisé)</strong>
                    <span className="text-foreground/70">Briques et parpaings en composite plastique-sable avec système d'emboîtement mécanique.</span>
                  </div>
                </motion.li>
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-padess-green mt-2.5"></div>
                  <div>
                    <strong className="text-white block mb-1">Vitesse sans précédent</strong>
                    <span className="text-foreground/70">Assemblage sans mortier classique. Le temps de chantier est divisé par 5.</span>
                  </div>
                </motion.li>
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-padess-green mt-2.5"></div>
                  <div>
                    <strong className="text-white block mb-1">Robustesse Totale</strong>
                    <span className="text-foreground/70">Matériaux 3x plus résistants que le béton, isolants thermiques, hydrofuges et ignifuges.</span>
                  </div>
                </motion.li>
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-padess-green mt-2.5"></div>
                  <div>
                    <strong className="text-white block mb-1">Assainissement Biofil</strong>
                    <span className="text-foreground/70">Fosses à transformation biologique, zéro vidange à vie, sans odeurs, sans pollution des sols.</span>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ÉNERGIE & EAU */}
      <section className="py-32 bg-padess-blue/5 border-y border-padess-blue/10 relative" id="energie">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-padess-blue font-bold tracking-widest text-sm mb-4">IV. PÔLE ÉNERGIE & EAU</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-6">L'INDÉPENDANCE TOTALE</motion.h3>
            <motion.p variants={fadeUp} className="text-lg text-foreground/70">
              Interconnexion Intelligente pour une Résilience 24h/24
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-padess-blue/50 transition-colors">
              <img src={energieImg1} alt="Bioflow power" className="w-full h-56 object-cover border-b border-white/5" />
              <div className="p-8">
                <Zap className="text-padess-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-3">PADESS-BIOFLOW POWER™️</h4>
                <p className="text-foreground/70">Innovation de rupture exploitant l'énergie microbienne (MFC) à partir des bactéries des sols et des racines. Électricité stable même par temps couvert ou sans vent.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-padess-blue/50 transition-colors">
              <img src={energieImg3} alt="Biogas" className="w-full h-56 object-cover border-b border-white/5" />
              <div className="p-8">
                <Leaf className="text-padess-green mb-4" size={32} />
                <h4 className="text-xl font-bold mb-3">Biogaz Domestique</h4>
                <p className="text-foreground/70">Transformation des biodéchets organiques en gaz de cuisson et en électricité stable pour une autonomie énergétique quotidienne.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-padess-blue/50 transition-colors">
              <img src={energieImg2} alt="Water pump" className="w-full h-56 object-cover border-b border-white/5" />
              <div className="p-8">
                <Droplet className="text-padess-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-3">Forages & Filtration Ionique</h4>
                <p className="text-foreground/70">Accès permanent à une eau potable de qualité supérieure via des systèmes de pompage autonomes intelligents.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIE CIRCULAIRE */}
      <section className="py-32 relative" id="industrie">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-padess-red font-bold tracking-widest text-sm mb-4">V. MOBILITÉ & INDUSTRIE CIRCULAIRE</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-8">Rien ne se perd, <br/>tout se transforme.</motion.h3>
              
              <div className="space-y-8">
                <motion.div variants={fadeUp} className="border-l-2 border-padess-red pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Recycle className="text-padess-red" size={20}/> Métallurgie de Recyclage</h4>
                  <p className="text-foreground/70">Transformation des canettes en aluminium pour fabriquer des jantes de luxe et des composants mécaniques de haute précision.</p>
                </motion.div>
                <motion.div variants={fadeUp} className="border-l-2 border-padess-red pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Building className="text-padess-red" size={20}/> Mobilier Indestructible</h4>
                  <p className="text-foreground/70">Brouettes et sanitaires en polymères renforcés, conçus pour résister aux conditions extrêmes des chantiers africains.</p>
                </motion.div>
                <motion.div variants={fadeUp} className="border-l-2 border-padess-red pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Zap className="text-padess-red" size={20}/> Rétrofit Électrique</h4>
                  <p className="text-foreground/70">Conversion de véhicules thermiques en 100% électriques pour supprimer définitivement la dépendance aux hydrocarbures.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <motion.img variants={fadeUp} src={indImg1} alt="Factory" className="rounded-2xl w-full h-[300px] object-cover" />
              <motion.img variants={fadeUp} src={indImg2} alt="Aluminum recycling" className="rounded-2xl w-full h-[300px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTISSEURS */}
      <section className="py-32 bg-card relative overflow-hidden" id="investisseurs">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-padess-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-padess-gold font-bold tracking-widest text-sm mb-4">VI. ESPACE INVESTISSEURS</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold mb-6">PERFORMANCE & RENDEMENTS</motion.h3>
            <motion.p variants={fadeUp} className="text-xl text-padess-gold/90 font-medium">
              Pourquoi PADESS ENGINEERING est l'investissement le plus stratégique du continent ?
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <motion.div variants={fadeUp} className="bg-background border border-padess-gold/20 p-8 rounded-2xl text-center">
              <div className="text-5xl font-display font-bold text-padess-gold mb-4">65%</div>
              <h4 className="text-lg font-bold mb-2">Marges PLASTI-BUILD®️</h4>
              <p className="text-sm text-foreground/60">Matière première à coût zéro : notre ressource principale est le déchet.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-background border border-padess-gold/20 p-8 rounded-2xl text-center">
              <div className="text-5xl font-display font-bold text-padess-gold mb-4">18-30<span className="text-2xl">m</span></div>
              <h4 className="text-lg font-bold mb-2">ROI Projeté</h4>
              <p className="text-sm text-foreground/60">Selon les unités industrielles déployées sur le territoire.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-background border border-padess-gold/20 p-8 rounded-2xl text-center">
              <div className="text-5xl font-display font-bold text-padess-gold mb-4">$/€</div>
              <h4 className="text-lg font-bold mb-2">Trading International</h4>
              <p className="text-sm text-foreground/60">Couverture naturelle contre les dévaluations monétaires locales.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-background border border-padess-gold/20 p-8 rounded-2xl text-center">
              <div className="text-5xl font-display font-bold text-padess-gold mb-4"><TrendingUp className="mx-auto" size={48}/></div>
              <h4 className="text-lg font-bold mb-2">Emplois Massifs</h4>
              <p className="text-sm text-foreground/60">Création d'emplois locaux dans la collecte, transformation et construction.</p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-4xl mx-auto bg-background p-8 border border-white/10 rounded-2xl">
            <h4 className="text-xl font-bold mb-4">PROJECTION FINANCIÈRE & SOUVERAINETÉ</h4>
            <p className="text-foreground/80 mb-4">
              Cluster industriel H.E.R.O.®️ permettant de capter des marchés publics et privés en millions d'euros/dollars et dizaines de milliards de FCFA. Solution clé en main pour stopper l'exode rural, réduire les importations et dépolluer les métropoles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 relative" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-padess-orange font-bold tracking-widest text-sm mb-4">CONTACT & EXPERTISE</motion.h2>
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-6">Prêt à inventer l'avenir ?</motion.h3>
              <motion.p variants={fadeUp} className="text-lg text-foreground/70 mb-10">
                Chaque demande est traitée avec la rigueur d'un cabinet de conseil international.
              </motion.p>
              
              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="bg-padess-green/20 p-4 rounded-xl text-padess-green">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Téléphone & WhatsApp</h4>
                    <p className="text-foreground/70 mt-1">WhatsApp / Expertise : +237 697 221 970</p>
                    <p className="text-foreground/70">Appels Directs : (+237) 658 92 90 70 | (+237) 690 38 95 45</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="bg-padess-blue/20 p-4 rounded-xl text-padess-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email</h4>
                    <p className="text-foreground/70 mt-1">npadess@hoo.com</p>
                    <p className="text-foreground/70">padess@engineering.com</p>
                    <p className="text-foreground/70">ahmednchange@yahoo.com</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="bg-padess-orange/20 p-4 rounded-xl text-padess-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Siège Social</h4>
                    <p className="text-foreground/70 mt-1">Douala, Cameroun</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div variants={fadeUp} className="bg-card p-8 rounded-3xl border border-white/10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Nom complet ou Entreprise</label>
                  <Input placeholder="Votre nom" className="bg-background/50 h-12 border-white/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                    <Input type="email" placeholder="votre@email.com" className="bg-background/50 h-12 border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Téléphone</label>
                    <Input placeholder="+237 ..." className="bg-background/50 h-12 border-white/10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Votre Projet / Message</label>
                  <Textarea placeholder="Décrivez vos besoins d'ingénierie, d'investissement ou de partenariat..." className="bg-background/50 min-h-[150px] border-white/10 resize-y" />
                </div>
                <Button className="w-full h-14 text-lg font-bold bg-padess-orange hover:bg-padess-orange/90 text-white">
                  Envoyer ma demande
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
