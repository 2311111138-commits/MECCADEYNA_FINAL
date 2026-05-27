/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle, CheckCircle, Globe, ShieldCheck } from "lucide-react";

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
    <section id="contact" className="py-28 bg-[#FEFEFA] overflow-hidden select-none relative">
      <div className="absolute inset-0 bg-[radial-gradient(#2C2C24_1px,transparent_1px)] [background-size:24px_24px] opacity-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Luxury Rounded Canvas Box with Moss Green background & Glassmorphism Blur */}
        <div className="bg-[#5D7052] text-[#FDFCF8] rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden shadow-soft border border-white/10">
          
          {/* Glassmorphism Abstract Circles in Background */}
          <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-25%] left-[-15%] w-[400px] h-[400px] rounded-full bg-[#C18C5D]/15 blur-2xl pointer-events-none" />

          {/* Symmetrical High-End Editorial Split Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CTA Copy Column */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              <div className="flex items-center space-x-3">
                <span className="w-5 h-[2px] bg-[#C18C5D]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C18C5D] font-bold">
                  Konsultasi Meccadeyna
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight font-extrabold">
                Diskusikan Produksi <br />
                <span className="italic font-light text-[#C18C5D]">Brand Fashion Anda</span> <br />
                Bersama Tim Meccadeyna.
              </h2>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-lg font-light">
                Konsultasikan kebutuhan jahit dan rintisan koleksi modest fashion Anda bersama tim asisten desainer Meccadeyna. Kami siap mendampingi perjalanan brand Anda dari awal – mulai dari sesi konsultasi pola draf, penjahitan baju sampel uji fisik, hingga pengapalan kargo logistik terpercaya.
              </p>

              {/* Verified Atelier Specifications Row */}
              <div className="space-y-4 pt-6 border-t border-white/10 max-w-md">
                <div className="flex items-start space-x-3.5 text-xs text-white/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
                  <span>Minimum order rendah hanya <strong>50 pcs per model</strong></span>
                </div>
                <div className="flex items-start space-x-3.5 text-xs text-white/90 font-medium">
                  <Globe className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
                  <span>Pengerjaan terjadwal <strong>cepat dalam 7-14 hari kerja</strong></span>
                </div>
                <div className="flex items-start space-x-3.5 text-xs text-white/90 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
                  <span>Dukungan penuh tim ahli untuk <strong>partai kecil hingga besar</strong></span>
                </div>
              </div>

            </div>

            {/* CTA Interactive Instant Draft Maker (Soft Glassmorphism Form) */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-[2.5rem] border border-white/15 shadow-2xl relative">
                
                {/* Floating decor label */}
                <div className="absolute -top-3.5 right-6 bg-[#2C2C24] text-[#C18C5D] text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-white/10 select-none">
                  Atelier Messenger
                </div>

                <form onSubmit={handleWhatsappSubmit} className="space-y-5 text-left">
                  
                  <div className="border-b border-white/10 pb-3 mb-2">
                    <p className="text-[10px] uppercase tracking-wider text-[#C18C5D] font-bold">
                      Instant WhatsApp Draft Planner
                    </p>
                    <p className="text-[11px] text-white/60 font-light mt-1">
                      Data di bawah akan terformat otomatis menjadi pesan pengantar yang sopan untuk asisten kami.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-2 font-bold font-sans">
                      Nama Brand Impian / Label Anda
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Alysa Modest, Sahira Dailywear"
                      required
                      value={visitorBrand}
                      onChange={(e) => setVisitorBrand(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C18C5D] focus:outline-none rounded-full px-5 py-3.5 text-xs text-white placeholder-white/35 transition-colors focus:ring-1 focus:ring-[#C18C5D]/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-2 font-bold font-sans">
                      Nomor Telepon / WA Aktif
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 081234567xxx"
                      required
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C18C5D] focus:outline-none rounded-full px-5 py-3.5 text-xs text-white placeholder-white/35 transition-colors focus:ring-1 focus:ring-[#C18C5D]/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/70 mb-2 font-bold font-sans">
                      Ide Konsep Sandang (Model, Estimasi Jumlah, Jenis Kain)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Berencana membuat gamis rayon twill bermodel ruffle lipit bawah dengan taksiran sebanyak 100 pcs untuk rilis koleksi Idul Adha..."
                      value={visitorNotes}
                      onChange={(e) => setVisitorNotes(e.target.value)}
                      className="w-full bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C18C5D] focus:outline-none rounded-[1.5rem] px-5 py-3.5 text-xs text-white placeholder-white/35 resize-none transition-colors focus:ring-1 focus:ring-[#C18C5D]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C18C5D] hover:bg-[#b07d4f] text-white font-bold text-xs tracking-widest uppercase py-4 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Mulai Konsultasi Produksi</span>
                  </button>

                  <p className="text-center text-[9px] text-white/50 tracking-wider leading-none mt-2 font-bold">
                    Tim Customer Care kami akan merespons kurang dari 30 menit pada jam kerja.
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
