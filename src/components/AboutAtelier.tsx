/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Sparkles, Shield, Heart, Truck, MessageSquareCode } from "lucide-react";

export default function AboutAtelier() {
  const stitchingImage = "/src/assets/images/meccadeyna_stitching_1779880733810.png";

  const keyPoints = [
    {
      title: "Khusus Makloon Fashion Brand",
      desc: "Kami mendedikasikan seluruh kapasitas kami hanya untuk melayani fashion brand pemilik label, bukan pesanan retail eceran.",
    },
    {
      title: "Spesialis Rayon & Katun",
      desc: "Fokus mendalam pada pengolahan kain serat alami seperti katun poplin, cotton combed, rayon twill, dan rayon silk premium.",
    },
    {
      title: "Minimum Order Rendah (50 Pcs)",
      desc: "Membantu desainer independen dan startup modest brand memulai koleksi tanpa beban stock berlebih.",
    },
    {
      title: "Kapasitas Fleksibel",
      desc: "Siap mendukung rilis mini-collection yang lekas sold out maupun partai besar ribuan pcs untuk seasonal rilis.",
    },
    {
      title: "Pengerjaan Cepat (7–14 Hari)",
      desc: "Proses produksi terjadwal rapi dan presisi, memastikan timeline rilis marketing brand Anda berjalan lancar.",
    },
  ];

  const highlightCards = [
    {
      icon: <MessageSquareCode className="w-5 h-5 text-[#7B8B6F]" />,
      title: "Fast Response",
      desc: "Komunikasi responsif dengan tim dedicated CS & production manager yang memahami bahasa fashion.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#B89B72]" />,
      title: "Jahitan Rapi",
      desc: "Quality control berlapis dengan standar butik premium (jahit bar-tacking, obras rapat, cutting presisi).",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#7B8B6F]" />,
      title: "Pendampingan Nol",
      desc: "Konsultasi pemilihan material, pola, fitting sample, hingga visualisasi hangtag didampingi dari awal.",
    },
    {
      icon: <Truck className="w-5 h-5 text-[#B89B72]" />,
      title: "Ekspedisi Global",
      desc: "Pengiriman terpercaya ke seluruh pelosok Indonesia dan ekspor luar negeri (Belanda, Malaysia, Singapura).",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#D8CEC2] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image with editorial layout overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              {/* Outer offset frame */}
              <div className="absolute inset-4 border border-[#B89B72]/30 rounded-2xl pointer-events-none translate-x-4 -translate-y-4" />
              
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-square group relative">
                <div className="absolute inset-0 bg-[#7B8B6F]/5 mix-blend-color z-10" />
                <img
                  src={stitchingImage}
                  alt="Neat stitch detailing by Meccadeyna Tailors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Float Badge Atelier Philosophy */}
            <div className="relative lg:absolute -bottom-4 lg:-bottom-8 right-0 lg:-right-4 xl:right-6 z-20 bg-[#2B2B2B] text-white p-6 rounded-2xl max-w-xs shadow-xl border border-[#F5F1EA]/10 mt-6 lg:mt-0">
              <p className="font-serif text-[#B89B72] text-sm tracking-widest uppercase mb-1">Standar Atelier</p>
              <p className="text-xs text-white/80 leading-relaxed font-sans mt-2">
                &ldquo;Bagi kami, jahitan adalah tanda kehormatan sebuah brand. Meccadeyna hadir untuk menyamakan standar produksi lokal setara butik global.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text content */}
          <div className="lg:col-span-7">
            
            {/* Subtle Tag */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-[#7B8B6F]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#7B8B6F] font-semibold">
                Filosofi & Komitmen
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight mb-6">
              Partner Setia di Balik <br />
              <span className="italic font-light text-[#B89B72]">Koleksi Utama</span> Modest Brand Anda.
            </h2>

            <p className="text-[#2B2B2B]/85 font-sans text-base leading-relaxed mb-8">
              Meccadeyna didirikan atas panggilan untuk mendukung desainer lokal dan pemilik clothing brand. Kami menyadari kesulitan dalam mengelola tim produksi, menjaga kebersihan sisa benang, dan mencari bahan yang sejuk dipakai sehari-hari. 
              <br className="mb-4" />
              Kami hadir menawarkan bukan sekadar jasa jahit, tetapi kawan bertukar pikiran yang membimbing Anda dari pemilihan kain, pembuatan pola terbaik, fitting sampel, hingga finishing setrika uap sebelum dikemas mewah ke pembeli Anda.
            </p>

            {/* List of custom points */}
            <div className="space-y-4 mb-12">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7B8B6F]/10 flex items-center justify-center group-hover:bg-[#7B8B6F] transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-[#7B8B6F] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#2B2B2B] leading-snug">
                      {point.title}
                    </h4>
                    <p className="text-xs text-[#2B2B2B]/70 mt-1">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F5F1EA]/50 border border-[#B89B72]/15 p-6 rounded-2xl">
              {highlightCards.map((card, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F5F1EA] flex items-center justify-center border border-[#B89B72]/10 shadow-xs">
                    {card.icon}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider">
                      {card.title}
                    </h5>
                    <p className="text-xs text-[#2B2B2B]/65 mt-1 leading-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
