/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Sparkles, Heart, Truck, MessageSquareCode, Globe } from "lucide-react";

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

  const countries = [
    { name: "Indonesia", city: "Jakarta, Yogyakarta, Bandung, Surabaya, Medan" },
    { name: "Malaysia", city: "Kuala Lumpur, Penang, Johor Bahru" },
    { name: "Singapura", city: "Orchard Road, Woodlands, Geylang" },
    { name: "Belanda", city: "Amsterdam, Rotterdam, Utrecht (Europe Link)" }
  ];

  return (
    <section id="tentang" className="py-28 bg-[#E6DCCD]/30 overflow-hidden select-none relative">
      {/* Editorial floating accent */}
      <div 
        className="absolute right-[-10%] top-1/4 w-[40vw] h-[40vw] bg-[#5D7052]/5 blur-[100px] pointer-events-none"
        style={{ borderRadius: "50% 50% 30% 70% / 40% 60% 50% 50%" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Image with organic mask radius & rotated frame overlay */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative z-10 p-2">
              {/* Outer offset frame with wabi-sabi rotasi */}
              <div 
                className="absolute inset-2 border-2 border-[#C18C5D]/20 pointer-events-none -translate-x-1 translate-y-3"
                style={{ 
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  transform: "rotate(2deg)"
                }}
              />
              
              <div 
                className="overflow-hidden shadow-float bg-white p-3 aspect-square group relative border-4 border-white transition-all duration-700 hover:scale-[1.02]"
                style={{ 
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  transform: "rotate(-1deg)"
                }}
              >
                <div className="absolute inset-0 bg-[#5D7052]/5 mix-blend-color z-10 pointer-events-none" />
                <img
                  src={stitchingImage}
                  alt="Neat stitch detailing by Meccadeyna Tailors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* Float Badge Atelier Philosophy with asymmetrically styled border radius */}
            <div 
              className="relative lg:absolute -bottom-8 lg:-bottom-12 right-0 lg:-right-8 z-20 bg-[#2C2C24] text-[#F3F4F1] p-7 shadow-float border border-[#DED8CF]/10 mt-8 lg:mt-0 max-w-xs transition-transform duration-500 hover:scale-105"
              style={{ borderRadius: "2rem 0.5rem 2rem 2rem" }}
            >
              <p className="font-serif text-[#C18C5D] text-[11px] tracking-[0.2em] uppercase mb-1 font-bold">Atelier Code of Honor</p>
              <p className="text-[11px] text-[#F3F4F1]/70 leading-relaxed font-sans mt-3">
                &ldquo;Bagi kami, jahitan adalah tanda kehormatan sebuah brand. Meccadeyna hadir untuk menyelaraskan standar produksi lokal agar melampaui ekspektasi jahit butik global.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            
            {/* Subtle Tag */}
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-6 h-[1.5px] bg-[#5D7052]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">
                Filosofi & Komitmen Kami
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight tracking-tight font-extrabold">
              Partner Setia di Balik <br />
              <span className="italic font-light text-[#C18C5D]">Koleksi Utama</span> Modest Brand Anda.
            </h2>

            <p className="text-[#2C2C24]/80 font-sans text-xs sm:text-sm md:text-base leading-relaxed font-light">
              Meccadeyna didirikan atas panggilan untuk mendampingi para desainer independen dan pemilik clothing brand berkembang secara konsisten. Kami sangat paham tantangan mengelola tim konveksi, menjaga kerapian sisa benang jahit, dan berburu lembaran kain yang sejuk dipakai sehari-hari. 
              <br className="mb-4" />
              Kami menawarkan lebih dari sekadar jasa jahit makloon – kami memosisikan diri sebagai desainer partner yang membimbing Anda dari pemilihan kain berkualitas, memformulasikan cutting pola terbaik, fitting sampel, hingga finishing setrika uap sebelum dikemas secara mewah ke tangan pembeli Anda.
            </p>

            {/* List of custom points */}
            <div className="space-y-4 pt-4 border-t border-[#DED8CF]">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#5D7052]/10 flex items-center justify-center group-hover:bg-[#5D7052] transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-[#5D7052] group-hover:text-[#F3F4F1] transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#2C2C24] leading-snug">
                      {point.title}
                    </h4>
                    <p className="text-xs text-[#2C2C24]/70 mt-1 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Cards Grid with Asymmetric corner radius and micro-rotation on hover */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/60 border border-[#DED8CF]/60 p-6 shadow-soft mt-6"
              style={{ borderRadius: "3rem 1.5rem 3rem 1.5rem" }}
            >
              {highlightCards.map((card, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#F0EBE5]/50 flex items-center justify-center border border-[#DED8CF]/40 shadow-xs">
                    {card.icon}
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-[#2C2C24] uppercase tracking-wider">
                      {card.title}
                    </h5>
                    <p className="text-[11px] text-[#2C2C24]/70 mt-1 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ELEGANT TRUST SECTION - Minimal, Premium, and Clean */}
        <div className="mt-28 pt-16 border-t border-[#DED8CF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Trust Copy */}
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#5D7052]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5D7052] font-bold">Global Coverage</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#2C2C24] leading-tight">
                Dipercaya Modest Brand dari <br />
                <span className="italic font-normal text-[#C18C5D]">Indonesia hingga Luar Negeri</span>
              </h3>
              <p className="text-xs text-[#2C2C24]/65 font-light">
                Mengekspor standar presisi modest fashion Indonesia ke wilayah regional maupun Eropa.
              </p>
            </div>

            {/* Countries Minimal List with Micro-rotation on Hover */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {countries.map((country, idx) => (
                <div 
                  key={idx}
                  className="bg-white/50 hover:bg-white border border-[#DED8CF]/50 p-5 shadow-soft transition-all duration-500 hover:rotate-1 hover:-translate-y-0.5"
                  style={{ borderRadius: idx % 2 === 0 ? "1.5rem 2rem 1.5rem 2rem" : "2rem 1.5rem 2rem 1.5rem" }}
                >
                  <div className="flex items-center space-x-2.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5D7052]" />
                    <span className="font-serif text-sm font-bold text-[#2C2C24] uppercase tracking-wider">{country.name}</span>
                  </div>
                  <p className="text-[10px] text-[#2C2C24]/60 leading-relaxed pl-4 font-light">
                    {country.city}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
