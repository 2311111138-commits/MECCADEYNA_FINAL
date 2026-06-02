/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

export default function InteractiveVisualizer() {
  const [selectedFabric, setSelectedFabric] = useState("Premium Rayon");
  const [selectedColor, setSelectedColor] = useState("Black Navy");

  return (
    <section id="visualizer" className="py-24 bg-[#2B2B2B] text-[#F5F1EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7B8B6F] font-bold">Planning Studio</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 tracking-wide text-white">
            Bespoke Interactive Visualizer
          </h2>
          <p className="text-sm md:text-base text-[#F5F1EA]/70 font-sans leading-relaxed">
            Simulasikan material kain premium pilihan Anda langsung pada pola cutting daster eksklusif Meccadeyna sebelum masuk ke tahap produksi massal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KIRI: AREA DISPLAY GAMBAR DASTER */}
          <div className="lg:col-span-7 bg-[#1F1F1F] p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col items-center justify-center min-h-[450px] relative group">
            <div className="absolute top-4 left-4 bg-[#7B8B6F]/20 border border-[#7B8B6F]/30 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold text-[#9BB088]">
              {selectedFabric} — {selectedColor}
            </div>
            
            <div className="w-full max-w-md h-[400px] rounded-xl overflow-hidden shadow-inner bg-[#2B2B2B] flex items-center justify-center border border-white/10">
              {/* Membaca langsung dari folder public/images */}
              <img 
                src="/images/daster_black_navy_1780392547984.png" 
                alt="Meccadeyna Daster Premium Preview" 
                className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* KANAN: PANEL KONTROL INTERAKTIF */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-4 tracking-wide text-white">1. Pilih Jenis Material Kain</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Premium Rayon", "Cotton Twill Luxury"].map((fabric) => (
                  <button
                    key={fabric}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 font-sans ${
                      selectedFabric === fabric 
                        ? "border-[#7B8B6F] bg-[#7B8B6F]/10 text-white font-medium" 
                        : "border-white/10 bg-transparent text-[#F5F1EA]/60 hover:border-white/30"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider">{fabric}</div>
                    <div className="text-[10px] text-[#7B8B6F] mt-1">Sangat Adem & Lembut</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4 tracking-wide text-white">2. Pilih Varian Warna</h3>
              <div className="flex flex-wrap gap-3">
                {["Black Navy", "Maroon Velvet", "Olive Grove", "Sage Elegance"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 font-sans ${
                      selectedColor === color
                        ? "border-[#7B8B6F] bg-[#7B8B6F] text-[#2B2B2B] font-bold shadow-[0_4px_20px_rgba(123,139,111,0.3)]"
                        : "border-white/10 bg-transparent text-[#F5F1EA]/70 hover:border-white/30"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="p-4 bg-[#1F1F1F] rounded-xl border border-white/5 space-y-2">
                <div className="text-[10px] uppercase tracking-widest text-[#7B8B6F] font-bold">Rekomendasi Produksi</div>
                <p className="text-xs text-[#F5F1EA]/70 leading-relaxed">
                  Kombinasi <span className="text-white font-medium">{selectedFabric}</span> dengan warna <span className="text-white font-medium">{selectedColor}</span> sangat diminati oleh kalangan modest brand premium untuk pasar homewear eksklusif tahun ini.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}