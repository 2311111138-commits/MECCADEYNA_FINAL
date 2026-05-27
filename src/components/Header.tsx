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

  // Handle transparent to blurred white transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Read current scroll position to update active hash link
      const sections = ["hero", "tentang", "layanan", "visualizer", "alur", "portfolio", "contact"];
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
          ? "bg-[#F5F1EA]/90 backdrop-blur-md shadow-sm border-b border-[#B89B72]/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
        {/* Brand Logo - Styled as Luxury Atelier */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex flex-col items-start select-none group"
        >
          <span className="font-serif text-2xl tracking-[0.15em] text-black font-bold leading-none group-hover:text-[#7B8B6F] transition-colors duration-300">
            MECCADEYNA
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-black mt-1 font-bold select-none">
            MOSLEM PREMIUM OUTFIT
          </span>
        </a>

        {/* Desktop Navbar Menu - Friendlier, beautifully aligned, soft pill interaction */}
        <nav className="hidden lg:flex items-center bg-[#F5F1EA]/50 backdrop-blur-sm border border-[#B89B72]/20 rounded-full px-6 py-1.5 space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`font-sans text-xs tracking-wider uppercase px-4 py-2 rounded-full select-none transition-all duration-300 ${
                activeTab === item.id
                  ? "text-white bg-[#7B8B6F] font-bold shadow-xs border border-[#7B8B6F]"
                  : "text-black font-semibold border border-transparent hover:text-[#7B8B6F] hover:bg-white/60"
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
            className="flex items-center space-x-2 bg-[#7B8B6F] text-white hover:bg-[#68775d] px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-md hover:translate-y-[-1px] border border-transparent hover:border-[#B89B72]/20 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Mulai Konsultasi</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 text-[#2B2B2B] hover:text-[#7B8B6F] transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop & Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#F5F1EA] z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto pb-24 ${
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
              className={`block font-serif text-2xl tracking-wide border-b border-[#B89B72]/10 pb-3 hover:text-[#7B8B6F] transition-colors ${
                activeTab === item.id ? "text-[#7B8B6F] font-bold pl-2" : "text-black font-semibold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Bottom WhatsApp CTA */}
        <div className="p-8 bg-[#F5F1EA] border-t border-[#B89B72]/10 space-y-4">
          <div className="text-center">
            <p className="text-xs tracking-wider text-[#B89B72] uppercase">WhatsApp Service</p>
            <p className="text-xs text-[#2B2B2B]/70 mt-1">Konsultasi gratis & pendampingan brand eksklusif</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Meccadeyna%2C%20saya%20tertarik%20untuk%20konsultasi%20makloon%20brand%20fashion%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full bg-[#7B8B6F] text-white py-4 rounded-full text-sm font-semibold tracking-wider uppercase"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hubungi Via WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
