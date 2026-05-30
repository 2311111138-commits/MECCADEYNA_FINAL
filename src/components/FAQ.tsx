import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, MessageCircle, FileText, Globe, Scissors } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqList: FAQItem[] = [
    {
      id: 1,
      question: "Berapa minimal order (MOQ) yang dipersyaratkan?",
      answer: "Minimum Order Quantity (MOQ) kami sangat ramah bagi pendiri brand modest rintisan maupun butik berkembang, yakni dimulai dari **50 pcs per model atau warna**. Kebijakan ini dihadirkan untuk membantu efisiensi arus kas (cashflow) brand Anda saat merilis koleksi uji pasar pertama kali, dengan jaminan mutu jahitan eksklusif kelas atas yang konsisten.",
      icon: <Scissors className="w-4 h-4 text-[#C18C5D]" />
    },
    {
      id: 2,
      question: "Apakah bisa mengajukan custom pola dan kustomisasi desain?",
      answer: "**Tentu saja, kami melayani sistem makloon penuh (fully-bespoke).** Anda dapat membawa sketsa tangan mentah, contoh foto busana dari internet, ataupun sampel pakaian fisik yang sudah ada. Tim asisten desainer pola Meccadeyna akan mengonversinya ke dalam pola digital presisi serta membantu pembuatan revisi struktur lekuk tubuh agar tampak anggun saat dikenakan.",
      icon: <HelpCircle className="w-4 h-4 text-[#C18C5D]" />
    },
    {
      id: 3,
      question: "Berapa lama estimasi jangka waktu siklus produksi?",
      answer: "Waktu pengerjaan standar berkisar antara **14 hingga 25 hari kerja** dihitung setelah desain sampel fisik (prototipe) disetujui secara resmi dan kain telah siap. Durasi ini menjamin terpenuhinya standar operational butik mewah kami, termasuk metode pra-penyusutan kain (*sanforized*), rajut kelim halus, gosok uap bertekanan tinggi, hingga kurasi kontrol kualitas dua tahap (*double QC*).",
      icon: <FileText className="w-4 h-4 text-[#C18C5D]" />
    },
    {
      id: 4,
      question: "Apakah melayani pengiriman garmen ke luar kota atau luar negeri?",
      answer: "Kami melayani pengiriman ke **seluruh wilayah di Indonesia** dan jangkauan perdagangan garmen internasional (termasuk Malaysia, Singapura, Brunei Darussalam, dan Timor Leste). Setiap kiriman dibalut dengan pelindung kardus kargo tertutup rapat, antimikroba, dilapisi plastik kedap air, serta diasuransikan penuh demi kenyamanan batin Anda.",
      icon: <Globe className="w-4 h-4 text-[#C18C5D]" />
    },
    {
      id: 5,
      question: "Apakah disediakan pembuatan sampel fisik terlebih dahulu?",
      answer: "**Ya, pembuatan sampel pakaian (prototype) wajib dilakukan sebelum produksi massal.** Kami memproduksi satu sampel fisik utuh menggunakan kain pilihan Anda untuk dievaluasi kelonggaran siluetnya (*fitting process*). Setelah sampel dirasa sempurna dan Anda menandatangani formulir persetujuan sampel, barulah mesin jahit utama kami mulai memproses lembaran kain massal koleksi Anda.",
      icon: <MessageCircle className="w-4 h-4 text-[#C18C5D]" />
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FCFAF5] select-none relative overflow-hidden border-t border-[#DED8CF]/30">
      {/* Decorative botanical-style background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#5D7052]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#C18C5D]/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">Pusat Informasi</span>
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C24] leading-tight font-extrabold capitalize">
            Pertanyaan Yang <span className="italic font-light text-[#C18C5D]">Sering Diajukan</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 font-light leading-relaxed">
            Temukan panduan praktis mengenai sistem makloon garmen, ketentuan pembuatan pola khusus, hingga skema pengemasan eksklusif di atelier Meccadeyna.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`group border rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C18C5D]/40 shadow-[0_15px_30px_rgba(193,140,93,0.06)]"
                    : "bg-[#FDFCF8]/90 border-[#DED8CF]/50 hover:bg-white hover:border-[#5D7052]/40"
                }`}
              >
                {/* Header (Question trigger) */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-2xl transition-all duration-300 ${
                      isOpen ? "bg-[#C18C5D]/10 text-[#C18C5D]" : "bg-[#F0EBE5] text-[#2C2C24]/60 group-hover:bg-[#5D7052]/10 group-hover:text-[#5D7052]"
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-serif text-[15px] sm:text-base text-[#2C2C24] font-bold leading-snug tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full border transition-all duration-300 flex-shrink-0 ${
                    isOpen 
                      ? "border-[#C18C5D]/30 bg-[#C18C5D]/5 text-[#C18C5D] rotate-180" 
                      : "border-[#DED8CF] bg-white text-[#2C2C24]/40 group-hover:border-[#5D7052]/30 group-hover:text-[#5D7052]"
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-[#DED8CF]/30">
                        <p 
                          className="text-[13px] sm:text-sm text-[#2C2C24]/85 leading-relaxed font-sans font-light"
                          dangerouslySetInnerHTML={{
                            __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#5D7052]">$1</strong>')
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-[#F0EBE5]/50 border border-[#DED8CF]/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif text-base text-[#2C2C24] font-bold">
              Butuh konsultasi lebih personal mengenai modest brand Anda?
            </h4>
            <p className="text-[11px] sm:text-xs text-[#2C2C24]/70 font-light">
              Tim asisten desainer kami siap memberikan asisten solusi komprehensif tanpa dipungut biaya melalui WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Meccadeyna,%20silakan%20bantu%20jelaskan%20mekanisme%20produksi%20dan%20biaya%20makloon%20modest%20brand%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2.5 bg-[#5D7052] hover:bg-[#4A5941] text-white px-5 sm:px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-soft hover:shadow-lg transition-all duration-300 group cursor-pointer font-sans"
          >
            <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
            <span>Tanya Via WA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
