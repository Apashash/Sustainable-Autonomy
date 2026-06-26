import React from "react";
import logo from "@assets/padess-logo-transparent.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-t-[#4CAF50] py-16">
      {/* Top color bar */}
      <div className="flex h-0.5 w-full mb-0">
        <div className="flex-1 bg-[#4CAF50]" />
        <div className="flex-1 bg-[#F57C00]" />
        <div className="flex-1 bg-[#8B1A1A]" />
        <div className="flex-1 bg-[#1565C0]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-0">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-12">
          {/* Logo & slogan */}
          <div className="space-y-5">
            <img src={logo} alt="PADESS ENGINEERING" className="h-16 w-auto object-contain" />
            <p className="text-[#F57C00] font-display font-bold italic text-sm">
              "L'INNOVATION DURABLE AU SERVICE DE VOTRE AUTONOMIE !"
            </p>
            <p className="text-sm text-gray-500">
              Transforming waste into wealth, installing sovereign energy systems, and building revolutionary eco-construction. Douala, Cameroun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gray-900">Nos Expertises</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#vision" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Vision Stratégique</a></li>
              <li><a href="#architecture" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Architecture & Art Époxy</a></li>
              <li><a href="#hero-concept" className="text-gray-600 hover:text-[#4CAF50] transition-colors">PLASTI-BUILD®️ & H.E.R.O.®️</a></li>
              <li><a href="#energie" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Pôle Énergie & Eau</a></li>
              <li><a href="#industrie" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Mobilité & Industrie</a></li>
              <li><a href="#investisseurs" className="text-gray-600 hover:text-[#4CAF50] transition-colors">Espace Investisseurs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-display font-bold text-lg mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F57C00] shrink-0 mt-0.5" />
                <span className="text-gray-600">Douala, Cameroun</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#4CAF50] shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  WhatsApp: +237 697 221 970<br />
                  (+237) 658 92 90 70<br />
                  (+237) 690 38 95 45
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#1565C0] shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  npadess@hoo.com<br />
                  padess@engineering.com<br />
                  ahmednchange@yahoo.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 PADESS ENGINEERING SARL — Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400 font-display uppercase tracking-widest text-center">
            NOUS NE RÉPARONS PAS L'AVENIR, NOUS L'INVENTONS.
          </p>
        </div>
      </div>
    </footer>
  );
}
