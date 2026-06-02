import React from "react";

const koleksiDaster = [
  {
    id: 1,
    title: "Daster Eksklusif Black Navy",
    fabric: "Rayon Premium",
    image: "/images/daster_black_navy_1780392547984.png"
  },
  {
    id: 2,
    title: "Daster Luxury Maroon",
    fabric: "Rayon Premium",
    image: "/images/daster_maroon.png"
  },
  {
    id: 3,
    title: "Daster Olive Premium",
    fabric: "Katun Twill",
    image: "/images/daster_olive.png"
  }
];

export default function PortfolioMasonry() {
  return (
    <section id="portfolio" className="py-20 bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7B8B6F] font-bold">Katalog Produk</span>
          <h2 className="text-2xl md:text-4xl font-serif mt-2 text-white">Koleksi Meccadeyna Terkini</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {koleksiDaster.map((item) => (
            <div key={item.id} className="bg-[#2B2B2B] rounded-2xl overflow-hidden border border-white/5 group shadow-lg">
              <div className="h-[400px] w-full overflow-hidden relative bg-[#1F1F1F]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x500?text=Foto+Menyusul";
                  }}
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-[#7B8B6F] uppercase tracking-widest font-bold">{item.fabric}</span>
                <h3 className="text-lg font-serif mt-1 text-white/90">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
