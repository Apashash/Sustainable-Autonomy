import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@assets/padess-logo-transparent.png";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "À Propos", href: "#about" },
  { name: "Avis", href: "#avis" },
  { name: "Réalisations", href: "#realisations", hasDropdown: true },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 w-full z-50 bg-[#1a2b4a] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+237697221970" className="flex items-center gap-1.5 hover:text-[#F57C00] transition-colors">
              <Phone size={12} /> +237 697 221 970
            </a>
            <a href="mailto:npadess@hoo.com" className="hidden sm:flex items-center gap-1.5 hover:text-[#F57C00] transition-colors">
              <Mail size={12} /> npadess@hoo.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1">✔ Entreprise Agréée</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1">✔ Sans Frais Cachés</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1">✔ Noté 5 Étoiles</span>
          </div>
          <a
            href="#contact"
            className="bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-4 py-1.5 rounded text-xs transition-colors whitespace-nowrap"
          >
            OBTENIR UN DEVIS
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="fixed top-8 w-full z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="PADESS ENGINEERING" className="h-11 w-auto object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-extrabold text-[#1a2b4a] text-sm tracking-wide">PADESS</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Engineering & Storage</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-0.5 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#F57C00] transition-colors rounded"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={13} className="opacity-60" />}
              </a>
            ))}
          </nav>

          <button className="lg:hidden p-2 text-gray-700" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[200] bg-white flex flex-col lg:hidden transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="bg-[#1a2b4a] px-5 py-4 flex items-center justify-between">
          <img src={logo} alt="PADESS" className="h-9 brightness-0 invert" />
          <button onClick={() => setOpen(false)} className="text-white"><X size={24} /></button>
        </div>
        <nav className="flex flex-col px-5 pt-2 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 border-b border-gray-100 text-sm font-semibold text-gray-800 hover:text-[#F57C00]"
            >
              {link.name} <span className="text-gray-300">›</span>
            </a>
          ))}
        </nav>
        <div className="p-5">
          <a href="#contact" onClick={() => setOpen(false)} className="block w-full text-center bg-[#F57C00] text-white font-bold py-3.5 rounded transition-colors">
            OBTENIR UN DEVIS
          </a>
        </div>
      </div>
    </>
  );
}
