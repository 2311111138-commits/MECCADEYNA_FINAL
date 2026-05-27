/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutAtelier from "./components/AboutAtelier";
import CatalogService from "./components/CatalogService";
import InteractiveVisualizer from "./components/InteractiveVisualizer";
import ProductionTimeline from "./components/ProductionTimeline";
import PortfolioMasonry from "./components/PortfolioMasonry";
import BespokeCTA from "./components/BespokeCTA";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";

export default function App() {
  const handleMobileWaClick = () => {
    const text = "Halo Meccadeyna, saya berkunjung dari website premium dan tertarik untuk berkonsultasi mengenai produksi makloon modest brand saya.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-[#F5F1EA] min-h-screen text-[#2B2B2B] overflow-x-hidden antialiased selection:bg-[#7B8B6F]/25 selection:text-[#2B2B2B]">
      
      {/* Decorative Premium Border framing the entire letterbox page (Luxury agency style) */}
      <div className="hidden xl:block fixed inset-0 z-50 border-[10px] border-[#F5F1EA] pointer-events-none" />

      {/* Sticky Top Luxury Navigation bar */}
      <Header />

      <main className="relative">
        {/* Hero Segment */}
        <Hero />

        {/* Filosofi & Tentang Meccadeyna */}
        <AboutAtelier />

        {/* Layanan & Katalog Produksi */}
        <CatalogService />

        {/* Bespoke Interactive Cotton/Rayon Visualizer Planning Studio */}
        <InteractiveVisualizer />

        {/* Production step-by-step Timeline */}
        <ProductionTimeline />

        {/* Pinterest Gallery Grid with stitching macros & Lightbox details */}
        <PortfolioMasonry />

        {/* Conversion WhatsApp Soft-Sell Segment */}
        <BespokeCTA />
      </main>

      {/* Elegant Detailed Footer */}
      <Footer />

      {/* STICKY WHATSAPP FLOATING BADGE ON MOBILE */}
      <button
        onClick={handleMobileWaClick}
        aria-label="Contact WhatsApp"
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#7B8B6F] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(123,139,111,0.4)] border border-white/20 active:scale-90 hover:bg-[#68775d] transition-all duration-300 flex items-center justify-center group animate-pulse"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-[10px] uppercase tracking-widest font-bold font-sans pl-0 group-hover:pl-2">
          Consult
        </span>
      </button>
    </div>
  );
}

