/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Eye, X, ZoomIn, Heart, Sparkles, Scissors, PackageOpen } from "lucide-react";
import { GalleryItem } from "../types";

export default function PortfolioMasonry() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

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

  const filteredPhotos = selectedFilter === "all"
    ? photos
    : photos.filter(item => item.category === selectedFilter);

  // Deep editorial text inside lightbox based on ID
  const getPhotoDescriptor = (id: string) => {
    switch (id) {
      case "stitch-1":
        return {
          icon: <Scissors className="w-5 h-5 text-[#7B8B6F]" />,
          tech: "Teknik Kelim Bulat 1.5mm",
          desc: "Detail jahit bar-tacking sudut saku untuk mengantisipasi sobek apabila dimasukkan gawai. Menggunakan jarum tipis merk Organ Jepang agar tidak melubangi jalinan benang rayon twill."
        };
      case "gamis-1":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#B89B72]" />,
          tech: "Siluet Abaya Oversized Fit",
          desc: "Sambungan lipit dada fungsional busui dengan ritsleting kerah rahasia YKK 30cm. Kelebaran payung bawah berkeliling 2.8 meter agar memberikan siluet ayunan feminim megah ketika dipakai berjalan."
        };
      case "proc-1":
        return {
          icon: <Eye className="w-5 h-5 text-[#7B8B6F]" />,
          tech: "Pre-shrink Kain Sanforized",
          desc: "Kain katun dan rayon kami sterilkan menyusut sebelum dijahit potong pola. Ini menjamin produk akhir tidak melar kerdil setelah dimasukkan ke mesin cuci pelanggan pertama kali."
        };
      case "fabric-1":
        return {
          icon: <Heart className="w-5 h-5 text-[#B89B72]" />,
          tech: "Kurasi Serat Terverifikasi OEKO-TEX",
          desc: "Kertas jaminan mutu bahwa katun serta paku benang rayon kami bebas pestisida kimia klorin berbahaya, aman digunakan untuk kulit sensitif dan bayi sekalipun."
        };
      case "daily-1":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#7B8B6F]" />,
          tech: "Jahit Double Sewing Karet Pinggang",
          desc: "Karet pinggang elastis tebal 3.5cm dijahit tanam vertikal. Menjamin karet tidak bergeser terbalik melintir setelah setahun pemakaian aktif di rumah."
        };
      case "pack-1":
        return {
          icon: <PackageOpen className="w-5 h-5 text-[#B89B72]" />,
          tech: "Iron Steam & Fragrance Mist",
          desc: "Penyemprotan parfum anti-bakteri melati keraton yang lembut. Setiap sandang dilipat dengan rapi ala butik, dibungkus polybag tebal berperekat menjamin higienitas tinggi."
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-[#7B8B6F]" />,
          tech: "Atelier Standard Craft",
          desc: "Kualitas pengerjaan butik mandiri teruji dengan standar kontrol kualitas yang diandalkan belasan lokal desainer se-Indonesia."
        };
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F5F1EA] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#7B8B6F]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#7B8B6F] font-semibold">Dokumentasi Produksi</span>
            <span className="w-6 h-[1px] bg-[#7B8B6F]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight mb-4">
            Galeri Detail & <span className="italic font-light text-[#B89B72]">Hasil Karya Nyata</span>
          </h2>
          <p className="text-sm text-[#2B2B2B]/70">
            Intip kedekatan penjahit kami dengan detail jarit, serat lusi benang katun murni, dan keindahan kemasan butik yang kami persiapkan untuk brand Anda.
          </p>
        </div>

        {/* Filter Tab Layout */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                selectedFilter === tab.value
                  ? "bg-[#7B8B6F] text-white font-semibold shadow-xs"
                  : "bg-[#EFEAE0] text-[#2B2B2B] hover:bg-[#7B8B6F]/10 hover:text-[#7B8B6F]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Pinterest grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl bg-[#EFEAE0] transition-all duration-500 hover:shadow-lg border border-[#B89B72]/10"
            >
              {/* Aspect ratio variation dynamically */}
              <div className="relative aspect-square sm:aspect-4/5 lg:aspect-3/4 overflow-hidden">
                <div className="absolute inset-0 bg-[#2B2B2B]/0 group-hover:bg-[#2B2B2B]/40 transition-all duration-300 z-10" />
                
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-[1.04]"
                  loading="lazy"
                />

                {/* Hover overlay text content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#B89B72] font-semibold mb-1">
                    Detail {photo.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium leading-snug">
                    {photo.title}
                  </h4>
                  <div className="mt-3 flex items-center space-x-1.5 text-[10px] text-white/80 font-semibold uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Periksa Teknik</span>
                  </div>
                </div>

                {/* Minimal zoom-in sign in image top right */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 p-2.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#2B2B2B]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immersive Photo Lightbox Explorer */}
        {activePhoto && (
          <div className="fixed inset-0 bg-[#2B2B2B]/55 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#F5F1EA] w-full max-w-2xl rounded-3xl overflow-hidden border border-[#B89B72]/20 shadow-2xl relative animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#2B2B2B]/90 hover:bg-[#2B2B2B] text-white transition-colors shadow-sm"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Layout */}
              <div className="flex flex-col">
                
                {/* Big Img block */}
                <div className="relative aspect-16/10 bg-[#EFEAE0] overflow-hidden">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#B89B72]/10 mix-blend-multiply" />
                </div>

                {/* Subtitle / Tech Specifications text */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-4 h-[1px] bg-[#7B8B6F]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#7B8B6F] font-bold">
                      Klaim Mutu {activePhoto.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#2B2B2B] mb-4">
                    {activePhoto.title}
                  </h3>

                  {/* Tech specs call out box */}
                  <div className="bg-[#EFEAE0] p-5 rounded-2xl border border-[#B89B72]/15 flex items-start space-x-4">
                    <div className="bg-[#7B8B6F]/10 p-2.5 rounded-xl flex-shrink-0">
                      {getPhotoDescriptor(activePhoto.id).icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#B89B72] font-bold mb-1">
                        Teknis Garmen: {getPhotoDescriptor(activePhoto.id).tech}
                      </p>
                      <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
                        {getPhotoDescriptor(activePhoto.id).desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom dismiss btn */}
                  <div className="mt-6 flex justify-between items-center text-[10px] text-[#2B2B2B]/50 font-semibold uppercase tracking-wider">
                    <span>Meccadeyna Atelier Studio</span>
                    <button
                      onClick={() => setActivePhoto(null)}
                      className="text-[#7B8B6F] hover:underline"
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
