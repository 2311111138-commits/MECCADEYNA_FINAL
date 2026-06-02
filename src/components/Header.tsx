import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1F1F1F]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 lg:px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#7B8B6F]/50">
          <img 
            src="/images/daster_black_navy_1780392547984.png" 
            alt="Meccadeyna Logo" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=MD";
            }}
          />
        </div>
        <span className="font-serif tracking-widest text-lg font-bold text-white">MECCADEYNA</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white/70">
        <a href="#portfolio" className="hover:text-white transition-colors">Koleksi</a>
        <a href="#visualizer" className="hover:text-white transition-colors">Visualizer</a>
      </nav>
    </header>
  );
}
