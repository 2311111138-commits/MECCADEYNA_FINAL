import React from "react";
import Header from "./components/Header";
import InteractiveVisualizer from "./components/InteractiveVisualizer";
import PortfolioMasonry from "./components/PortfolioMasonry";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white antialiased selection:bg-[#7B8B6F] selection:text-white">
      <Header />
      <main>
        <PortfolioMasonry />
        <InteractiveVisualizer />
      </main>
      <footer className="py-8 text-center text-xs text-white/30 border-t border-white/5 bg-[#1F1F1F]">
        &copy; {new Date().getFullYear()} Meccadeyna Premium. All Rights Reserved.
      </footer>
    </div>
  );
}
