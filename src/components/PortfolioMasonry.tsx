/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Eye, X, ZoomIn, Heart, Sparkles, Scissors, PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "../types";

export default function PortfolioMasonry() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const photos: GalleryItem[] = [
    {
      id: "stitch-1",
      category: "jahitan",
      title: "Jahitan Kelim Mikro Sempurna",
      image: "/src/assets/images/meccadeyna_stitching_1779880733810.png"
    },
    {
      id: "gamis-1",
      category: "gamis",
      title: "Drapery Abaya Rayon Silk",
      image: "/src/assets/images/meccadeyna_garment_1779880760948.png"
    },
    {
      id: "proc-1",
      category: "proses",
      title: "Pemberian Pola & Cutting Presisi",
      image: "/src/assets/images/meccadeyna_hero_1779880710395.png"
    },
    {
      id: "fabric-1",
      category: "proses",
      title: "Katalog Roll Katun Poplin & Rayon Twill",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "daily-1",
      category: "dailywear",
      title: "Lounge Set Minimalist Linen-Cotton",
      image: "https://images.unsplash.com/photo-1608234807905-4465857f9202?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pack-1",
      category: "packing",
      title: "Pengepakan Butik Steril Kedap Udara",
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filters = [
    { label: "Semua Hasil", value: "all" },
    { label: "Model Gamis", value: "gamis" },
    { label: "Dailywear", value: "dailywear" },
    { label: "Proses Workshop", value: "proses" },
    { label: "Detail Jahit", value: "jahitan" },
    { label: "Ekspedisi & Packing", value: "packing" }
  ];

  // Dynamic visible count detection to maintain clean structural columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPhotos = selectedFilter === "all"
    ? photos
    : photos.filter(item => item.category === selectedFilter);

  // Maximum sliding index bounds
  const maxIndex = Math.max(0, filteredPhotos.length - visibleCount);

  // Safely bound the index when filter items change dynamically
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [selectedFilter, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleFilterChange = (val: string) => {
    setSelectedFilter(val);
    setCurrentIndex(0);
  };

  // Deep editorial text inside lightbox based on ID
  const getPhotoDescriptor = (id: string) => {
    switch (id) {
      case "stitch-1":
        return {
          icon: <Scissors className="w-5 h-5 text-[#5D7052]" />,
          tech: "Teknik Kelim Bulat 1.5mm",
          desc: "Detail jahit bar-tacking sudut saku untuk mengantisipasi sobek apabila dimasukkan gawai. Menggunakan jarum tipis merk Organ Jepang agar tidak melubangi jalinan benang rayon twill."
        };
      case "gamis-1":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Siluet Abaya Oversized Fit",
          desc: "Sambungan lipit dada fungsional busui dengan ritsleting kerah rahasia YKK 30cm. Kelebaran payung bawah berkeliling 2.8 meter agar memberikan siluet ayunan feminim megah ketika dipakai berjalan."
        };
      case "proc-1":
        return {
          icon: <Eye className="w-5 h-5 text-[#5D7052]" />,
          tech: "Pre-shrink Kain Sanforized",
          desc: "Kain katun dan rayon kami sterilkan menyusut sebelum dijahit potong pola. Ini menjamin produk akhir tidak melar kerdil setelah dimasukkan ke mesin cuci pelanggan pertama kali."
        };
      case "fabric-1":
        return {
          icon: <Heart className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Kurasi Serat Terverifikasi OEKO-TEX",
          desc: "Kertas jaminan mutu bahwa katun serta paku benang rayon kami bebas pestisida kimia klorin berbahaya, aman digunakan untuk kulit sensitif dan bayi sekalipun."
        };
      case "daily-1":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Jahit Double Sewing Karet Pinggang",
          desc: "Karet pinggang elastis tebal 3.5cm dijahit tanam vertikal. Menjamin karet tidak bergeser terbalik melintir setelah setahun pemakaian aktif di rumah."
        };
      case "pack-1":
        return {
          icon: <PackageOpen className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Iron Steam & Fragrance Mist",
          desc: "Penyemprotan parfum anti-bakteri melati keraton yang lembut. Setiap sandang dilipat dengan rapi ala butik, dibungkus polybag tebal berperekat menjamin higienitas tinggi."
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Atelier Standard Craft",
          desc: "Kualitas pengerjaan butik mandiri teruji dengan standar kontrol kualitas yang diandalkan belasan lokal desainer se-Indonesia."
        };
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-[#FDFCF8] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">Dokumentasi Produksi</span>
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold">
            Galeri Detail & <span className="italic font-light text-[#C18C5D]">Hasil Karya Nyata</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 font-light leading-relaxed">
            Intip kedekatan penjahit kami dengan detail jarit, serat lusi benang katun murni, dan keindahan kemasan bukti premium yang kami persiapkan untuk brand Anda.
          </p>
        </div>

        {/* Filter Tab Layout */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleFilterChange(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === tab.value
                  ? "bg-[#5D7052] text-white shadow-soft"
                  : "bg-[#F0EBE5]/50 text-[#2C2C24] hover:bg-[#5D7052]/10 hover:text-[#5D7052]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* LOOKBOOK INTERACTIVE CAROUSEL VIEWPORT */}
        <div className="relative group/carousel px-4">
          
          <div className="overflow-hidden rounded-[2.5rem] border border-[#DED8CF]/30 bg-[#F0EBE5]/20 p-2">
            {/* Sliding Track */}
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)` }}
            >
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  style={{ width: `${100 / visibleCount}%`, minWidth: `${100 / visibleCount}%` }}
                  className="px-3"
                >
                  <div
                    onClick={() => setActivePhoto(photo)}
                    className="cursor-pointer group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-lg border border-[#DED8CF]/40"
                  >
                    <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 bg-[#2C2C24]/0 group-hover:bg-[#2C2C24]/45 transition-all duration-300 z-10" />
                      
                      <img
                        src={photo.image}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      {/* Hover overlay text content */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C18C5D] font-bold mb-1">
                          Detail {photo.category}
                        </span>
                        <h4 className="font-serif text-base text-white font-medium leading-snug">
                          {photo.title}
                        </h4>
                        <div className="mt-3 flex items-center space-x-1.5 text-[9px] text-white/80 font-bold uppercase tracking-wider">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Periksa Teknik</span>
                        </div>
                      </div>

                      {/* Zoom icon on top right */}
                      <div className="absolute top-4 right-4 z-20 bg-[#FDFCF8]/95 p-2.5 rounded-full opacity-75 group-hover:opacity-100 transition-opacity shadow-soft">
                        <ZoomIn className="w-3.5 h-3.5 text-[#2C2C24]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredPhotos.length > visibleCount && (
            <>
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-[-16px] xl:left-[-32px] top-1/2 -translate-y-1/2 z-35 w-11 h-11 rounded-full bg-[#FEFEFA] hover:bg-[#5D7052] text-[#2C2C24] hover:text-[#F3F4F1] flex items-center justify-center transition-all duration-300 shadow-soft border border-[#DED8CF]/50"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="absolute right-[-16px] xl:right-[-32px] top-1/2 -translate-y-1/2 z-35 w-11 h-11 rounded-full bg-[#FEFEFA] hover:bg-[#5D7052] text-[#2C2C24] hover:text-[#F3F4F1] flex items-center justify-center transition-all duration-300 shadow-soft border border-[#DED8CF]/50"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

        </div>

        {/* Inline Indicators / Dots */}
        {filteredPhotos.length > visibleCount && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                  currentIndex === idx ? "bg-[#5D7052] w-6" : "bg-[#C18C5D]/20 w-1.5 hover:bg-[#C18C5D]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Small informational caption */}
        <p className="text-center text-[10px] uppercase tracking-widest text-[#2C2C24]/45 mt-4 font-bold">
          Gunakan panah navigasi untuk melihat lebih banyak contoh jahitan kami
        </p>

        {/* Immersive Photo Lightbox Explorer */}
        {activePhoto && (
          <div className="fixed inset-0 bg-[#2C2C24]/65 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#FEFEFA] w-full max-w-2xl rounded-[2.5rem] overflow-hidden border border-[#DED8CF]/50 shadow-soft relative animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#2C2C24]/90 hover:bg-[#2C2C24] text-white transition-colors shadow-soft"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Layout */}
              <div className="flex flex-col animate-[fadeIn_0.5s_ease-out]">
                
                {/* Big Img block */}
                <div className="relative aspect-16/10 bg-[#F0EBE5] overflow-hidden">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#C18C5D]/10 mix-blend-multiply" />
                </div>

                {/* Subtitle / Tech Specifications text */}
                <div className="p-8 md:p-10 text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-4 h-[1px] bg-[#5D7052]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#5D7052] font-bold">
                      Klaim Mutu {activePhoto.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#2C2C24] font-extrabold mb-4">
                    {activePhoto.title}
                  </h3>

                  {/* Tech specs call out box */}
                  <div className="bg-[#FDFCF8] p-5 rounded-2xl border border-[#DED8CF]/40 flex items-start space-x-4">
                    <div className="bg-[#5D7052]/10 p-2.5 rounded-xl flex-shrink-0">
                      {getPhotoDescriptor(activePhoto.id).icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C18C5D] font-bold mb-1">
                        Teknis Garmen: {getPhotoDescriptor(activePhoto.id).tech}
                      </p>
                      <p className="text-xs text-[#2C2C24]/80 leading-relaxed">
                        {getPhotoDescriptor(activePhoto.id).desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom dismiss btn */}
                  <div className="mt-6 flex justify-between items-center text-[10px] text-[#2C2C24]/50 font-bold uppercase tracking-wider">
                    <span>Meccadeyna Atelier Studio</span>
                    <button
                      onClick={() => setActivePhoto(null)}
                      className="text-[#5D7052] hover:underline cursor-pointer font-bold"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
