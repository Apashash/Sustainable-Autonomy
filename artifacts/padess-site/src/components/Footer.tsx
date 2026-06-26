import React from "react";
import logo from "@assets/b92fe1f4-ff1b-4b54-b8d0-81f6ef9fe088_1782452359768.jpeg";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PADESS ENGINEERING" className="h-12 w-auto rounded object-cover" />
              <span className="font-display font-bold text-xl tracking-wide">
                PADESS <span className="text-padess-orange">ENGINEERING</span>
              </span>
            </div>
            <p className="text-padess-gold font-display font-semibold italic">
              "L'INNOVATION DURABLE AU SERVICE DE VOTRE AUTONOMIE !"
            </p>
            <p className="text-sm text-foreground/60">
              Transforming waste into wealth, installing sovereign energy systems, and building revolutionary eco-construction.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#vision" className="hover:text-padess-green transition-colors">Vision Stratégique</a></li>
              <li><a href="#architecture" className="hover:text-padess-green transition-colors">Architecture & Art Époxy</a></li>
              <li><a href="#hero-concept" className="hover:text-padess-green transition-colors">PLASTI-BUILD®️ & H.E.R.O.®️</a></li>
              <li><a href="#energie" className="hover:text-padess-green transition-colors">Pôle Énergie & Eau</a></li>
              <li><a href="#industrie" className="hover:text-padess-green transition-colors">Mobilité & Industrie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-padess-orange shrink-0 mt-0.5" />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-padess-green shrink-0 mt-0.5" />
                <span>
                  WhatsApp: +237 697 221 970<br />
                  Appels: (+237) 658 92 90 70<br />
                  Appels: (+237) 690 38 95 45
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-padess-blue shrink-0 mt-0.5" />
                <span>
                  npadess@hoo.com<br />
                  padess@engineering.com<br />
                  ahmednchange@yahoo.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © 2025 PADESS ENGINEERING SARL — Tous droits réservés.
          </p>
          <p className="text-xs text-foreground/40 font-display uppercase tracking-widest">
            NOUS NE RÉPARONS PAS L'AVENIR, NOUS L'INVENTONS.
          </p>
        </div>
      </div>
    </footer>
  );
}
