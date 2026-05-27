/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle, Smartphone, Globe, ShieldCheck } from "lucide-react";

export default function BespokeCTA() {
  const [visitorBrand, setVisitorBrand] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [visitorNotes, setVisitorNotes] = useState("");

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brandLabel = visitorBrand ? `untuk brand *${visitorBrand}*` : "";
    const phoneLabel = visitorPhone ? ` kontak *${visitorPhone}*` : "";
    const notesLabel = visitorNotes ? `\n*Catatan Rencana:* ${visitorNotes}` : "";
    
    const message = `Halo tim Meccadeyna, saya ingin berdiskusi langsung mengenai rencana makloon jahit ${brandLabel}${phoneLabel}.${notesLabel}
    
Saya meluncurkan dari situs resmi Meccadeyna Atelier. Mohon dihubungkan ke asisten desainer Meccadeyna untuk jadual pembuatan sample. Terima kasih.`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#D8CEC2] overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Luxury Rounded Canvas Box */}
        <div className="bg-[#7B8B6F] text-[#F5F1EA] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-xl border border-white/5">
          
          {/* Glassmorphism Abstract Circles in Bg */}
          <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-[-25%] left-[-15%] w-[400px] h-[400px] rounded-full bg-[#B89B72]/15 blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* CTA Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center space-x-2">
                <span className="w-5 h-[1.5px] bg-[#B89B72]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
                  Konsultasi Meccadeyna
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
                Diskusikan Produksi <br />
                <span className="italic font-light text-[#B89B72]">Brand Fashion Anda</span> Bersama Kami.
              </h2>

              <p className="text-sm text-white/80 leading-relaxed font-sans max-w-lg">
                Konsultasikan kebutuhan produksi gamis, muslim wear, dan dailywear bersama tim desainer jahit Meccadeyna. Kami siap mendampingi rintisan koleksi Anda dari awal pemilihan material sampai pengiriman butik berkelas.
              </p>

              {/* Atelier standards indicators in color contrasting */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 text-xs text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#B89B72]" />
                  <span>Minimum order hanya <strong>50 pcs per model</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-white/90">
                  <Globe className="w-4 h-4 text-[#B89B72]" />
                  <span>Melayani seluruh Indonesia & ekspor terjangkau</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-white/90">
                  <ShieldCheck className="w-4 h-4 text-[#B89B72]" />
                  <span>Pendampingan konsultasi pola & fitting uji sample gratis</span>
                </div>
              </div>

            </div>

            {/* CTA Micro Form (Interactive Instant Draft Maker) */}
            <div className="lg:col-span-6">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
                <form onSubmit={handleWhatsappSubmit} className="space-y-4">
                  
                  <p className="text-xs uppercase tracking-wider text-[#B89B72] font-bold pb-2 border-b border-white/10 block mb-2">
                    Instant WhatsApp Draft
                  </p>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-1.5 font-semibold">
                      Nama Brand Impian Anda
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Alysa Modest, Sahira Daily"
                      required
                      value={visitorBrand}
                      onChange={(e) => setVisitorBrand(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#B89B72] focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-1.5 font-semibold">
                      Nomor WA Anda
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 081234xxxx"
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#B89B72] focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-1.5 font-semibold">
                      Catatan Singkat Ide Model (Gamis / Daily / Tunik)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Ingin membuat daster rayon twill model ruffle kerut bawah, MOQ 100 pcs."
                      value={visitorNotes}
                      onChange={(e) => setVisitorNotes(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#B89B72] focus:outline-none rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#B89B72] hover:bg-[#a68962] text-[#2B2B2B] font-bold text-xs tracking-widest uppercase py-4 rounded-xl flex items-center justify-center space-x-2.5 transition-all duration-300 transform active:scale-95 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2B2B2B]" />
                    <span>Kirim & Hubungi Via WA</span>
                  </button>

                  <p className="text-center text-[9px] text-white/50 tracking-wide mt-2 leading-none">
                    Kami akan membalas kurang dari 30 menit di jam operasional.
                  </p>

                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
