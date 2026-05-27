/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Scissors, Info, Ruler, MessageSquare, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { Fabric } from "../types";

export default function InteractiveVisualizer() {
  const fabrics: Fabric[] = [
    {
      id: "rayon-twill",
      name: "Rayon Twill Eco-Soft",
      type: "Rayon",
      description: "Rayon kualitas ekspor bermotif miring halus (twill weaver). Karakter sangat jatuh (excellent drape) sehingga lekukan gaun tampak luwes dan anggun, sangat dingin disentuh kulit.",
      character: "Sangat Jatuh & Lembut, Berpori Banyak, Sangat Dingin",
      feel: "Paling direkomendasikan untuk Gamis bertingkat, Piyama Sutra, dan Dailywear premium.",
      tags: ["High Draping", "Breathable Extra", "Serat Katun Organik"],
      colorHexList: ["#5D7052", "#C18C5D", "#2C2C24", "#DED8CF"],
    },
    {
      id: "rayon-diamond",
      name: "Rayon Diamond Print",
      type: "Rayon",
      description: "Memiliki permukaan bertekstur kulit jeruk mikro yang samar dan elegan. Tebal, kokoh namun tidak kaku, menyerap keringat optimal dengan daya tahan warna tinggi pasca pencucian berulang.",
      character: "Lembut Bertekstur Diamond, Flowy, Tebal Tidak Menerawang",
      feel: "Sangat direkomendasikan untuk Gamis Syar'i lebar, Abaya Timur Tengah, & Tunik Kasual modern.",
      tags: ["Textured Touch", "Solid Weight", "Vibrant colors"],
      colorHexList: ["#4A3728", "#C3B197", "#A58C73", "#5D7052"],
    },
    {
      id: "toyobo-royal",
      name: "Katun Toyobo Royal Touch",
      type: "Katun",
      description: "Katun tenun silang impor bermutu tinggi dari serat katun murni berkualitas. Karakteristik permukaannya mulus matte, memiliki ketebalan memadai untuk siluet pakaian berstruktur tegas namun tetap luwes.",
      character: "Bertenaga (Structured), Tenunan Sangat Rapat, Dingin Halus",
      feel: "Sangat anggun untuk Kemeja Koko exclusive, Blouse bertumpuk, atau Tunik formal modis.",
      tags: ["Premium Gloss Matte", "Structured Look", "Anti-wrinkle blend"],
      colorHexList: ["#1E2C3A", "#D8CAB8", "#E6E2DA", "#5D7052"],
    },
    {
      id: "poplin-linen",
      name: "Katun Poplin Linen-Blend",
      type: "Katun",
      description: "Kombinasi serat kapas murni dengan rajutan linen bertekstur garit alami. Sangat adem, menyerap keringat dengan kilat, dan menampilkan aksen rustic mewah khas kemeja butik Jepang.",
      character: "Rustic Luxury Texture, Kokoh Ringan, Poros Ventilasi Maksimal",
      feel: "Direkomendasikan khusus untuk Unisex Oversized shirt, Lounge Pajama Set Mewah, & Kulot Santai.",
      tags: ["Rustic Organic", "Eco Friendly Dye", "Japanese Aesthetic"],
      colorHexList: ["#C18C5D", "#5D7052", "#2C2C24", "#DED8CF"],
    },
  ];

  const categories = [
    { name: "Gamis / Abaya", id: "gamis" },
    { name: "Muslim Wear / Tunik", id: "muslim" },
    { name: "Dailywear / Lounge", id: "dailywear" },
  ];

  const [selectedFabric, setSelectedFabric] = useState<Fabric>(fabrics[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("gamis");
  const [quantity, setQuantity] = useState<number>(100);
  const [brandName, setBrandName] = useState<string>("");

  // Determine standard production estimates dynamically based on volume
  const getTimelineText = (qty: number) => {
    if (qty <= 100) return "7–9 Hari Kerja (Express QC)";
    if (qty <= 300) return "10–12 Hari Kerja (Standard Fit)";
    return "12–14 Hari Kerja (Optimized Pipeline)";
  };

  const getStitchingStandard = (fabType: string) => {
    if (fabType === "Rayon") {
      return "Jarum Mikro Organ No. 11, Benang Jahit Khusus Rayon 5000yds, Obras 4 Benang rapat agar tidak berbulu.";
    }
    return "Jarum Organ No. 13, Benang Premium Polyester, jahit double-stitch pada kerah & saku untuk struktur tegas.";
  };

  const getConsultationLink = () => {
    const brandLabel = brandName ? `untuk brand *${brandName}*` : "";
    const message = `Halo Meccadeyna, saya ingin berkonsultasi rencana makloon fashion ${brandLabel}.
    
*Rincian Perencanaan:*
• Bahan Kain: *${selectedFabric.name}* (${selectedFabric.type})
• Kategori: *${categories.find((c) => c.id === selectedCategory)?.name}*
• Estimasi MOQ: *${quantity} pcs*

Mohon informasi mengenai prosedur pembuatan sample jahit jaminan modest butik Meccadeyna.`;

    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="visualizer" className="py-28 bg-[#F0EBE5]/30 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#C18C5D]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C18C5D] font-bold">Interactive Studio</span>
            <span className="w-6 h-[1.5px] bg-[#C18C5D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold">
            Bespoke Material & <span className="italic font-light text-[#5D7052]">Estimator Studio</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 max-w-xl mx-auto font-light leading-relaxed">
            Rencanakan rancangan koleksi brand Anda secara interaktif. Pilih material serat alami bersertifikat kami, sesuaikan volume, dan lihat standar teknis kerja jaminan Meccadeyna.
          </p>
        </div>

        {/* Studio Workspace grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Selection Controls */}
          <div 
            className="lg:col-span-12 xl:col-span-7 bg-white p-8 md:p-10 border border-[#DED8CF]/50 shadow-soft space-y-8 flex flex-col justify-between"
            style={{ borderRadius: "3rem 1.5rem 3rem 1.5rem" }}
          >
            
            <div className="space-y-8">
              {/* BRAND INPUT */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#C18C5D] font-bold mb-3">
                  1. Nama Clothing Brand Anda (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama brand impian Anda..."
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-[#F0EBE5]/20 border border-[#DED8CF] focus:border-[#5D7052] focus:ring-1 focus:ring-[#5D7052] focus:outline-none rounded-full px-5 py-3.5 text-sm text-[#2C2C24] transition-all"
                />
              </div>

              {/* CATEGORIES SELECTION */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#C18C5D] font-bold mb-3">
                  2. Pilih Kategori Sandang
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-center px-4 py-3 rounded-full border text-xs tracking-wider font-bold transition-all duration-300 hover:scale-105 ${
                        selectedCategory === cat.id
                          ? "bg-[#5D7052] border-transparent text-white shadow-soft"
                          : "bg-[#F0EBE5]/20 border-[#DED8CF] hover:border-[#5D7052] text-[#2C2C24]"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* FABRIC SELECTION */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#C18C5D] font-bold mb-3">
                  3. Pilih Karakter Bahan Katun & Rayon
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fabrics.map((fab) => (
                    <div
                      key={fab.id}
                      onClick={() => setSelectedFabric(fab)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        selectedFabric.id === fab.id
                          ? "bg-[#5D7052] border-[#5D7052] text-white shadow-soft"
                          : "bg-[#F0EBE5]/20 border-[#DED8CF]/80 hover:border-[#5D7052] text-[#2C2C24]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`font-serif font-extrabold text-sm transition-colors duration-300 ${
                          selectedFabric.id === fab.id ? "text-white" : "text-[#2C2C24]"
                        }`}>
                          {fab.name}
                        </span>
                        <span className={`text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold border transition-colors duration-300 ${
                          selectedFabric.id === fab.id
                            ? "bg-white/20 border-white/30 text-white"
                            : "bg-white border-[#DED8CF] text-[#5D7052]"
                        }`}>
                          {fab.type}
                        </span>
                      </div>
                      <p className={`text-[10px] line-clamp-2 leading-relaxed transition-colors duration-300 ${
                        selectedFabric.id === fab.id ? "text-white/80" : "text-[#2C2C24]/65"
                      }`}>
                        {fab.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUANTITY SLIDER */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs uppercase tracking-widest text-[#C18C5D] font-bold">
                    4. Atur Estimasi Volume Produksi
                  </label>
                  <span className="bg-[#5D7052]/10 text-[#5D7052] font-serif font-bold px-4 py-1.5 rounded-full text-xs">
                    {quantity} Pcs
                  </span>
                </div>
                
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#5D7052] h-[5px] bg-[#FDFCF8] rounded-full cursor-pointer border border-[#DED8CF]/30"
                />
                
                <div className="flex justify-between text-[10px] text-[#2C2C24]/50 font-bold mt-2.5">
                  <span>MOQ 50 pcs (Koleksi Mini)</span>
                  <span>250 pcs</span>
                  <span>500+ pcs (Partai Besar)</span>
                  <span>1000 pcs</span>
                </div>
              </div>
            </div>

            {/* Micro warning about rayon / cotton */}
            <div className="flex items-start space-x-2.5 bg-[#FDFCF8] border border-[#DED8CF]/50 p-4 rounded-2xl mt-6">
              <Info className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-[#2C2C24]/75 leading-relaxed">
                *Meccadeyna secara eksklusif hanya memproses material berbahan dasar <strong>Rayon & Katun serat alami</strong> untuk menjaga kualitas sanitasi, keawetan warna jahit, serta ketelatenan tinggi dari penjahit spesialis kami.
              </p>
            </div>

          </div>

          {/* Right Panel: Live Visual Output Receipt */}
          <div 
            className="lg:col-span-12 xl:col-span-5 bg-[#2C2C24] text-[#F3F4F1] p-8 md:p-10 flex flex-col justify-between border border-white/5 relative shadow-soft overflow-hidden"
            style={{ borderRadius: "1.5rem 3rem 1.5rem 3rem" }}
          >
            
            {/* Absolute watermark background grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F3F4F1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header inside receipt */}
              <div className="border-b border-white/10 pb-5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C18C5D] font-bold block mb-1">Meccadeyna Planning Report</span>
                <p className="font-serif text-2xl text-white font-light">Rencana Produksi</p>
                {brandName && (
                  <p className="text-xs text-[#C18C5D] mt-1 tracking-wider uppercase font-bold">&ldquo;Label {brandName}&rdquo;</p>
                )}
              </div>

              {/* Dynamic properties display */}
              <div className="space-y-4 pt-1">
                
                {/* Fabric Description */}
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-1">Rekomendasi Bahan Terpilih</p>
                  <p className="font-serif text-base text-white font-extrabold">{selectedFabric.name}</p>
                  <p className="text-[11px] text-[#C18C5D] mt-1 italic leading-relaxed">{selectedFabric.feel}</p>
                </div>

                {/* Characteristics */}
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-1">Sifat & Karakter Kain</p>
                  <p className="text-xs text-[#F3F4F1]/85 leading-relaxed font-sans font-light">{selectedFabric.character}</p>
                </div>

                {/* Stitiching mechanics */}
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-1 flex items-center">
                    <Scissors className="w-3 h-3 text-[#5D7052] mr-1.5" />
                    Standar Jarum & Konstruksi Jahit
                  </p>
                  <p className="text-xs text-[#5D7052] leading-relaxed font-bold mt-1">
                    {getStitchingStandard(selectedFabric.type)}
                  </p>
                </div>

                {/* Production timeline estimation */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-4 my-2">
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-1">Estimasi Produksi</p>
                    <p className="text-xs font-bold text-white">{getTimelineText(quantity)}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-1">Status QC</p>
                    <p className="text-xs font-bold text-[#5D7052] flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      Double QC Check
                    </p>
                  </div>
                </div>

                {/* Fabric Color Swatches Placeholder */}
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold mb-2">Estimasi Grid Palet Warna Tersedia</p>
                  <div className="flex space-x-2">
                    {selectedFabric.colorHexList.map((color, idx) => (
                      <div key={idx} className="relative group/swatch">
                        <div
                          className="w-5 h-5 rounded-full border border-white/15 cursor-pointer shadow-xs transform hover:scale-125 transition-all duration-300"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    ))}
                    <span className="text-[10px] text-white/40 self-center pl-1 font-bold">+16 pilihan warna katalog</span>
                  </div>
                </div>

                {/* Standard Free Inclusion */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-[9px] text-[#C18C5D] uppercase tracking-widest font-bold mb-1.5 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Fasilitas Pendampingan Eksklusif:
                  </p>
                  <ul className="text-[10px] text-white/70 space-y-1 pl-3.5 list-disc font-light">
                    <li>Pembuatan 1 Pcs Sample Fisik Sebelum Masal</li>
                    <li>Sesi Fitting Koreksi Pola Desain</li>
                    <li>Pemilihan Aksesoris, Kancing & Zipper</li>
                    <li>Steam Ironing Lipat Butik + Polybag</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Launch WhatsApp Consultation Action Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={getConsultationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-[#5D7052] hover:bg-[#4c5c43] text-white py-4 px-6 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-soft"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Rencana Ke WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[9px] text-white/35 mt-3 tracking-wider uppercase font-bold">
                Free Consultation • No Commitment required
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
