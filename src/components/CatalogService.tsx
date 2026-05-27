/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { X, CheckCircle, Scissors, Sparkles, Feather, FileText, Calendar } from "lucide-react";

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
      image: "/src/assets/images/meccadeyna_garment_1779880760948.png",
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

  return (
    <section id="layanan" className="py-24 bg-[#F5F1EA] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#7B8B6F]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#7B8B6F] font-semibold">Kategori Produksi</span>
            <span className="w-6 h-[1px] bg-[#7B8B6F]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight mb-4">
            Layanan Utama & <span className="italic font-light text-[#B89B72]">Katalog Spesialisasi</span>
          </h2>
          <p className="text-sm text-[#2B2B2B]/75">
            Didedikasikan penuh untuk memproses bahan rayon dan katun pilihan menjadi mahakarya pakaian modest premium yang siap memikat pasaran fashion modern.
          </p>
        </div>

        {/* 3-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#B89B72]/10 shadow-[0_4px_30px_rgba(43,43,43,0.02)] hover:shadow-[0_15px_40px_rgba(123,139,111,0.07)] hover:translate-y-[-6px] transition-all duration-500 flex flex-col h-full"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EFEAE0]">
                {/* Visual Warm Gold Overlay */}
                <div className="absolute inset-0 bg-[#B89B72]/5 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                
                {/* Small category tag in image corner */}
                <div className="absolute top-4 left-4 z-20 bg-[#F5F1EA]/95 backdrop-blur-sm border border-[#B89B72]/15 px-3 py-1.5 rounded-full">
                  <span className="text-[10px] uppercase tracking-widest text-[#7B8B6F] font-bold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] group-hover:text-[#7B8B6F] transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#2B2B2B]/70 leading-relaxed mb-6">
                    {item.tagline}
                  </p>
                  
                  {/* Small specs bullet icons */}
                  <div className="space-y-2 mb-8 border-t border-[#B89B72]/10 pt-4">
                    <div className="flex items-center text-[11px] text-[#2B2B2B]/60 uppercase tracking-wider font-semibold">
                      <Feather className="w-3.5 h-3.5 text-[#B89B72] mr-2" />
                      <span>Fokus Rayon & Katun Premium</span>
                    </div>
                    <div className="flex items-center text-[11px] text-[#2B2B2B]/60 uppercase tracking-wider font-semibold">
                      <Scissors className="w-3.5 h-3.5 text-[#7B8B6F] mr-2" />
                      <span>Jahitan Butik Halus & Rapi</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(item)}
                  className="w-full text-center bg-[#EFEAE0] hover:bg-[#7B8B6F] text-[#2B2B2B] hover:text-white px-6 py-3.5 rounded-2xl text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  Lihat Detail Spesifikasi
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Sheet Modal Overlay for Services */}
        {selectedService && (
          <div className="fixed inset-0 bg-[#2B2B2B]/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#F5F1EA] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#B89B72]/20 relative my-8 animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#2B2B2B] hover:text-[#7B8B6F] transition-colors shadow-sm"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Modal Visual Left side */}
                <div className="md:col-span-5 relative h-56 md:h-auto bg-[#EFEAE0]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#B89B72]/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2B2B2B]/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B89B72] bg-white px-2.5 py-1 rounded-full">{selectedService.category}</span>
                    <h4 className="font-serif text-lg leading-tight mt-2">{selectedService.title}</h4>
                  </div>
                </div>

                {/* Modal Info Right side */}
                <div className="md:col-span-7 p-8 md:p-10 max-h-[80vh] overflow-y-auto">
                  
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89B72] font-semibold">Atelier Standard Service Specs</span>
                  <h3 className="font-serif text-2xl text-[#2B2B2B] mt-2 mb-4">{selectedService.title}</h3>
                  <p className="text-xs text-[#2B2B2B]/85 leading-relaxed mb-6 border-b border-[#B89B72]/15 pb-4">
                    {selectedService.desc}
                  </p>

                  <div className="space-y-6">
                    {/* Fabrics choice */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#7B8B6F] font-bold mb-2">
                        <Feather className="w-3.5 h-3.5 mr-2" />
                        Pilihan Bahan (Rayon & Katun)
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.fabrics.map((fab, i) => (
                          <span key={i} className="text-[10px] font-sans text-[#2B2B2B] bg-white border border-[#B89B72]/15 px-3 py-1 rounded-full font-medium">
                            {fab}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stitches Standard */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#B89B72] font-bold mb-2">
                        <Scissors className="w-3.5 h-3.5 mr-2" />
                        Standar Teknik Jahit (Boutique Grade)
                      </h5>
                      <div className="space-y-1">
                        {selectedService.stitches.map((stitch, i) => (
                          <div key={i} className="flex items-center text-xs text-[#2B2B2B]/80">
                            <CheckCircle className="w-3.5 h-3.5 text-[#7B8B6F] mr-2 flex-shrink-0" />
                            <span>{stitch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality Finishing Standard */}
                    <div>
                      <h5 className="flex items-center text-xs uppercase tracking-widest text-[#7B8B6F] font-bold mb-2">
                        <Sparkles className="w-3.5 h-3.5 mr-2" />
                        Finishing & Packing Eksklusif
                      </h5>
                      <div className="space-y-1">
                        {selectedService.finishing.map((item, i) => (
                          <div key={i} className="flex items-center text-xs text-[#2B2B2B]/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] mr-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Production parameters */}
                    <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-[#B89B72]/10 mt-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#7B8B6F]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#2B2B2B]/50 font-semibold">Estimasi Waktu</p>
                          <p className="text-xs font-semibold text-[#2B2B2B]">{selectedService.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#B89B72]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#2B2B2B]/50 font-semibold">Minimal Order</p>
                          <p className="text-xs font-semibold text-[#2B2B2B]">{selectedService.moq}</p>
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
