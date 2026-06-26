import React, { useState, useEffect } from "react";
import { Link } from "wouter";
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
    { name: "Concept H.E.R.O.®️", href: "#hero-concept" },
    { name: "Énergie & Eau", href: "#energie" },
    { name: "Industrie", href: "#industrie" },
    { name: "Investisseurs", href: "#investisseurs" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50">
          <img src={logo} alt="PADESS ENGINEERING" className="h-10 w-auto rounded object-cover" />
          <span className="font-display font-bold text-lg hidden sm:block tracking-wide">
            PADESS <span className="text-padess-orange">ENGINEERING</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-padess-green hover:bg-padess-green/90 text-white ml-4">
            <a href="#contact">Contactez-nous</a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-foreground z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 transition-transform duration-300 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-foreground hover:text-padess-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-padess-green hover:bg-padess-green/90 text-white mt-4 text-lg px-8 py-6">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contactez-nous</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
