/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MessageSquare, FileSpreadsheet, Ruler, Scissors, SearchCode, Truck, Check, HelpCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductionStep } from "../types";

export default function ProductionTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const steps: ProductionStep[] = [
    {
      number: "01",
      title: "Konsultasi Brand",
      description: "Berbagi visi koleksi modest brand Anda secara santai.",
      details: [
        "Kami menyambut hangat founder clothing brand pemula maupun berpengalaman.",
        "Sesi konsultasi membahas konsep estetika, inspirasi siluet, dan target pasar.",
        "Penentuan budget & negosiasi harga pokok produksi yang masuk akal."
      ],
      duration: "1 - 2 Hari Selesai"
    },
    {
      number: "02",
      title: "Desain & Material",
      description: "Pemetaan detail sketsa teknis dan material rayon/katun.",
      details: [
        "Pemilihan grade benang, jenis tenun (twill, diamond, poplin) terbaik.",
        "Sketsa teknis dengan detail saku, bukaan menyusui (busui), kancing bungkus.",
        "Pemetaan warna kain dari catalog sample fisik kami."
      ],
      duration: "1 - 3 Hari Selesai"
    },
    {
      number: "03",
      title: "Sample & Approval",
      description: "Kami jahit 1 pcs produk contoh fisik asli untuk Anda uji.",
      details: [
        "Pembuatan pola master & jahit sample purwarupa butik khusus.",
        "Sample dikirim langsung ke alamat workshop/rumah Anda di seluruh Indonesia.",
        "Proses fitting koreksi ukuran (LD, panjang busana) hingga 100% pas berkriteria."
      ],
      duration: "3 - 5 Hari Selesai"
    },
    {
      number: "04",
      title: "Produksi Massal",
      description: "Proses jahit massal dikomando oleh penjahit senior spesialis.",
      details: [
        "Pola kain dikelompokkan dengan pisau potong vertikal industri (presisi tinggi).",
        "Jahit bertahap dengan mesin modern kecepatan tinggi berspesifikasi butik.",
        "Pemberian karet anti-gatal elastis serta kerutan kelim rapi tanpa kerut kain kasar."
      ],
      duration: "7 - 14 Hari Kerja"
    },
    {
      number: "05",
      title: "Quality Control",
      description: "Inspeksi berlapis & finishing penyetrikaan uap standar butik.",
      details: [
        "Pembersihan sisa benang jahit secara detail terstruktur oleh tim QC khusus.",
        "Penyetrikaan uap (steam ironing) untuk menghilangkan kerutan kain rayon.",
        "Pemasangan hangtag label brand Anda, dimasukkan polybag steril tertutup."
      ],
      duration: "1 - 2 Hari Selesai"
    },
    {
      number: "06",
      title: "Pengiriman Aman",
      description: "Proteksi packaging berlapis siap didistribusikan ke pasar.",
      details: [
        "Koleksi dipacking ke dalam kardus berlapis plastik kedap udara (waterproof).",
        "Pengiriman terpercaya via kargo darat/tambalan cepat ke se-Indonesia.",
        "Penanganan dokumen kepabeanan untuk ekspor ASEAN (Malaysia, Singapura) & Eropa (Belanda)."
      ],
      duration: "Estimasi Kargo Terjadwal"
    }
  ];

  const stepIcons = [
    <MessageSquare className="w-5 h-5" />,
    <FileSpreadsheet className="w-5 h-5" />,
    <Ruler className="w-5 h-5" />,
    <Scissors className="w-5 h-5" />,
    <SearchCode className="w-5 h-5" />,
    <Truck className="w-5 h-5" />
  ];

  const handleNextMobile = () => {
    setCarouselIndex((prev) => (prev + 1) % 5);
  };

  const handlePrevMobile = () => {
    setCarouselIndex((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <section id="alur" className="py-24 bg-[#D8CEC2] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-[#4A5840]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#4A5840] font-bold">Proses Terukur</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight">
              Alur Produksi yang <span className="italic font-normal text-black">Rapi & Transparan</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-medium">
              Bagi Anda yang baru pertama kali merintis brand modest, tidak perlu merasa cemas atau bingung. Tim desainer dan pengawas produksi Meccadeyna mendampingi Anda penuh di setiap jengkal prosesnya.
            </p>
          </div>
        </div>

        {/* Desktop View: Full 6-column Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-4 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer group p-6 rounded-2xl border transition-all duration-300 relative text-left h-full flex flex-col justify-between ${
                activeStep === idx
                  ? "bg-[#7B8B6F] border-[#7B8B6F] text-white shadow-[0_10px_30px_rgba(123,139,111,0.25)] scale-[1.02]"
                  : "bg-white/70 border-[#B89B72]/20 hover:border-[#7B8B6F]/50 hover:bg-white/90 text-[#2B2B2B]"
              }`}
            >
              {/* Step number and connection line */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-serif text-xs font-bold tracking-wider uppercase ${
                  activeStep === idx ? "text-[#F5F1EA]" : "text-[#2B2B2B]"
                }`}>
                  Step {step.number}
                </span>
                
                {/* Active Indicator dots */}
                <div className={`w-2 h-2 rounded-full transition-transform ${activeStep === idx ? "bg-white scale-125" : "bg-transparent"}`} />
              </div>

              {/* Minimalist icon box */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-4 transition-all duration-300 ${
                activeStep === idx 
                  ? "bg-white/25 text-white border-white/20" 
                  : "bg-[#F5F1EA] text-[#7B8B6F] border-[#B89B72]/15"
              }`}>
                {stepIcons[idx]}
              </div>

              <div>
                <h4 className={`font-serif text-sm font-semibold leading-snug transition-colors ${
                  activeStep === idx ? "text-white" : "text-[#2B2B2B] group-hover:text-[#7B8B6F]"
                }`}>
                  {step.title}
                </h4>
                <p className={`text-[10px] leading-tight mt-1.5 font-medium transition-colors ${
                  activeStep === idx ? "text-[#F5F1EA]/90" : "text-[#2B2B2B]/80"
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View: Carousel showing 2 steps */}
        <div className="block lg:hidden mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold text-black uppercase tracking-wider">
              Roadmap Meccadeyna
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevMobile}
                className="w-10 h-10 rounded-full border border-[#B89B72]/20 bg-white/70 hover:bg-[#7B8B6F] hover:text-white flex items-center justify-center transition-all text-[#2B2B2B] active:scale-95"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextMobile}
                className="w-10 h-10 rounded-full border border-[#B89B72]/20 bg-white/70 hover:bg-[#7B8B6F] hover:text-white flex items-center justify-center transition-all text-[#2B2B2B] active:scale-95"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 xs:gap-4">
            {[carouselIndex, (carouselIndex + 1) % 6].map((idx) => {
              const step = steps[idx];
              const isStepActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                  className={`cursor-pointer group p-4 xs:p-6 rounded-2xl border transition-all duration-300 relative text-left h-full flex flex-col justify-between ${
                    isStepActive
                      ? "bg-[#7B8B6F] border-[#7B8B6F] text-white shadow-[0_10px_30px_rgba(123,139,111,0.25)] scale-[1.01]"
                      : "bg-white/70 border-[#B89B72]/20 hover:border-[#7B8B6F]/50 hover:bg-white/90 text-[#2B2B2B]"
                  }`}
                >
                  {/* Step number and label */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-serif text-xs font-bold tracking-wider uppercase ${
                      isStepActive ? "text-[#F5F1EA]" : "text-[#2B2B2B]"
                    }`}>
                      Step {step.number}
                    </span>
                    <div className={`w-2 h-2 rounded-full transition-transform ${isStepActive ? "bg-white scale-125" : "bg-transparent"}`} />
                  </div>

                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-3 transition-all duration-300 ${
                    isStepActive 
                      ? "bg-white/25 text-white border-white/20" 
                      : "bg-[#F5F1EA] text-[#7B8B6F] border-[#B89B72]/15"
                  }`}>
                    {stepIcons[idx]}
                  </div>

                  <div>
                    <h4 className={`font-serif text-xs xs:text-sm font-semibold leading-snug transition-colors ${
                      isStepActive ? "text-white" : "text-[#2B2B2B] group-hover:text-[#7B8B6F]"
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-[9px] xs:text-[10px] leading-tight mt-1 font-medium transition-colors ${
                      isStepActive ? "text-[#F5F1EA]/90" : "text-[#2B2B2B]/80"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots / Indicators */}
          <div className="flex justify-center space-x-2 mt-5">
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const isVisible = idx === carouselIndex || idx === (carouselIndex + 1) % 6;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (idx < 5) {
                      setCarouselIndex(idx);
                    } else {
                      setCarouselIndex(4);
                    }
                    setActiveStep(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === idx 
                      ? "w-6 bg-[#7B8B6F]" 
                      : isVisible 
                        ? "w-3 bg-[#7B8B6F]/50" 
                        : "w-2 bg-[#2B2B2B]/20"
                  }`}
                  aria-label={`Sapa step ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card for Active Step */}
        <div className="bg-white rounded-3xl border border-[#B89B72]/15 shadow-[0_10px_40px_rgba(43,43,43,0.03)] p-8 md:p-12 transition-all duration-500 relative overflow-hidden animate-scale-up">
          
          {/* Decorative Corner Label */}
          <div className="absolute top-0 right-0 bg-[#2B2B2B] px-6 py-2 rounded-bl-2xl text-[10px] uppercase tracking-widest text-[#D8CEC2] font-semibold">
            Active Workspace
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: big number and text */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#B89B72]/15 pb-8 lg:pb-0 lg:pr-10">
              <span className="font-serif text-6xl xl:text-7xl font-light text-[#2B2B2B] block leading-none mb-2 select-none">
                {steps[activeStep].number}
              </span>
              
              <span className="text-[10px] uppercase tracking-[0.25em] text-black font-bold">Atelier Roadmap</span>
              <h3 className="font-serif text-2xl lg:text-3xl text-[#2B2B2B] mt-1.5 mb-4 font-semibold">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>

              {/* Estimate badge */}
              <div className="inline-flex items-center space-x-2 bg-[#F5F1EA] border border-[#B89B72]/20 rounded-lg px-3 py-1.5 mt-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B8B6F]" />
                <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#2B2B2B]">
                  Estimasi: {steps[activeStep].duration}
                </span>
              </div>
            </div>

            {/* Right side: Bullet descriptive details with beautiful Checkbox labels */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-black font-bold mb-3">Detail Pelaksanaan Tambahan:</p>
              
              {steps[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg bg-[#F5F1EA] flex items-center justify-center border border-[#B89B72]/10">
                    <Check className="w-3.5 h-3.5 text-[#7B8B6F]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-medium">
                    {detail}
                  </p>
                </div>
              ))}

              {/* Informative advice for new brands */}
              <div className="pt-4 border-t border-[#B89B72]/15 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#2B2B2B]/85">
                <span className="font-medium">Fast response & konsultasi terpantau di WhatsApp grup.</span>
                <span className="bg-[#7B8B6F] text-white px-4 py-2 rounded-lg flex items-center font-bold cursor-pointer hover:bg-[#4A5840] transition-all" onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>
                  Hubungi CS Kami
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

