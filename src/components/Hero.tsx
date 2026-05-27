/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Star, Globe, Shield, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollToVisualizer = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#visualizer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTentang = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#tentang");
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
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 md:py-32 overflow-hidden bg-[#F5F1EA] flex items-center justify-center select-none">
      {/* Absolute Decorative Premium Ambient Backdrops */}
      <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#7B8B6F]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#B89B72]/5 blur-3xl pointer-events-none" />
      
      {/* Background Image Layer with soft vignette overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute inset-0 bg-linear-to-b from-[#F5F1EA] via-transparent to-[#F5F1EA]/90 z-10" />
        <div className="absolute inset-0 bg-[#B89B72]/10 mix-blend-color z-10" />
        <img
          src={heroImage}
          alt="Meccadeyna Atelier Context Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full z-10 flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl text-center flex flex-col items-center relative"
        >

          {/* Elegant Brand Category Micro-tag */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <span className="w-6 h-[1px] bg-black/20" />
            <span className="text-xs uppercase tracking-[0.35em] text-black font-semibold">
              MOSLEM PREMIUM OUTFIT
            </span>
            <span className="w-6 h-[1px] bg-black/20" />
          </motion.div>

          {/* Headline - Big Majestic Brand Name */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#2B2B2B] leading-none mb-6 tracking-[0.18em] font-light uppercase"
          >
            MECCADEYNA
          </motion.h1>

          {/* Subheadline - Premium Natural Copy Rata Tengah */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base md:text-lg text-[#2B2B2B]/80 leading-relaxed mb-10 max-w-2xl font-light"
          >
            Meccadeyna menghadirkan layanan produksi premium khusus untuk fashion brand. Spesialis material rayon & katun dengan standar jahitan butik untuk Gamis, Muslim Wear, dan Dailywear.
          </motion.p>

          {/* Elegant Button Actions Rata Tengah */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full max-w-md"
          >
            <a
              href="#visualizer"
              onClick={handleScrollToVisualizer}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#7B8B6F] text-white hover:bg-[#68775d] px-8 py-4 px-10 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] border border-transparent"
            >
              <span>Mulai Rancang Brand</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tentang"
              onClick={handleScrollToTentang}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/60 hover:bg-white text-[#2B2B2B] hover:text-[#7B8B6F] px-8 py-4 px-10 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-[#2B2B2B]/10 hover:border-[#7B8B6F]/30 shadow-xs"
            >
              <span>Filosofi Produksi</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
