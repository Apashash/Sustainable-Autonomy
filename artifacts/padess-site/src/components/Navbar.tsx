import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/b92fe1f4-ff1b-4b54-b8d0-81f6ef9fe088_1782452359768.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Architecture & Époxy", href: "#architecture" },
    { name: "H.E.R.O.®", href: "#hero-concept" },
    { name: "Énergie & Eau", href: "#energie" },
    { name: "Industrie", href: "#industrie" },
    { name: "Investisseurs", href: "#investisseurs" },
  ];

  return (
    <>
      {/* Color stripe matching logo's 4 quadrants */}
      <div className="fixed top-0 w-full z-50 flex h-1">
        <div className="flex-1 bg-[#4CAF50]" />
        <div className="flex-1 bg-[#F57C00]" />
        <div className="flex-1 bg-[#8B1A1A]" />
        <div className="flex-1 bg-[#1565C0]" />
      </div>

      <header
        className={`fixed top-1 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo — always visible with white background container */}
          <a href="#" className="flex items-center gap-3 z-50" data-testid="link-home">
            <div className="bg-white rounded-lg p-1.5 shadow-lg flex items-center justify-center shrink-0">
              <img
                src={logo}
                alt="PADESS ENGINEERING"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wide text-white">
                PADESS <span className="text-[#F57C00]">ENGINEERING</span>
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 tracking-widest font-medium uppercase hidden sm:block">
                SARL — Douala, Cameroun
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white ml-2 font-bold shadow-lg shadow-[#4CAF50]/20"
            >
              <a href="#contact" data-testid="button-contact-nav">Contactez-nous</a>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-[#0a0f1a]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-7 transition-transform duration-300 lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Logo in mobile menu */}
            <div className="bg-white rounded-xl p-3 mb-2">
              <img src={logo} alt="PADESS ENGINEERING" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-[#F57C00] font-display font-bold text-sm tracking-widest uppercase text-center px-8">
              L'Innovation Durable au Service de votre Autonomie
            </p>
            <div className="w-16 flex h-1 rounded overflow-hidden">
              <div className="flex-1 bg-[#4CAF50]" />
              <div className="flex-1 bg-[#F57C00]" />
              <div className="flex-1 bg-[#8B1A1A]" />
              <div className="flex-1 bg-[#1565C0]" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-[#F57C00] transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white mt-4 text-lg px-10 py-6 font-bold shadow-lg"
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} data-testid="button-contact-mobile">
                Contactez-nous
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
