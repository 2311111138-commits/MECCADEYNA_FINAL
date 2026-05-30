import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  brand: string;
  avatar: string;
  rating: number;
  message: string;
  tag: string;
  batchSize: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nabila Syarifah",
    role: "Founder & Creative Director",
    brand: "Alysa Modest Label",
    tag: "Gamis Rayon & Voal Premium",
    batchSize: "Rutin 150 pcs/bulan",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    message: "Sebagai founder baju Muslim rintisan, mencari konveksi yang paham siluet syar'i bermartabat sangatlah sulit sampai ketemu Meccadeyna. Potongan pola gamis ruffle-nya presisi, kain tidak pernah mengkerut pasca-pencucian pertama karena disanforize dulu, dan jahitannya luar biasa rapi luar dalam!"
  },
  {
    id: 2,
    name: "Sarah Fatimah",
    role: "Creative Owner",
    brand: "Sahira Dailywear",
    tag: "Koleksi Homewear & Tunik",
    batchSize: "Batch Rilis 200 pcs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    message: "Meccadeyna benar-benar menyelamatkan peluncuran koleksi Idul Adha kami kemarin. MOQ ramah hanya 50 pcs per model sangat membantu cashflow brand pemula kami. Garansi jahitannya nyata, tim asisten desainer sangat solutif mendampingi draf pola gratis via WhatsApp."
  },
  {
    id: 3,
    name: "Aisyah Putri",
    role: "Lead Designer",
    brand: "Kiara Hijab Signature",
    tag: "Abaya Oversized & Hijab Instan",
    batchSize: "Ekspor Malaysia 300 pcs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    message: "Detail keliman bulat 1.5mm pada hijab dan sambungan jahit benang abayanya sangat halus setara butik mall mewah. Sangat puas dengan layanan packing eksklusif mereka yang sudah disemprot pewangi melati keraton khas Yogyakarta. Client asal Malaysia kami terpukau!"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-24 bg-[#FEFEFA] select-none relative overflow-hidden">
      {/* Decorative Warm Symmetrical Lines in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C18C5D_1px,transparent_1px)] [background-size:32px_32px] opacity-3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">Apresiasi Mitra Kreatif</span>
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold capitalize">
            Apa Kata <span className="italic font-light text-[#C18C5D]">Mereka?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 font-light leading-relaxed">
            Kepercayaan tulus dari para pendiri brand modest fashion tanah air hingga mancanegara yang tumbuh bersama kualitas jahitan butik Meccadeyna.
          </p>
        </div>

        {/* Cinematic Testimonial Card Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left panel: Quick statistics badge of trust */}
          <div className="lg:col-span-4 bg-[#F0EBE5]/50 border border-[#DED8CF]/40 rounded-[2.5rem] p-8 flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[180px] h-[180px] rounded-full bg-[#C18C5D]/5 blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C18C5D] font-bold">Kualitas Terbukti</span>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-serif font-bold text-[#2C2C24]">99.4%</div>
                  <div className="text-xs text-[#2C2C24]/70 font-medium mt-1">Akurasi Jahitan Standard Butik</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-[#5D7052]">12K+</div>
                  <div className="text-xs text-[#2C2C24]/70 font-medium mt-1">Garmen Lolos Kurasi Ekspor</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-[#C18C5D]">50+</div>
                  <div className="text-xs text-[#2C2C24]/70 font-medium mt-1">Brand Muslim Aktif Bermitra</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#DED8CF]/50 mt-6">
              <p className="text-[11px] text-[#2C2C24]/60 leading-relaxed italic">
                Pelayanan garmen kami mencakup konsultasi kain, desain pola konstruksi, hingga pengiriman eksportasi andal.
              </p>
            </div>
          </div>

          {/* Right panel: Premium Interactive Testimonial Carousel Box */}
          <div className="lg:col-span-8 bg-white border border-[#DED8CF]/50 shadow-soft p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
              <Quote className="w-24 h-24 text-[#5D7052] transform rotate-180" />
            </div>

            <div className="space-y-8">
              {/* Stars & Category Tag Row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C18C5D] text-[#C18C5D]" />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-wide bg-[#5D7052]/5 text-[#5D7052] font-bold px-3.5 py-1.5 rounded-full border border-[#5D7052]/10">
                  {testimonials[activeIdx].tag}
                </div>
              </div>

              {/* Message body using AnimatePresence for smooth transitions */}
              <div className="min-h-[160px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="font-serif text-lg sm:text-xl text-[#2C2C24]/90 leading-relaxed font-light font-sans"
                  >
                    "{testimonials[activeIdx].message}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author details card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#DED8CF]/40">
                <div className="flex items-center space-x-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#5D7052]/20 bg-[#F0EBE5]">
                    <img
                      src={testimonials[activeIdx].avatar}
                      alt={testimonials[activeIdx].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#2C2C24] font-bold flex items-center space-x-1.5">
                      <span>{testimonials[activeIdx].name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#5D7052] fill-[#5D7052]/10" />
                    </h4>
                    <p className="text-[11px] text-[#2C2C24]/60 font-medium">
                      {testimonials[activeIdx].role} di <span className="text-[#C18C5D] font-bold">{testimonials[activeIdx].brand}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-[#FEFEFA] border border-[#DED8CF]/40 px-4 py-2 rounded-2xl flex items-center space-x-2 text-[10px] text-[#2C2C24]/80 font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5D7052]" />
                  <span>Kapasitas: {testimonials[activeIdx].batchSize}</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls panel */}
            <div className="mt-8 pt-4 flex items-center justify-between gap-4 border-t border-[#DED8CF]/25">
              <span className="text-[11px] text-[#2C2C24]/50 font-bold uppercase tracking-wider">
                Dokumen Testimoni {activeIdx + 1} dari {testimonials.length}
              </span>
              <div className="flex items-center space-x-2.5">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-[#DED8CF]/50 bg-[#FEFEFA] hover:bg-[#5D7052] hover:text-white text-[#2C2C24] transition-all duration-300 shadow-soft cursor-pointer"
                  aria-label="Testimonial Sebelumnya"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border border-[#DED8CF]/50 bg-[#FEFEFA] hover:bg-[#5D7052] hover:text-white text-[#2C2C24] transition-all duration-300 shadow-soft cursor-pointer"
                  aria-label="Testimonial Selanjutnya"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
