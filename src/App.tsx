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

export default function App() {
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
    </div>
  );
}

