import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@assets/padess-logo-transparent.png";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "À Propos", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Investisseurs", href: "#investisseurs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 w-full z-50 bg-[#1565C0] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+237697221970" className="flex items-center gap-1.5 hover:text-[#F57C00] transition-colors">
              <Phone size={13} /> +237 697 221 970
            </a>
            <a href="mailto:npadess@hoo.com" className="hidden sm:flex items-center gap-1.5 hover:text-[#F57C00] transition-colors">
              <Mail size={13} /> npadess@hoo.com
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-white/70">
            <span>📍 Douala, Cameroun</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed top-8 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white border-b border-gray-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img src={logo} alt="PADESS ENGINEERING" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#1565C0] transition-colors rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-[#F57C00] hover:bg-[#E65100] text-white font-bold px-6 py-3 rounded text-sm transition-colors shadow-md"
            >
              OBTENIR UN DEVIS
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[200] bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[#1565C0] text-white px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="PADESS ENGINEERING" className="h-10 w-auto object-contain brightness-0 invert" />
          <button onClick={() => setOpen(false)} aria-label="Fermer" className="text-white">
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col flex-1 px-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 border-b border-gray-100 text-base font-semibold text-gray-800 hover:text-[#1565C0] transition-colors"
            >
              {link.name}
              <span className="text-gray-300">›</span>
            </a>
          ))}
        </nav>
        <div className="px-6 py-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#F57C00] hover:bg-[#E65100] text-white font-bold py-4 rounded text-base transition-colors"
          >
            OBTENIR UN DEVIS
          </a>
        </div>
      </div>
    </>
  );
}
