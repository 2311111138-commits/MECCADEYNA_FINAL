/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, ArrowRight, Check, Compass, Sliders, FileText, Settings, Heart, Hourglass } from "lucide-react";

interface StoryStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technicalBrief: string;
  checklist: string[];
  durationBadge: string;
}

export default function ProductionTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const steps: StoryStep[] = [
    {
      number: "01",
      title: "Consultation & Vision Sketching",
      subtitle: "Merundingkan Visi Estetika & Sketsa Teknis Rencana Koleksi",
      description: "Kami menyambut hangat para founder modest fashion brand. Proses awal ini berpusat pada pemetaan ide orisinal Anda, mulai dari proporsi siluet Gamis, rincian drapery Abaya, detail lipit kancing, hingga penyesuaian target pasar dan penetapan budget produksi (Harga Pokok Produksi) yang optimal.",
      image: "/assets/images/meccadeyna_hero_1779880710395.png",
      technicalBrief: "Analisis Kelayakan Pola (Pattern Feasibility Study): Memasukkan detail bukaan wudhu-friendly pada manset dan ritsleting menyusui (busui) fungsional.",
      checklist: [
        "Sesi brainstorming konsep desain & mood board",
        "Pembuatan sketsa kerja atau digital tech-pack",
        "Negosiasi harga transparan tanpa biaya siluman"
      ],
      durationBadge: "1 - 2 Hari Kerja"
    },
    {
      number: "02",
      title: "Eco-Fabric Selection",
      subtitle: "Kurasi Kain Serat Alami Rayon & Katun Tersertifikasi",
      description: "Kain katun poplin, cotton bamboo silk, rayon twill, dan rayon diamond adalah spesialisasi kami. Kami melakukan kurasi benang murni dengan kualitas ekspor untuk menjamin tekstur luar biasa dingin di kulit, ketebalan optimal yang tidak menerawang, serat kain berkekuatan tinggi, dan pori sirkulasi keringat maksimal.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=650&q=80",
      technicalBrief: "Pre-Shank Sanforize Method: Menguji penyusutan kain rayon twill dan katun poplin sebelum dijahit agar ukuran tetap presisi pasca pencucian berulang oleh pelanggan Anda.",
      checklist: [
        "Kurasi serat organik bersertifikasi aman di kulit",
        "Pemeriksaan stabilitas zat pewarna kain (uji luntur)",
        "Penyediaan hand-feel sample catalog gratis"
      ],
      durationBadge: "2 - 3 Hari Kerja"
    },
    {
      number: "03",
      title: "Surgical Fitting Sample",
      subtitle: "Jahit Purwarupa Fisik 1 Pcs Khusus Untuk Uji Kelayakan",
      description: "Kami tidak akan memproduksi massal sebelum Anda tersenyum puas memegang sample fisik baju. Kami membuatkan 1 pcs pakaian contoh utuh sesuai detail terpilih, kemudian mengirimkannya langsung ke alamat workshop atau rumah Anda untuk sesi uji coba pakai (fitting session) dan penilaian langsung di cermin.",
      image: "/assets/images/meccadeyna_stitching_1779880733810.png",
      technicalBrief: "Boutique-Grade Sewing Sample: Penjahit sampel senior memproses purwarupa dengan setelan kerapian obras tingkat tinggi untuk menguji keluwesan ayunan bahan di tubuh model.",
      checklist: [
        "Pembuatan Master Pola khusus (Custom Sizing Grid)",
        "Pengiriman sample fisik instan ke seluruh Indonesia",
        "Sesi koreksi lingkar dada, panjang lengan, & fit detail"
      ],
      durationBadge: "3 - 5 Hari Kerja"
    },
    {
      number: "04",
      title: "Precision Manufacturing",
      subtitle: "Produksi Massal Dipandu Teknologi Potong & Penjahit Senior",
      description: "Setelah sampel disetujui penuh, tahap pemotongan massal (cutting) akan dikerjakan dengan pisau vertikal garmen presisi tinggi agar seluruh lembar pola seragam mili demi mili. Jahit massal dikomando langsung oleh tim penjahit terspesialisasi gamis dan dailywear rayon, menjamin jahitan kokoh tanpa kerut kain.",
      image: "/assets/images/meccadeyna_garment_1779880760948.png",
      technicalBrief: "SPI (Stitch Per Inch) Formula: Menerapkan standar minimal 11 - 13 tusukan jarum per inci, menggunakan jarum bermerek Organ Jepang no. 11/13 anti-lubang rajutan.",
      checklist: [
        "Cutting pola garmen industri berakurasi tingkat tinggi",
        "Penjahitan terstruktur berdasarkan kelompok spesialisasi",
        "Pemasangan aksesoris bergaransi (kancing bungkus, karet anti-gatal)"
      ],
      durationBadge: "7 - 14 Hari Kerja"
    },
    {
      number: "05",
      title: "Bespoke Finishing & Quality Control",
      subtitle: "Inspeksi Steril Tiga Tahap & Setrika Uap Industri",
      description: "Kain rayon dan katun wajib melewati penanganan uap industri (steam pressing) agar molekul seratnya kembali lembut berkilau. Tim QC khusus kami menginspeksi baju lembar demi lembar – membersihkan helai benang sekecil apapun, menguji kekuatan ritsleting, mengukur keselarasan kancing, dan melipatnya rapi ala butik.",
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=650&q=80",
      technicalBrief: "Industrial Steam Press Method: Menguap kain pada suhu terkontrol untuk menghidupkan kembali kelembutan sutrawi rayon pasca penjahitan massal.",
      checklist: [
        "Pembersihan sisa benang jahit (Thread Grooming secara detail)",
        "Setrika uap tabung industri untuk kerapihan lipatan",
        "Pemasangan hangtag label & pembungkusan plastik steril berperekat"
      ],
      durationBadge: "1 - 2 Hari Selesai"
    },
    {
      number: "06",
      title: "Safe Distribution & Export",
      subtitle: "Proteksi Pengemasan Tahan Air & Ekspedisi Terintegrasi",
      description: "Koleksi Anda dilipat presisi dengan pembungkus polybag, dimasukkan ke dalam kardus garmen tebal berlapis plastik kedap air (waterproof packing) untuk menangkal kelembaban selama pengiriman darat maupun laut. Kami melayani pengapalan kargo terpercaya ke seluruh penjuru Nusantara serta pengurusan bea cukai ekspor.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=650&q=80",
      technicalBrief: "Double-Wall Corrugated Carton Protection: Menghindari benturan fisik, menjaga baju rilis Anda tetap rapi wangi seperti saat keluar dari meja setrika kami.",
      checklist: [
        "Segel waterproof luar-dalam menangkal air dan lembab",
        "Kemitraan kargo logistik tarif khusus (darat/laut/udara)",
        "Dokumentasi kepabeanan jalur hijau untuk ekspor ASEAN & Eropa"
      ],
      durationBadge: "Kargo Fleksibel"
    }
  ];

  return (
    <section id="alur" className="py-28 bg-[#E6DCCD]/25 text-[#2C2C24] select-none relative overflow-hidden">
      
      {/* Editorial Watermark background */}
      <div className="absolute top-[10%] left-[-15%] font-serif text-[12vw] font-bold text-black/[0.008] pointer-events-none uppercase">
        SKETCH TO CHIC
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#5D7052]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">From Sketch to Production</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold">
              Kisah di Balik Layar: <br />
              Alur Garmen yang <span className="italic font-light text-[#C18C5D]">Rapi, Jujur, & Selaras</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-xs sm:text-sm text-[#2C2C24]/75 leading-relaxed font-light">
              Membangun brand modest fashion bukanlah hal yang mudah, tapi kami menjadikannya sederhana untuk Anda. Ikuti tahapan detail produksi bergaransi Meccadeyna dari sketsa awal hingga kiriman butik mewah siap pakai.
            </p>
          </div>
        </div>

        {/* TIMELINE INTERRUPT CARD ROW (Editorial List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left panel: Vertical Story Selector Buttons (Cinematic Flow) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-[#C18C5D] font-bold mb-2 pl-3 font-sans">Tahapan Operasional Atelier:</p>
            
            <div className="space-y-2.5 flex-grow">
              {steps.map((stp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full text-left p-5 rounded-full border transition-all duration-300 flex items-center justify-between group px-7 ${
                    activeStepIdx === idx
                      ? "bg-[#5D7052] border-[#5D7052] text-white shadow-soft translate-x-2"
                      : "bg-white/40 hover:bg-white/80 border-[#DED8CF]/30 text-[#2C2C24]"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-serif text-xs font-bold ${
                      activeStepIdx === idx ? "text-[#E6DCCD]" : "text-[#5D7052]"
                    }`}>
                      {stp.number}
                    </span>
                    <span className="font-sans text-xs tracking-wide font-bold">
                      {stp.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeStepIdx === idx ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`} />
                </button>
              ))}
            </div>

            <div 
              className="bg-[#2C2C24] text-[#FDFCF8]/90 p-6 border border-white/5 space-y-2 mt-4"
              style={{ borderRadius: "1.5rem 0.5rem 1.5rem 1.5rem" }}
            >
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-[#C18C5D]" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#C18C5D]">Atelier Commitment</span>
              </div>
              <p className="text-[10px] text-white/70 leading-relaxed font-light">
                Setiap step produksi diabadikan dalam bentuk rekaman grup WhatsApp dan divalidasi langsung oleh asisten desainer berpengalaman.
              </p>
            </div>
          </div>          {/* Right panel: Giant Cinematic Focus Showcase (Layout Asymmetric) */}
          <div 
            className="lg:col-span-8 bg-white border border-[#DED8CF]/50 shadow-soft p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group"
            style={{ borderRadius: "3rem 1.5rem 3rem 1.5rem" }}
          >
            
            {/* Absolute frame lines decoration */}
            <div className="absolute inset-4 border border-[#DED8CF]/10 rounded-[1.5rem] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
              
              {/* Image side - rounded looks like cover photo */}
              <div className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F0EBE5] shadow-soft">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none" />
                <img
                  src={steps[activeStepIdx].image}
                  alt={steps[activeStepIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Duration Badge overlay */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-[#DED8CF]/40 px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-soft">
                  <Hourglass className="w-3 h-3 text-[#5D7052]" />
                  <span className="text-[9px] font-sans font-bold text-[#2C2C24] uppercase tracking-wider">
                    {steps[activeStepIdx].durationBadge}
                  </span>
                </div>
              </div>

              {/* Informational detailed text side */}
              <div className="md:col-span-7 space-y-6 text-left">
                <div>
                  <span className="font-serif text-4xl font-extralight text-[#5D7052] leading-none mb-1 block">
                    {steps[activeStepIdx].number}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C18C5D] font-bold">Prosedur Operasional Standar</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2C2C24] font-extrabold mt-1">
                    {steps[activeStepIdx].title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-[#5D7052] font-bold mt-1">
                    {steps[activeStepIdx].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#2C2C24]/80 leading-relaxed font-light font-sans">
                  {steps[activeStepIdx].description}
                </p>

                {/* Checklist Bullet Lines */}
                <div className="space-y-2.5 pt-4 border-t border-[#DED8CF]/40">
                  <p className="text-[10px] uppercase tracking-wider text-[#2C2C24]/45 font-bold mb-2">Checklist Verifikasi Kerja:</p>
                  {steps[activeStepIdx].checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 rounded bg-[#5D7052]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#5D7052]" />
                      </div>
                      <span className="text-xs font-sans font-bold text-[#2C2C24]/90">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technical brief details call out (greyish aesthetic) */}
                <div className="bg-[#FDFCF8] p-4 rounded-2xl border border-[#DED8CF]/40 flex items-start space-x-3 text-[11px] text-[#2C2C24]/75 leading-relaxed font-light">
                  <Sliders className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#C18C5D] font-bold">Catatan Teknis Garmen:</strong> {steps[activeStepIdx].technicalBrief}
                  </div>
                </div>

              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-[#DED8CF]/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs">
              <span className="text-[#2C2C24]/60 font-light">Hubungi kami via WhatsApp untuk membuat sampel fisik model baju custom Anda.</span>
              <button
                className="bg-[#5D7052] text-[#F3F4F1] py-3.5 px-6 rounded-full hover:bg-[#4c5c43] transition-all duration-300 hover:scale-105 active:scale-95 font-bold text-[11px] tracking-wider uppercase flex items-center justify-center space-x-2 shadow-soft"
                onClick={() => {
                  const msg = `Halo Meccadeyna, saya membaca penjelasan alur kerja step *${steps[activeStepIdx].number}* (*${steps[activeStepIdx].title}*) di website. Saya ingin bertanya lebih lanjut mengenai prosedur pembuatan sample tersebut.`;
                  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                <span>Tanyakan Step Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
