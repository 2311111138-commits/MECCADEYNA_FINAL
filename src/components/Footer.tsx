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
    <footer className="bg-[#2B2B2B] text-[#F5F1EA] pt-20 pb-10 border-t border-white/5 relative overflow-hidden select-none">
      
      {/* Background soft watermark decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-white/[0.015] tracking-[0.2em] font-bold pointer-events-none uppercase">
        MECCADEYNA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Atelier Brand Intro Column */}
          <div className="space-y-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.25em] text-white font-semibold leading-none">
                MECCADEYNA
              </span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#B89B72] mt-1 font-medium">
                MOSLEM PREMIUM OUTFIT
              </p>
            </div>
            
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Jasa makloon jahit premium khusus Muslim Wear, Gamis, dan Dailywear berkualitas tinggi. Fokus pelayanan bersahaja dengan bahan rayon & katun murni bersertifikat.
            </p>

            {/* Global delivery tags list */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold block mb-2">Destinasi Ekspor</span>
              <div className="flex flex-wrap gap-2">
                {["Seluruh Indonesia", "Malaysia", "Singapura", "Belanda", "Negara lainnya"].map((country, i) => (
                  <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white/80 font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-bold">Rute Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs text-white/75 hover:text-[#7B8B6F] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational hours & standard checks Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-bold">Jam Kerja Workshop</h4>
            <ul className="space-y-3.5 text-xs text-white/75">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#7B8B6F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Senin – Sabtu</p>
                  <p className="text-[11px] text-white/60">08.00 – 17.00 WIB</p>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#7B8B6F] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Production Workshop Center</p>
                  <p className="text-[11px] text-white/60">Sleman, Daerah Istimewa Yogyakarta, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact and Follow column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B89B72] font-bold">Fast Contact Service</h4>
            <ul className="space-y-3 text-xs text-white/75">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B89B72]" />
                <a href="tel:+6281234567890" className="hover:text-[#7B8B6F] transition-colors">+62 812-3456-7890 (CS)</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#B89B72]" />
                <a href="mailto:atelier@meccadeyna.com" className="hover:text-[#7B8B6F] transition-colors">atelier@meccadeyna.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-3.5 h-3.5 text-[#B89B72]" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7B8B6F] transition-colors">@meccadeyna_atelier</a>
              </li>
            </ul>
            
            {/* Safe label badge */}
            <div className="bg-[#7B8B6F]/10 border border-[#7B8B6F]/20 p-3 rounded-lg text-[10px] text-white/80 leading-snug">
              ✓ Garansi Kelipatan Jaminan QC
              <br />
              ✓ Bahan 100% Rayon & Katun Pure
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50">
          
          <div className="flex items-center space-x-1.5 mb-4 sm:mb-0">
            <span>© {new Date().getFullYear()} Meccadeyna Atelier. Crafted with premium dignity.</span>
            <Heart className="w-3 h-3 text-[#B89B72] fill-[#B89B72]" />
          </div>

          <div className="flex items-center space-x-6">
            <a href="#hero" onClick={handleScrollToTop} className="flex items-center space-x-1.5 hover:text-white transition-colors uppercase tracking-widest text-[9px] font-semibold border border-white/10 px-3 py-1.5 rounded-full">
              <span>Kembali Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
