/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Star, Award, ShieldCheck, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroImage = "/src/assets/images/meccadeyna_hero_1779880710395.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1], // Custom elegant ease-out
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#FEFEFC] via-[#FDFCF8] to-[#F4EFE5] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Organic blob backgrounds creating ambient light */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] bg-[#5D7052]/8 blur-[120px] pointer-events-none" 
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-[#C18C5D]/6 blur-[100px] pointer-events-none"
        style={{ borderRadius: "50% 50% 30% 70% / 40% 60% 50% 50%" }}
      />

      {/* Structured letters frame for lookbook aesthetic */}
      <div className="absolute left-6 bottom-12 hidden xl:block pointer-events-none select-none z-10">
        <span className="font-serif text-[10vw] font-bold text-[#5D7052]/[0.025] leading-none tracking-widest uppercase">
          ATELIER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Emotional Copywriting & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-12 xl:col-span-7 flex flex-col items-start text-left"
          >
            {/* Elegant Floating Category Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-[#F0EBE5]/80 backdrop-blur-md border border-[#DED8CF] rounded-full px-4 py-1.5 mb-8 hover:bg-white transition-colors duration-300 shadow-soft"
            >
              <span className="text-[10px] font-sans font-extrabold tracking-[0.2em] text-[#2C2C24] uppercase">
                MOSLEM PREMIUM OUTFIT
              </span>
            </motion.div>

            {/* Premium Broad Headline with Fraunces Typography */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2C24] leading-[1.08] tracking-tight font-extrabold mb-8"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              Membantu Fashion <br className="hidden sm:inline" />
              Brand Tumbuh Lewat <br />
              <span className="italic font-light text-[#5D7052]">Produksi yang Rapi</span> <br className="hidden sm:inline" />
              dan Terukur.
            </motion.h1>

            {/* Refined Subhead */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base md:text-lg text-[#2C2C24]/80 leading-relaxed mb-10 max-w-xl font-light"
            >
              Dari gamis hingga daster premium, Meccadeyna hadir sebagai partner makloon terpercaya untuk brand pemilik label yang ingin tampil serius, konsisten, dan siap berkembang pesat di kancah nasional maupun global.
            </motion.p>

            {/* Custom Interactive Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollToSection("contact")}
                className="group relative flex items-center justify-center space-x-3 bg-[#5D7052] text-[#F3F4F1] py-4 px-8 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-soft hover:scale-105 active:scale-95"
              >
                <span>Mulai Konsultasi Produksi</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollToSection("portfolio")}
                className="flex items-center justify-center space-x-3 bg-[#E6DCCD]/40 hover:bg-[#E6DCCD]/80 text-[#2C2C24] py-4 px-8 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border border-[#DED8CF] shadow-soft hover:scale-105 active:scale-95"
              >
                <span>Lihat Portfolio</span>
              </button>
            </motion.div>

            {/* Soft stats or values badge in row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-10 mt-10 border-t border-[#DED8CF] w-full max-w-md"
            >
              <div>
                <span className="block font-serif text-2xl md:text-3xl font-extrabold text-[#5D7052]">50<span className="text-xs font-sans text-[#C18C5D] font-bold">pcs</span></span>
                <span className="text-[9px] uppercase tracking-wider text-[#2C2C24]/50 font-extrabold block mt-1">Minimum Order</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl font-extrabold text-[#5D7052]">7-14<span className="text-xs font-sans text-[#C18C5D] font-bold">Hari</span></span>
                <span className="text-[9px] uppercase tracking-wider text-[#2C2C24]/50 font-extrabold block mt-1">Pengerjaan Cepat</span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl font-extrabold text-[#5D7052]">100%</span>
                <span className="text-[9px] uppercase tracking-wider text-[#2C2C24]/50 font-extrabold block mt-1">Garansi Jahit</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* RIGHT COLUMN: Big Editorial Image look with organic tilts & offsets */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-12 xl:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Main Image Frame with wabi-sabi rotasi -2deg and thick border matching natural systems */}
            <div 
              className="relative w-full max-w-sm sm:max-w-md xl:max-w-full aspect-[4/5] overflow-hidden shadow-float group border-[12px] border-white bg-white transition-[transform,box-shadow] duration-700 select-none cursor-pointer isolate transform"
              style={{ 
                transform: "rotate(-2deg) translate3d(0, 0, 0)",
                borderRadius: "30% 70% 40% 60% / 50% 40% 60% 50%",
                WebkitBorderRadius: "30% 70% 40% 60% / 50% 40% 60% 50%",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                willChange: "transform"
              }}
            >
              
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/0 to-black/5 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[#C18C5D]/5 mix-blend-color z-10 pointer-events-none" />
              
              <img
                src={heroImage}
                alt="Meccadeyna Haute Couture Fashion Atelier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] scale-100 group-hover:scale-105 group-active:scale-110 select-none pointer-events-none"
              />

              {/* Sophisticated floating details card on bottom of image */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#DED8CF]/30 shadow-xl flex items-center justify-between pointer-events-auto transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-[#5D7052]/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#5D7052]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#C18C5D] uppercase tracking-widest font-extrabold">Standard Atelier</p>
                    <p className="font-serif text-xs md:text-sm font-bold text-[#2C2C24]">Jahitan Sehalus Butik Global</p>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-white bg-[#5D7052] px-2.5 py-1 rounded-md">Verified</span>
              </div>
            </div>

            {/* Asymmetric offset block decorative border layer rotated oppositely */}
            <div 
              className="absolute inset-[-12px] border-2 border-[#C18C5D]/20 pointer-events-none -z-10 hidden sm:block transition-transform duration-700 hover:scale-[1.02]" 
              style={{ 
                transform: "rotate(1deg) translate(8px, 8px)",
                borderRadius: "40% 60% 30% 70% / 50% 50% 60% 40%"
              }}
            />

            {/* Floating Mini Badge Top Right */}
            <div className="absolute -top-4 -right-2 z-20 bg-[#2C2C24] border border-white/10 text-white rounded-2xl py-3 px-5 shadow-float transform rotate-6 hover:rotate-0 transition-all duration-300 hidden sm:flex items-center space-x-2">
              <Star className="w-4 h-4 text-[#C18C5D] fill-[#C18C5D]" />
              <span className="font-serif text-[10px] tracking-widest uppercase text-[#F3F4F1] font-bold">Standard 56spi</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
