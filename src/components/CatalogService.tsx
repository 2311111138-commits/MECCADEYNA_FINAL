/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { X, CheckCircle2, Scissors, Sparkles, Feather, FileText, Calendar, ArrowRight } from "lucide-react";

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  image: string;
  tagline: string;
  desc: string;
  fabrics: string[];
  stitches: string[];
  finishing: string[];
  duration: string;
  moq: string;
}

export default function CatalogService() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: "gamis",
      category: "Gamis Production",
      title: "Premium Gamis & Abaya Atelier",
      image: "/assets/images/meccadeyna_garment_1779880760948.png",
      tagline: "Gaun muslimah berkelas dgn draf drapery siluet mengalir sempurna.",
      desc: "Meccadeyna menguasai teknik pembuatan Gamis premium dengan siluet anggun, jahitan kelim kecil rapi, detail plisket lipat berkelas, ritsleting Jepang tersembunyi, hingga detail manset lengan fungsional wudhu-friendly.",
      fabrics: ["Rayon Twill Eco", "Rayon Silk Premium", "Katun Toyobo Royal", "Linen Sand-washed"],
      stitches: ["Jahit Kelim Kecil (Boutique Seams)", "Obras Rapat 4 Benang", "Kancing Bungkus Kokoh", "Bar-tacking pada Sudut Rawan Robek"],
      finishing: ["Setrika Uap Industri (Steam Pressing)", "Metode QC 3 Tahap", "Pemberian Tagging & Label Presisi", "Wangi Aromaterapi Organik Khas Meccadeyna"],
      duration: "7 - 12 Hari Kerja",
      moq: "50 Pcs per model"
    },
    {
      id: "muslim-wear",
      category: "Muslim Wear",
      title: "Modest Wear & Hijab Ensemble",
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
      tagline: "Penerjemahan visi modest wear modern menjadi koleksi memikat.",
      desc: "Kami memproduksi koleksi hijab syar'i, khimar laser-cut, tunik bermotif, outer bertingkat, hingga celana kulot longgar. Keunggulan kami adalah cutting pola antitembem pada khimar dan perpaduan detail payet manual.",
      fabrics: ["Katun Poplin Premium", "Katun Bamboo Silk", "Rayon Premium Diamond", "Cradenza Silk"],
      stitches: ["Jahit Tepi Piko & Kelim Rapi", "Finishing Laser-Cut Sempurna", "Sambungan Pola Jahit Selaras", "Kerah Sanghai dengan Lapisan Interlining Tebal"],
      finishing: ["Pembersihan Sisa Benang (Thread Grooming)", "Pressing Lipatan Kerudung", "Kemasan Ziplock Premium Reusable", "Pemeriksaan Keselarasan Warna Benang"],
      duration: "10 - 14 Hari Kerja",
      moq: "50 Pcs per model"
    },
    {
      id: "dailywear",
      category: "Dailywear Collection",
      title: "Luxury Lounge & Dailywear Set",
      image: "https://images.unsplash.com/photo-1608234807905-4465857f9202?auto=format&fit=crop&w=800&q=80",
      tagline: "Dailywear premium berpori tinggi dengan kenyamanan optimal.",
      desc: "Mendesain daster premium, setelan rayon berkerah, kaos oversized katun bamboo, hingga piyama rumah mewah. Menitikberatkan pada ruang gerak yang leluasa, elastis karet pinggang yang anti-gatal, serta ketahanan cuci mesin.",
      fabrics: ["Rayon Twill Premium", "Rayon Diamond Print", "Katun Bamboo Premium", "Cotton Combed Super-soft"],
      stitches: ["Jahit Double-needle (Tack Stitch)", "Karet Pinggang Jahit Tanam (Anti-melintir)", "Kelim Lebar Bawah Symmetris", "Saku Samping Terbuka Kuat"],
      finishing: ["Sanforized Anti-susut Kain", "Inspeksi Karet & Kelenturan", "Lipatan Grid Editorial", "Barcode Packaging Terstruktur"],
      duration: "7 - 10 Hari Kerja",
      moq: "50 Pcs per model"
    }
  ];

  const handleConsultService = (service: ServiceDetail) => {
    const text = `Halo Meccadeyna, saya ingin mendiskusikan jasa produksi khusus *${service.category}* untuk model *${service.title}* saya. Mohon info lebih lengkap mengenai langkah awal pemesanan.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="layanan" className="py-28 bg-[#FDFCF8] select-none text-[#2C2C24]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">Kategori Produksi</span>
            <span className="w-6 h-[1px] bg-[#5D7052]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold">
            Layanan Utama & <span className="italic font-light text-[#C18C5D]">Katalog Spesialisasi</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 max-w-xl mx-auto font-light leading-relaxed">
            Didedikasikan penuh untuk mengolah lembaran bahan serat alami seperti katun murni dan rayon premium menjadi sandang modest berkelas butik internasional yang siap memperkuat brand Anda.
          </p>
        </div>

        {/* ASYMMETRIC LOOKBOOK GRID COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* FEATURED SERVICE CARD - Gamis (Spans 7 columns on large screens) */}
          <div 
            className="lg:col-span-7 bg-[#FEFEFA] overflow-hidden border border-[#DED8CF]/50 shadow-soft hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)] transition-all duration-500 group flex flex-col justify-between"
            style={{ borderRadius: "3rem 1.5rem 3rem 1.5rem" }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EBE5]">
              <div className="absolute inset-0 bg-[#C18C5D]/5 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img
                src={services[0].image}
                alt={services[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1.2s] scale-100 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 z-20 bg-[#FDFCF8]/95 backdrop-blur-md border border-[#DED8CF]/60 px-4 py-1.5 rounded-full shadow-soft">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#5D7052] font-bold">
                  {services[0].category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2C24] group-hover:text-[#5D7052] transition-colors duration-300 font-extrabold">
                    {services[0].title}
                  </h3>
                  <span className="text-xs font-serif italic text-[#C18C5D] font-bold">{services[0].moq}</span>
                </div>
                
                <p className="text-xs sm:text-sm text-[#2C2C24]/75 leading-relaxed font-light">
                  {services[0].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-[#DED8CF]/50 my-4 text-xs">
                  <div className="flex items-start space-x-3">
                    <Feather className="w-4 h-4 text-[#C18C5D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Bahan Serat Alami</p>
                      <p className="text-[#2C2C24]/60 text-[11px] leading-relaxed">Rayon Twill, Rayon Silk, Toyobo, Linen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Scissors className="w-4 h-4 text-[#5D7052] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Boutique Seams Standard</p>
                      <p className="text-[#2C2C24]/60 text-[11px] leading-relaxed">Kelim bulat mikro, obras 4 benang rapat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => setSelectedService(services[0])}
                  className="flex-1 text-center bg-[#F0EBE5] hover:bg-[#E6DCCD] text-[#2C2C24] px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-soft border border-[#DED8CF]/40"
                >
                  Detail Spesifikasi
                </button>
                <button
                  onClick={() => handleConsultService(services[0])}
                  className="flex-1 text-center bg-[#5D7052] hover:bg-[#4c5c43] text-[#F3F4F1] px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-soft"
                >
                  <span>Mulai Desain Gamis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* SECOND & THIRD SERVICES (Staggered Column grid on the right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            {services.slice(1).map((item, idx) => (
              <div
                key={item.id}
                className="bg-[#FEFEFA] overflow-hidden border border-[#DED8CF]/50 shadow-soft hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)] transition-all duration-500 hover:rotate-1 group flex flex-col justify-between flex-grow"
                style={{ borderRadius: idx % 2 === 0 ? "2rem 4rem 2rem 4rem" : "4rem 2rem 4rem 2rem" }}
              >
                {/* Horizontal Card Layout for secondary categories */}
                <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                  
                  {/* Left Side: Thumbnail image */}
                  <div className="sm:col-span-5 relative h-48 sm:h-auto overflow-hidden bg-[#F0EBE5]">
                    <div className="absolute inset-0 bg-[#C18C5D]/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] scale-100 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-[#FDFCF8]/95 border border-[#DED8CF]/40 px-2.5 py-1 rounded-full shadow-soft">
                      <span className="text-[8px] uppercase tracking-wider text-[#5D7052] font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: content */}
                  <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#2C2C24] group-hover:text-[#5D7052] transition-colors duration-300 font-extrabold">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#2C2C24]/65 uppercase tracking-wider font-bold mt-1 italic text-[#C18C5D]">
                        {item.moq}
                      </p>
                      <p className="text-xs text-[#2C2C24]/70 leading-relaxed font-light mt-3">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-[#DED8CF]/40">
                      <button
                        onClick={() => setSelectedService(item)}
                        className="text-[10px] text-center bg-[#F0EBE5] hover:bg-[#E6DCCD] font-bold py-2.5 px-1 rounded-full text-[#2C2C24] tracking-wide uppercase transition-all duration-300 hover:scale-105"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => handleConsultService(item)}
                        className="text-[10px] text-center bg-[#5D7052]/10 hover:bg-[#5D7052] hover:text-[#F3F4F1] font-bold py-2.5 px-1 rounded-full text-[#5D7052] tracking-wide uppercase transition-all duration-300 hover:scale-105"
                      >
                        Konsultasi
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Detailed Modal Overlay Sheet for Services */}
        {selectedService && (
          <div className="fixed inset-0 bg-[#2C2C24]/55 backdrop-blur-md z-[200] flex items-center justify-center p-4">
            <div 
              className="bg-[#FDFCF8] w-full max-w-3xl overflow-hidden shadow-2xl border border-[#DED8CF]/40 relative my-8 animate-scale-up"
              style={{ borderRadius: "3rem 1rem 3rem 1rem" }}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#2C2C24] hover:bg-black text-white transition-colors shadow-sm"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
                
                {/* Modal Visual Left side */}
                <div className="md:col-span-5 relative h-56 md:h-auto bg-[#F0EBE5]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#C18C5D]/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C2C24]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#C18C5D] bg-[#FDFCF8] px-3 py-1 rounded-full">{selectedService.category}</span>
                    <h4 className="font-serif text-lg leading-tight mt-3 font-bold">{selectedService.title}</h4>
                  </div>
                </div>

                {/* Modal Info Right side */}
                <div className="md:col-span-7 p-8 md:p-10 text-left">
                  
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C18C5D] font-bold">Atelier Standard Specs</span>
                  <h3 className="font-serif text-2xl text-[#2C2C24] mt-2 mb-4 font-bold">{selectedService.title}</h3>
                  <p className="text-xs text-[#2C2C24]/80 leading-relaxed mb-6 border-b border-[#DED8CF]/50 pb-4 font-light">
                    {selectedService.desc}
                  </p>

                  <div className="space-y-6">
                    {/* Fabrics choice */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#5D7052] font-bold mb-2">
                        <Feather className="w-3.5 h-3.5 mr-2" />
                        Pilihan Bahan (Rayon & Katun)
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.fabrics.map((fab, i) => (
                          <span key={i} className="text-[10px] font-sans text-[#2C2C24] bg-[#FEFEFA] border border-[#DED8CF]/60 px-3 py-1.5 rounded-full font-medium shadow-xs">
                            {fab}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stitches Standard */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#C18C5D] font-bold mb-2">
                        <Scissors className="w-3.5 h-3.5 mr-2" />
                        Standar Teknik Jahit (Boutique Grade)
                      </h5>
                      <div className="space-y-2">
                        {selectedService.stitches.map((stitch, i) => (
                          <div key={i} className="flex items-center text-xs text-[#2C2C24]/85 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5D7052] mr-2 flex-shrink-0" />
                            <span>{stitch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality Finishing Standard */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#5D7052] font-bold mb-2">
                        <Sparkles className="w-3.5 h-3.5 mr-2" />
                        Finishing & Packing Eksklusif
                      </h5>
                      <div className="space-y-2">
                        {selectedService.finishing.map((item, i) => (
                          <div key={i} className="flex items-start text-xs text-[#2C2C24]/85 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C18C5D] mr-2.5 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Production parameters */}
                    <div className="grid grid-cols-2 gap-4 bg-[#FEFEFA] p-4 rounded-2xl border border-[#DED8CF]/40 mt-6 shadow-xs">
                      <div className="flex items-center space-x-2.5">
                        <Calendar className="w-4 h-4 text-[#5D7052]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#2C2C24]/50 font-bold">Estimasi Waktu</p>
                          <p className="text-xs font-semibold text-[#2C2C24]">{selectedService.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <FileText className="w-4 h-4 text-[#C18C5D]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#2C2C24]/50 font-bold">Minimal Order</p>
                          <p className="text-xs font-semibold text-[#2C2C24]">{selectedService.moq}</p>
                        </div>
                      </div>
                    </div>

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
