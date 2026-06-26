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
      {/* 4-color stripe matching logo quadrants */}
      <div className="fixed top-0 w-full z-50 flex h-1">
        <div className="flex-1 bg-[#4CAF50]" />
        <div className="flex-1 bg-[#F57C00]" />
        <div className="flex-1 bg-[#8B1A1A]" />
        <div className="flex-1 bg-[#1565C0]" />
      </div>

      <header
        className={`fixed top-1 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md border-b border-gray-200 shadow-sm py-2"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo — bigger, no background, no text */}
          <a href="#" className="flex items-center z-50" data-testid="link-home">
            <img
              src={logo}
              alt="PADESS ENGINEERING"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#F57C00] transition-colors whitespace-nowrap"
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white ml-2 font-bold shadow-md"
            >
              <a href="#contact" data-testid="button-contact-nav">Contactez-nous</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-800 z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Mobile Menu Overlay — light theme */}
          <div
            className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 transition-transform duration-300 lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img src={logo} alt="PADESS ENGINEERING" className="h-20 w-auto object-contain mb-2" />
            <div className="w-16 flex h-1 rounded overflow-hidden">
              <div className="flex-1 bg-[#4CAF50]" />
              <div className="flex-1 bg-[#F57C00]" />
              <div className="flex-1 bg-[#8B1A1A]" />
              <div className="flex-1 bg-[#1565C0]" />
            </div>
            <p className="text-[#F57C00] font-display font-bold text-xs tracking-widest uppercase text-center px-8 mt-1">
              L'Innovation Durable au Service de votre Autonomie
            </p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-gray-800 hover:text-[#F57C00] transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white mt-4 text-lg px-10 py-6 font-bold"
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
