/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle transparent to blurred white transition on scroll and track page scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Read current scroll position to update active hash link
      const sections = ["hero", "tentang", "layanan", "visualizer", "alur", "portfolio", "testimoni", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
          }
        }
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Tentang", href: "#tentang", id: "tentang" },
    { label: "Layanan & Bahan", href: "#layanan", id: "layanan" },
    { label: "Material Visualizer", href: "#visualizer", id: "visualizer" },
    { label: "Alur Produksi", href: "#alur", id: "alur" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Testimoni", href: "#testimoni", id: "testimoni" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDFCF8]/80 backdrop-blur-md shadow-soft border-b border-[#DED8CF]/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#DED8CF]/25 overflow-hidden pointer-events-none">
        <div
          className="h-full transition-all duration-75 ease-out rounded-r-full"
          style={{ 
            width: `${scrollProgress}%`,
            background: "linear-gradient(to right, #5D7052, #C18C5D)"
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
        {/* Brand Logo - Styled as Organic Atelier */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex flex-col items-start select-none group"
        >
          <span className="font-serif text-2xl tracking-[0.12em] text-[#2C2C24] font-extrabold leading-none group-hover:text-[#5D7052] transition-colors duration-300">
            MECCADEYNA
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#78786C] mt-1 font-bold select-none">
            MOSLEM PREMIUM OUTFIT
          </span>
        </a>

        {/* Desktop Navbar Menu - Floating rounded pill of glassmorphism */}
        <nav className="hidden lg:flex items-center bg-[#FDFCF8]/85 backdrop-blur-lg border border-[#DED8CF]/50 rounded-full lg:px-4 lg:py-1.5 xl:px-6 xl:py-2.5 lg:space-x-1 xl:space-x-1.5 lg:mx-4 xl:mx-6 shadow-sm transition-all duration-300">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`font-sans text-[10px] xl:text-[11px] tracking-[0.05em] xl:tracking-[0.08em] uppercase lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full select-none transition-all duration-300 ${
                activeTab === item.id
                  ? "text-[#F3F4F1] bg-[#5D7052] font-semibold shadow-soft"
                  : "text-[#2C2C24]/80 font-medium border border-transparent hover:text-[#5D7052] hover:bg-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Elegant WhatsApp CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Meccadeyna%2C%20saya%20tertarik%20untuk%20konsultasi%20makloon%20brand%20fashion%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#5D7052] text-[#F3F4F1] hover:bg-[#4c5c43] px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-soft"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Mulai Konsultasi</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 text-[#2C2C24] hover:text-[#5D7052] transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop & Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#FDFCF8] z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto pb-24 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`block font-serif text-2xl tracking-wide border-b border-[#DED8CF]/40 pb-3 hover:text-[#5D7052] transition-colors ${
                activeTab === item.id ? "text-[#5D7052] font-bold pl-2" : "text-[#2C2C24] font-semibold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Bottom WhatsApp CTA */}
        <div className="p-8 bg-[#F0EBE5]/50 border-t border-[#DED8CF]/40 space-y-4 rounded-t-[2rem]">
          <div className="text-center">
            <p className="text-xs tracking-wider text-[#C18C5D] uppercase font-bold">WhatsApp Service</p>
            <p className="text-xs text-[#2C2C24]/70 mt-1">Konsultasi gratis & pendampingan brand eksklusif</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Meccadeyna%2C%20saya%20tertarik%20untuk%20konsultasi%20makloon%20brand%20fashion%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full bg-[#5D7052] text-[#F3F4F1] py-4 rounded-full text-sm font-bold tracking-wider uppercase shadow-soft"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hubungi Via WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
