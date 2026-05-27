/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Globe, Heart, ArrowUp, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Tentang Filosofi", href: "#tentang" },
    { label: "Katalog Layanan", href: "#layanan" },
    { label: "Material Visualizer", href: "#visualizer" },
    { label: "Alur Produksi", href: "#alur" },
    { label: "Hasil Portfolio", href: "#portfolio" },
  ];

  const handleLinkClick = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2C2C24] text-[#FDFCF8] pt-24 pb-12 border-t border-white/5 relative overflow-hidden select-none">
      
      {/* Background elegant large brand text watermark with low opacity */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-white/[0.008] tracking-[0.25em] font-light pointer-events-none uppercase">
        MECCADEYNA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10 text-left">
          
          {/* Column 1: Brand intro */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-white font-extrabold leading-none">
                MECCADEYNA
              </span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#C18C5D] mt-1.5 font-bold">
                MOSLEM PREMIUM OUTFIT
              </p>
            </div>
            
            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              Jasa makloon jahit premium khusus Muslim Wear, Gamis, Abaya, dan Dailywear berkualitas tinggi. Mengutamakan bahan katun murni & rayon premium bersertifikat ramah lingkungan.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C18C5D] font-bold block mb-2.5">Wilayah Layanan Ekspor</span>
              <div className="flex flex-wrap gap-2">
                {["Indonesia", "Malaysia", "Singapura", "Belanda (Eropa)"].map((country, i) => (
                  <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/85 font-semibold">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5 lg:pl-10">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C18C5D] font-bold">Rute Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs text-white/75 hover:text-[#5D7052] transition-colors duration-300 font-light block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operational Ambience */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C18C5D] font-bold">Jam Kerja Workshop</h4>
            <ul className="space-y-4 text-xs text-white/75 font-light">
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#5D7052] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Senin – Sabtu</p>
                  <p className="text-[11px] text-white/60 mt-0.5">08.00 – 17.00 WIB (Sore)</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#5D7052] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Atelier Workshop & Sewing Center</p>
                  <p className="text-[11px] text-white/60 mt-0.5">Sleman, Daerah Istimewa Yogyakarta, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div className="space-y-5 lg:pl-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C18C5D] font-bold">Fast Contact Service</h4>
            <ul className="space-y-3.5 text-xs text-white/75 font-light">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C18C5D] flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-[#5D7052] transition-colors font-sans font-semibold">+62 812-3456-7890 (CS Desk)</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C18C5D] flex-shrink-0" />
                <a href="mailto:atelier@meccadeyna.com" className="hover:text-[#5D7052] transition-colors font-semibold">atelier@meccadeyna.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-[#C18C5D] flex-shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5D7052] transition-colors font-semibold">@meccadeyna_atelier</a>
              </li>
            </ul>
            
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-[10px] text-white/70 leading-relaxed font-light">
              ✓ Garansi Jahitan Rapi Kelipatan QC
              <br />
              ✓ Bahan 100% Rayon & Katun Murni Bersertifikat
            </div>
          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50">
          
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span>© {new Date().getFullYear()} Meccadeyna Atelier. Crafted with genuine dignity & care.</span>
            <Heart className="w-3.5 h-3.5 text-[#C18C5D] fill-[#C18C5D]" />
          </div>

          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={handleScrollToTop} 
              className="flex items-center space-x-2 hover:text-white transition-colors uppercase tracking-widest text-[9px] font-bold border border-white/10 px-4 py-2 rounded-full cursor-pointer bg-white/[0.02]"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
