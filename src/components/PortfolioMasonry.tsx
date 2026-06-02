/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Eye, X, ZoomIn, Heart, Sparkles, Scissors, PackageOpen, ChevronLeft, ChevronRight, Search, Tag, Filter, RotateCcw } from "lucide-react";
import { GalleryItem } from "../types";

// Helper function to extract Google Drive file ID and convert to robust cross-origin safe image formats
const getSafeGoogleDriveUrl = (url: string, isFallback = false): string => {
  if (!url) return "";
  if (!url.includes("drive.google.com") && !url.includes("googleusercontent.com")) {
    return url;
  }
  
  let fileId = "";
  const regExp = /(?:id=|\/d\/|d=)([a-zA-Z0-9_-]{25,})/;
  const match = url.match(regExp);
  if (match && match[1]) {
    fileId = match[1];
  } else {
    return url;
  }

  // Use lh3.googleusercontent.com as primary (super fast, direct CDN),
  // and full-resolution thumbnail w1200 as stable fallback
  if (isFallback) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
  }
  return `https://lh3.googleusercontent.com/d/${fileId}`;
};

export default function PortfolioMasonry() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [imageSrcs, setImageSrcs] = useState<Record<string, string>>({});

  const getImageSrc = (photoId: string, initialUrl: string) => {
    if (imageSrcs[photoId]) {
      return imageSrcs[photoId];
    }
    return getSafeGoogleDriveUrl(initialUrl);
  };

  const handleImageError = (photoId: string, initialUrl: string) => {
    if (!imageSrcs[photoId] && (initialUrl.includes("drive.google.com") || initialUrl.includes("googleusercontent.com"))) {
      const fallback = getSafeGoogleDriveUrl(initialUrl, true);
      setImageSrcs(prev => ({ ...prev, [photoId]: fallback }));
    }
  };

  const photos: GalleryItem[] = [
    {
      id: "mukena-jennaira-grey",
      category: "mukena",
      title: "Jennaira Set Prayer - Smokey Grey",
      fabric: "Armani Silky Premium",
      image: "/assets/images/mukena_jennaira_grey_1780393157103.png"
    },
    {
      id: "mukena-jennaira-mocca",
      category: "mukena",
      title: "Jennaira Set Prayer - Milky Mocca",
      fabric: "Armani Silky Premium",
      image: "/assets/images/mukena_jennaira_mocca_1780393179410.png"
    },
    {
      id: "mukena-jennaira-mauve",
      category: "mukena",
      title: "Jennaira Set Prayer - Dusty Lavender",
      fabric: "Armani Silky Premium",
      image: "/assets/images/mukena_jennaira_mauve_1780393199712.png"
    },
    {
      id: "mukena-lace",
      category: "mukena",
      title: "Mukena Silk Renda - French Gold",
      fabric: "Sutera Armani Premium",
      image: "/assets/images/mukena_lace_white_1780392918089.png"
    },
    {
      id: "mukena-sage",
      category: "mukena",
      title: "Mukena Terusan - Sage Botanical",
      fabric: "Satin Silk Premium",
      image: "/assets/images/mukena_sage_green_1780392933934.png"
    },
    {
      id: "sarimbit-charcoal",
      category: "gamis",
      title: "Jennaira Sarimbit - Smokey Charcoal",
      fabric: "Sutera Armani & Katun Toyobo Premium",
      image: "/assets/images/sarimbit_charcoal_1780406003799.png"
    },
    {
      id: "sarimbit-pink-grey",
      category: "gamis",
      title: "Jennaira Sarimbit - Blossom Grey",
      fabric: "Sutera Armani Premium & Katun Halus",
      image: "/assets/images/sarimbit_pink_grey_1780406019696.png"
    },
    {
      id: "sarimbit-mauve-lavender",
      category: "gamis",
      title: "Jennaira Sarimbit - Lavender Orchid",
      fabric: "Sutera Armani Premium",
      image: "/assets/images/sarimbit_mauve_lavender_1780406035651.png"
    },
    {
      id: "daster-black-navy",
      category: "daster",
      title: "Daster Flutter - Midnight & Navy",
      fabric: "Rayon Viscose Premium",
      image: "/assets/images/daster_black_navy_1780392547984.png"
    },
    {
      id: "daster-lilac-mauve",
      category: "daster",
      title: "Daster Flutter - Dusty Lilac",
      fabric: "Rayon Viscose Premium",
      image: "/assets/images/daster_lilac_mauve_1780392562242.png"
    },
    {
      id: "daster-sky-grey",
      category: "daster",
      title: "Daster Flutter - Sky & Lavender Grey",
      fabric: "Rayon Viscose Premium",
      image: "/assets/images/daster_sky_grey_1780392575441.png"
    },
    {
      id: "daster-striped-pink",
      category: "daster",
      title: "Daster Striped - Blossom Pink",
      fabric: "Radian Cotton Premium",
      image: "/assets/images/daster_striped_pink_1780392594781.png"
    },
    {
      id: "sarimbit-terracotta-beige",
      category: "gamis",
      title: "Jennaira Sarimbit - Sunset Terracotta",
      fabric: "Armani Silky & Katun Toyobo Royal",
      image: "/assets/images/sarimbit_terracotta_beige_1780406053946.png"
    },
    {
      id: "sarimbit-sky-blue",
      category: "gamis",
      title: "Jennaira Sarimbit - Oceanic Breeze",
      fabric: "Satin Silk Premium",
      image: "/assets/images/sarimbit_sky_blue_1780406072810.png"
    },
    {
      id: "daily-pink",
      category: "dailywear",
      title: "Gamis Tiered Peony - Blossom Pink",
      fabric: "Ceruty Babydoll Premium",
      image: "/assets/images/meccadeyna_daily_pink_1780391898431.png"
    },
    {
      id: "daily-blue",
      category: "dailywear",
      title: "Gamis Tiered Peony - Ice Blue",
      fabric: "Ceruty Babydoll Premium",
      image: "/assets/images/meccadeyna_daily_blue_1780391918698.png"
    },
    {
      id: "daily-peach",
      category: "dailywear",
      title: "Gamis Tiered Peony - Soft Peach",
      fabric: "Ceruty Babydoll Premium",
      image: "/assets/images/meccadeyna_daily_peach_1780391933302.png"
    },
    {
      id: "daily-black",
      category: "dailywear",
      title: "Gamis Tiered Peony - Midnight Black",
      fabric: "Ceruty Babydoll Premium",
      image: "/assets/images/meccadeyna_daily_black_1780391951862.png"
    },
    {
      id: "oneset-striped",
      category: "pajamas-oneset",
      title: "Jennaira Pajamas - Candy Stripe",
      fabric: "Radian Cotton Premium",
      image: "/assets/images/oneset_pink_striped_1780406616836.png"
    },
    {
      id: "oneset-mauve-clay",
      category: "pajamas-oneset",
      title: "Jennaira Pajamas - Mauve Clay",
      fabric: "Rayon Twill Premium",
      image: "/assets/images/oneset_mauve_clay_1780406634043.png"
    },
    {
      id: "oneset-blossom-earth",
      category: "pajamas-oneset",
      title: "Jennaira One-Set - Blossom Earth",
      fabric: "Sutera Armani & Rayon Diamond",
      image: "/assets/images/oneset_blossom_earth_1780406649239.png"
    },
    {
      id: "oneset-ocean-spray",
      category: "pajamas-oneset",
      title: "Jennaira One-Set - Oceanic Spray",
      fabric: "Sutera Armani & Rayon Diamond",
      image: "/assets/images/oneset_ocean_spray_1780406664027.png"
    },
    {
      id: "jilbab-pashmina-silk",
      category: "jilbab",
      title: "Jennaira Pashmina - Luxury Silk",
      fabric: "Sutera Armani Silk Premium",
      image: "/assets/images/jilbab_pashmina_silk_1780406978898.png"
    },
    {
      id: "jilbab-khimar-sage",
      category: "jilbab",
      title: "Jennaira Khimar - Sage Floral",
      fabric: "Satin Silk Premium & Lace",
      image: "/assets/images/jilbab_khimar_sage_1780406999522.png"
    },
    {
      id: "jilbab-bergo-earth",
      category: "jilbab",
      title: "Jennaira Bergo - Classic Earth-Tone",
      fabric: "Premium Moss Crepe Silk",
      image: "https://drive.google.com/uc?export=view&id=1G6BvxIntue15vRjw7xl9gUCVJWZEAjft"
    },
    {
      id: "jilbab-khimar-staircase",
      category: "jilbab",
      title: "Jennaira Khimar - Signature Staircase Earth Series",
      fabric: "Premium Crinkle Airflow",
      image: "https://images.unsplash.com/photo-1520006406123-55934c7efbe1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "baju-anak-gingham",
      category: "baju-anak",
      title: "Jennaira Kids - Gingham Series",
      fabric: "100% Cotton Gingham",
      image: "https://drive.google.com/file/d/1oBG4eZ6Rb-4gx1EkLX325CA1VOspbn7f/view?usp=drive_link"
    },
    {
      id: "baju-anak-floral",
      category: "baju-anak",
      title: "Jennaira Kids - Sweet Floral & Lilac",
      fabric: "Super Soft Rayon Voile",
      image: "https://drive.google.com/file/d/1auf4DXpBuupVxRkkY3-yYMlX-7cVTBvv/view?usp=drive_link"
    }
  ];

  const getCategoryBadgeLabel = (cat: string) => {
    switch (cat) {
      case "gamis":
        return { label: "SET FAMILY (SARIMBIT)", icon: "👨‍👩‍👧‍👦", style: "bg-amber-50/95 text-[#C18C5D] border-[#C18C5D]/30" };
      case "dailywear":
        return { label: "GAMIS", icon: "🏡", style: "bg-emerald-50/95 text-[#5D7052] border-[#5D7052]/30" };
      case "daster":
        return { label: "MODEL DASTER", icon: "🏡", style: "bg-rose-50/95 text-rose-800 border-rose-250/50" };
      case "mukena":
        return { label: "MUKENA PREMIUM", icon: "🕌", style: "bg-indigo-50/95 text-[#4F46E5] border-indigo-200" };
      case "pajamas-oneset":
        return { label: "PAJAMAS & ONE-SET", icon: "👚", style: "bg-teal-50/95 text-teal-800 border-teal-200" };
      case "jilbab":
        return { label: "JILBAB", icon: "🧕", style: "bg-sky-50/95 text-sky-800 border-sky-200" };
      case "baju-anak":
        return { label: "BAJU ANAK", icon: "👶", style: "bg-fuchsia-50/95 text-fuchsia-800 border-fuchsia-200" };
      default:
        return { label: "PRODUK", icon: "✨", style: "bg-white text-stone-800 border-stone-200" };
    }
  };

  const filters = [
    { label: "Semua Hasil", value: "all" },
    { label: "Set Family (Sarimbit)", value: "gamis" },
    { label: "Gamis", value: "dailywear" },
    { label: "Daster Premium", value: "daster" },
    { label: "Mukena Premium", value: "mukena" },
    { label: "Pajamas & One-set", value: "pajamas-oneset" },
    { label: "Jilbab", value: "jilbab" },
    { label: "Baju Anak", value: "baju-anak" }
  ];

  // Dynamic visible count detection to maintain clean structural columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPhotos = photos.filter(item => {
    const matchesCategory = selectedFilter === "all" || item.category === selectedFilter;
    return matchesCategory;
  });

  // Maximum sliding index bounds
  const maxIndex = Math.max(0, filteredPhotos.length - visibleCount);

  // Reset scroll on filter change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 });
    }
  }, [selectedFilter]);

  // Safely bound the index when filter items change dynamically
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [selectedFilter, maxIndex, currentIndex]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.snap-start')?.clientWidth || container.clientWidth;
      if (container.scrollLeft <= 5) {
        // Wrap to the end
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.snap-start')?.clientWidth || container.clientWidth;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      if (isAtEnd) {
        // Wrap to the beginning
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.snap-start')?.clientWidth || container.clientWidth;
      if (cardWidth > 0) {
        const index = Math.round(container.scrollLeft / cardWidth);
        setCurrentIndex(Math.min(index, maxIndex));
      }
    }
  };

  const handleFilterChange = (val: string) => {
    setSelectedFilter(val);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0 });
    }
  };

  // Deep editorial text inside lightbox based on ID
  const getPhotoDescriptor = (id: string) => {
    switch (id) {
      case "mukena-jennaira-grey":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Sajadah Pouch Quilted & Armani Silky",
          desc: "Set mukena shalat eksklusif 'Jennaira Set Prayer' bernuansa Smokey Grey yang berkelas dari kain Armani Silky berkilau premium. Sangat sejuk di kulit saat dipakai beribadah harian, dikemas lengkap dengan sajadah mini tebal bercorak jahitan quilted modern."
        };
      case "mukena-jennaira-mocca":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Efek Draping Mengalir (Flowy & Glowing)",
          desc: "Koleksi 'Jennaira Set Prayer' bernuansa warna hangat Milky Mocca yang manis dan elegan. Tekstur kain sutera Armani yang super lembut menghadirkan pancaran kemilau alami yang anggun dan adem maksimal."
        };
      case "mukena-jennaira-mauve":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Jahitan Dahi Anti Pusing & Karet Elastis",
          desc: "Varian 'Jennaira Set Prayer' dengan warna manis Dusty Lavender Mauve. Dilengkapi lingkar dahi karet empuk berukuran presisi yang didesain ergonomis agar rambut tidak keluar sekaligus bebas nyeri dahi saat sujud panjang."
        };
      case "mukena-lace":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Detail Renda Giper & Sulam Emas",
          desc: "Set mukena sholat premium berlapis renda giper mewah bercorak perancis dipadukan benang sulam emas yang manis. Jahitan pas di dahi tersemat karet fleksibel lembut anti pusing untuk ibadah khusyuk."
        };
      case "mukena-sage":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Siluet Terusan Ringan (Travel-friendly)",
          desc: "Desain mukena satu potong (terusan) berwarna sage sejuk bermotif botanical elegan. Dibuat menggunakan kain Satin Silk premium super dingin, berkarakter ringan, mudah dilipat ke dalam tas pouch kecil."
        };
      case "sarimbit-charcoal":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Sutera Armani & Detail Koko Toyobo Premium",
          desc: "Pasangan serasi 'Jennaira Family' bernuansa Smokey Charcoal yang memancarkan pesona berkelas. Gaun gamis ibu beraksen motif bunga lilac segar dari bahan Armani Silky premium yang menjuntai anggun, serasi dengan koko bapak berbahan Toyobo dengan kerah mandarin yang rapi."
        };
      case "sarimbit-pink-grey":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Cutting Nyaman & Printing Eksklusif",
          desc: "Sarimbit keluarga lengkap satu set dengan paduan warna Blossom Grey nan manis dan pink pastel berkeindahan abadi. Desain ramah anak dari bahan katun halus dikombinasikan silk sateen motif floral lembut memastikan gerak aktif sepanjang silaturahmi lebaran."
        };
      case "sarimbit-mauve-lavender":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Siluet Ruffle & Bordir Dada Mewah",
          desc: "Koleksi couple romantis 'Jennaira Lavender Orchid' dengan dominasi warna ungu anggun dan sejuk. Detail lipit dada yang luwes serta ornamen sulaman perak memberikan sentuhan premium khas butik papan atas."
        };
      case "daster-black-navy":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Jahit Obras Rapi 4 Benang & Flutter Sleeve",
          desc: "Koleksi daster premium bermotif polos elegan dengan pilihan warna Midnight Black maskulin dan Navy Blue yang anggun. Dilengkapi kancing aktif depan busui-friendly, jahitan kerut pinggang elastis yang nyaman, serta sentuhan lengan sayap (flutter sleeve) yang melambai cantik."
        };
      case "daster-lilac-mauve":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Kancing Dada Aktif & Warna Mauve Romantis",
          desc: "Daster modern dengan nuansa warna Dusty Lavender dan Lilac pastel yang sangat manis dan romantis. Dibuat menggunakan bahan Rayon Viscose berkualitas tinggi yang berkarakter super adem, jatuh mengalir indah, serta tidak menerawang untuk dipakai bersantai."
        };
      case "daster-sky-grey":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Siluet Berayun Lembut (Flowy Draping)",
          desc: "Gamis daster harian dengan potongan longgar yang elegan berwarna Sky Blue tenang dan Lavender Grey yang sejuk. Kerutan halus di bawah dada serta detail lengan melebar memberikan kebebasan bergerak maksimal sekaligus tampilan estetik di rumah."
        };
      case "daster-striped-pink":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Model Lapel Sleepshirt/Kerah Pajama Klasik",
          desc: "Inovasi daster model kemeja tidur (sleepshirt) bermotif garis vertikal pink-putih yang manis dengan kerah notch klasik yang berkelas. Cocok untuk daster harian ataupun work-from-home santai dengan bahan Radian Cotton Premium yang lembut di kulit."
        };
      case "sarimbit-terracotta-beige":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#C18C5D]" />,
          tech: "Toyobo Royal & Tekstur Adem Anti Kusut",
          desc: "Harmoni warna Sunset Terracotta hangat berpadu sand beige yang menenangkan. Menggunakan kain Toyobo Royal premium anti kusut, sangat nyaman dipakai melangkah anggun untuk aktivitas keluarga."
        };
      case "sarimbit-sky-blue":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Wudhu Friendly & Desain Lengan Balon",
          desc: "Kemilau warna biru samudera Oceanic Breeze disandingkan kemeja koko putih-abu geometris yang gagah. Dilengkapi restleting depan busui friendly serta bukaan lengan karet wudhu friendly nan fleksibel."
        };
      case "daily-pink":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Detail Bow Collar & Layering Blossom",
          desc: "Gamis harian premium dengan sentuhan warna Blossom Pink yang feminin. Menampilkan detail pita leher bergaya bow collar yang manis serta aksen bertingkat (tiered) dari bahan ceruty bertekstur lembut, memastikan kenyamanan maksimal untuk pemakaian seharian penuh."
        };
      case "daily-blue":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Soft Ruffle & Lengan Balon Anggun",
          desc: "Gamis harian premium dengan warna Ice Blue yang mendinginkan pandangan. Dilengkapi motif floral pastel romantis, potongan babydoll yang longgar dan nyaman, serta lengan balon berkerut yang wudhu-friendly untuk gerak aktif sehari-hari."
        };
      case "daily-peach":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Draping Flowy Siluet Klasik",
          desc: "Gamis harian premium sewarna Soft Peach hangat yang menyerap keringat. Kain ceruty premium jatuh dengan indah (flowy) memberikan efek anggun saat berjalan, dipermanis aksen ruffle kerah bundar yang nyaman."
        };
      case "daily-black":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Desain Kontras Sayap Organza",
          desc: "Gamis harian premium berwarna Midnight Black legendaris berpadu sayap luar/outer sayap berwarna biru muda lembut. Memberi kesan modern, eksklusif, namun tetap ringan, sopan, dan anggun."
        };
      case "oneset-striped":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#319795]" />,
          tech: "Model Lapel Sleepshirt & Motif Striped",
          desc: "Set pajamas manis bermotif garis vertikal pink-putih yang segar. Dibuat dari bahan Radian Cotton Premium bertekstur lembut dan adem luar biasa di kulit harian, lengkap dengan kerah notch klasik yang rapi dan saku depan."
        };
      case "oneset-mauve-clay":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#319795]" />,
          tech: "Material Rayon Twill Premium & Kerah V-Neck",
          desc: "Koleksi Pajamas modern model polos bernuansa Dusty Mauve yang hangat. Dilengkapi kancing hitam kontras di garis depan dada dengan material Rayon Twill murni yang sejuk, berpotongan kerah V elastis dan celana longgar yang nyaman."
        };
      case "oneset-blossom-earth":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#319795]" />,
          tech: "Sutera Armani Ruffle & Hijab-Friendly One Set",
          desc: "Setelan panjang premium nan anggun dengan atasan bermotif bunga pink romantis yang dihiasi ruffles manis di hem dahi. Dipadukan dengan celana polos taupe berpotongan longgar dari bahan sutera Armani lembut, sangat elegan dipasangkan dengan hijab harian."
        };
      case "oneset-ocean-spray":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#319795]" />,
          tech: "Desain Kerah Ruffle Bulat & Patchwork Floral",
          desc: "Setelan panjang bernuansa sejuk biru samudera 'Oceanic Spray' bermotif botanical patchwork floral yang mendinginkan pandangan. Dilengkapi aksen kerah ruffle bulat yang elegan, retsleting depan busui-friendly, serta bukaan lengan karet fleksibel yang wudhu-friendly."
        };
      case "jilbab-pashmina-silk":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#3082a6]" />,
          tech: "Armani Silk & Draping Super Lembut",
          desc: "Pashmina sutera premium 'Jennaira Pashmina' dengan material Armani Silk berkualitas tinggi yang memancarkan kilau mewah alami. Karakteristik bahan sangat lembut, mudah dibentuk, tidak licin, serta memiliki efek draping jatuh yang spektakuler."
        };
      case "jilbab-khimar-sage":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#3082a6]" />,
          tech: "Desain Syar'i Khimar & Micro-Lace Edging",
          desc: "Khimar Syar'i dua layer bermotif floral halus sejuk bernuansa Sage Green yang teduh. Diperindah dengan aksen renda giper mikro di sepanjang keliling ujung kerudung yang dikerjakan dengan presisi tinggi demi hasil akhir yang elegan."
        };
      case "jilbab-bergo-earth":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#3082a6]" />,
          tech: "Syar'i Khimar Bergo Polos & Tali Pengikat",
          desc: "Seri Bergo Instan premium polos bernuansa earth-tone (cokelat, terracotta, kuning mustard, abu-abu). Menggunakan bahan Moss Crepe premium tebal bertekstur pasir lembut yang breathable dengan siluet lingkar jatuh anggun nan syar'i."
        };
      case "jilbab-khimar-staircase":
        return {
          icon: <Sparkles className="w-5 h-5 text-[#3082a6]" />,
          tech: "French Khimar Instan & 6 Earth-Tone Warm Palette",
          desc: "Koleksi Khimar Instan premium (pilihan warna earth-tone legendaris: abu zaitun hangat, ungu lavender redup, terracotta clay, kuning mustard, hingga cokelat mocca) yang terpajang indah dekat tangga butik. Menggunakan kain Premium Crinkle Airflow yang sangat flowy, adem, tidak mudah kusut, dan memiliki efek drape jatuh melambai indah dalam siluet syar'i modern."
        };
      case "baju-anak-gingham":
        return {
          icon: <Sparkles className="w-5 h-5 text-fuchsia-800" />,
          tech: "Puff Balloon Sleeves & Tiered Ruffled Skirt",
          desc: "Dress anak bertingkat bervolume manis bermotif kotak-kotak (gingham) klasik, hadir benderang dalam pilihan warna Sky Blue dan Midnight Black. Dijahit presisi tinggi menggunakan 100% Cotton Gingham premium yang sejuk luar biasa, sangat lembut di kulit sensitif anak, serta dilengkapi lengan balon berkaret manis yang elastis nyaman dipakai beraktivitas ceria seharian."
        };
      case "baju-anak-floral":
        return {
          icon: <Sparkles className="w-5 h-5 text-fuchsia-800" />,
          tech: "Ruffled Flounce & Minimalist Floral Prints",
          desc: "Desain harmonis dalam dua tipe manis. Varian Pastel Lilac polos menawarkan dres dengan motif outline sketsa mawar putih minimalis yang anggun dan berkelas. Varian Pink Blossom memancarkan keceriaan musim panas bermodel dres berkerut rimbun motif bunga tropis, dahan merambat kelok, mawar merah, lili kuning, serta siluet kupu-kupu yang kaya warna. Terbuat dari Super Soft Rayon Voile sutera berkualitas butik tinggi yang flowy, adem, dan jatuh melambai indah."
        };
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-[#5D7052]" />,
          tech: "Atelier Standard Craft",
          desc: "Kualitas pengerjaan butik mandiri teruji dengan standar kontrol kualitas yang diandalkan belasan lokal desainer se-Indonesia."
        };
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-[#FDFCF8] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5D7052] font-bold">Dokumentasi Produksi</span>
            <span className="w-6 h-[1.5px] bg-[#5D7052]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C24] leading-tight font-extrabold">
            Galeri Detail & <span className="italic font-light text-[#C18C5D]">Hasil Karya Nyata</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C24]/70 font-light leading-relaxed">
            Intip kedekatan penjahit kami dengan detail jarit, serat lusi benang katun murni, dan keindahan kemasan bukti premium yang kami persiapkan untuk brand Anda.
          </p>
        </div>

        {/* Filter Tab Layout */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleFilterChange(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === tab.value
                  ? "bg-[#5D7052] text-white shadow-soft"
                  : "bg-[#F0EBE5]/50 text-[#2C2C24] hover:bg-[#5D7052]/10 hover:text-[#5D7052]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredPhotos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-[#F0EBE5]/25 border border-[#DED8CF]/30 rounded-[2.5rem] text-center max-w-xl mx-auto space-y-4">
            <div className="p-4 bg-[#C18C5D]/15 rounded-full text-[#C18C5D]">
              <Search className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C2C24]">Rekomendasi Tidak Ditemukan</h3>
              <p className="text-xs text-[#2C2C24]/70 max-w-sm mx-auto mt-1 leading-relaxed">
                Kami tidak menemukan hasil untuk kategori pilihan Anda.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedFilter("all");
              }}
              className="flex items-center space-x-2 bg-[#5D7052] hover:bg-[#4A5941] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-soft cursor-pointer font-sans"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Atur Ulang Pencarian</span>
            </button>
          </div>
        ) : (
          /* LOOKBOOK INTERACTIVE CAROUSEL VIEWPORT */
          <div className="relative group/carousel px-4 animate-[fadeIn_0.5s_ease-out]">
            
            <div className="overflow-hidden rounded-[2.5rem] border border-[#DED8CF]/30 bg-[#F0EBE5]/20 p-2">
              {/* Sliding Track - Scrollable to the side */}
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 snap-start animate-[scaleUp_0.4s_ease-out]"
                  >
                    <div
                      onClick={() => setActivePhoto(photo)}
                      className="cursor-pointer group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-lg border border-[#DED8CF]/40 select-none"
                    >
                      <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden">
                        <div className="absolute inset-0 bg-[#2C2C24]/0 group-hover:bg-[#2C2C24]/45 transition-all duration-300 z-10" />
                        
                        <img
                          src={getImageSrc(photo.id, photo.image)}
                          alt={photo.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-[1.04] pointer-events-none"
                          loading="lazy"
                          onError={() => handleImageError(photo.id, photo.image)}
                        />

                        {/* Persistent Category-specific Badge */}
                        <div className="absolute top-4 left-4 z-20 pointer-events-none transition-all duration-300">
                          <span className={`text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-1.5 rounded-full border shadow-xs backdrop-blur-md flex items-center gap-1 ${getCategoryBadgeLabel(photo.category).style}`}>
                            <span>{getCategoryBadgeLabel(photo.category).icon}</span>
                            <span>{getCategoryBadgeLabel(photo.category).label}</span>
                          </span>
                        </div>

                        {/* Persistent Fabric Badge */}
                        {photo.fabric && (
                          <div className="absolute top-4 right-14 z-20 pointer-events-none transition-all duration-300">
                            <span className="text-[9px] font-bold tracking-wider bg-white/95 text-[#2C2C24]/85 border border-[#DED8CF]/60 px-2.5 py-1.5 rounded-full shadow-xs backdrop-blur-md flex items-center gap-1 uppercase">
                              <span className="text-[10px]">🌿</span>
                              <span>{photo.fabric}</span>
                            </span>
                          </div>
                        )}

                        {/* Hover overlay text content */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C18C5D] font-bold mb-1">
                            Detail Kualitas
                          </span>
                          <h4 className="font-serif text-base text-white font-medium leading-snug">
                            {photo.title}
                          </h4>
                          <div className="mt-3 flex items-center space-x-1.5 text-[9px] text-white/80 font-bold uppercase tracking-wider">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Periksa Teknik</span>
                          </div>
                        </div>

                        {/* Zoom icon on top right */}
                        <div className="absolute top-4 right-4 z-20 bg-[#FDFCF8]/95 p-2.5 rounded-full opacity-75 group-hover:opacity-100 transition-opacity shadow-soft">
                          <ZoomIn className="w-3.5 h-3.5 text-[#2C2C24]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredPhotos.length > visibleCount && (
              <>
                {/* Left arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-[-16px] xl:left-[-32px] top-1/2 -translate-y-1/2 z-35 w-11 h-11 rounded-full bg-[#FEFEFA] hover:bg-[#5D7052] text-[#2C2C24] hover:text-[#F3F4F1] flex items-center justify-center transition-all duration-300 shadow-soft border border-[#DED8CF]/50 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-[-16px] xl:right-[-32px] top-1/2 -translate-y-1/2 z-35 w-11 h-11 rounded-full bg-[#FEFEFA] hover:bg-[#5D7052] text-[#2C2C24] hover:text-[#F3F4F1] flex items-center justify-center transition-all duration-300 shadow-soft border border-[#DED8CF]/50 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
            </>
          )}

        </div>
      )}

        {/* Inline Indicators / Dots */}
        {filteredPhotos.length > visibleCount && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.querySelector('.snap-start')?.clientWidth || container.clientWidth;
                    container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                  currentIndex === idx ? "bg-[#5D7052] w-6" : "bg-[#C18C5D]/20 w-1.5 hover:bg-[#C18C5D]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Small informational caption */}
        <p className="text-center text-[10px] uppercase tracking-widest text-[#2C2C24]/45 mt-4 font-bold">
          Gunakan panah navigasi untuk melihat lebih banyak contoh jahitan kami
        </p>

        {/* Immersive Photo Lightbox Explorer */}
        {activePhoto && (
          <div className="fixed inset-0 bg-[#2C2C24]/65 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#FEFEFA] w-full max-w-2xl rounded-[2.5rem] overflow-hidden border border-[#DED8CF]/50 shadow-soft relative animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#2C2C24]/90 hover:bg-[#2C2C24] text-white transition-colors shadow-soft"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Lightbox Layout */}
              <div className="flex flex-col animate-[fadeIn_0.5s_ease-out]">
                
                {/* Big Img block */}
                <div className="relative aspect-16/10 bg-[#F0EBE5] overflow-hidden">
                  <img
                    src={getImageSrc(activePhoto.id, activePhoto.image)}
                    alt={activePhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(activePhoto.id, activePhoto.image)}
                  />
                  <div className="absolute inset-0 bg-[#C18C5D]/10 mix-blend-multiply" />
                </div>

                {/* Subtitle / Tech Specifications text */}
                <div className="p-8 md:p-10 text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-4 h-[1px] bg-[#5D7052]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#5D7052] font-bold">
                      Klaim Mutu {getCategoryBadgeLabel(activePhoto.category).label}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#2C2C24] font-extrabold mb-4">
                    {activePhoto.title}
                  </h3>

                  {/* Tech specs call out box */}
                  <div className="bg-[#FDFCF8] p-5 rounded-2xl border border-[#DED8CF]/40 flex items-start space-x-4">
                    <div className="bg-[#5D7052]/10 p-2.5 rounded-xl flex-shrink-0">
                      {getPhotoDescriptor(activePhoto.id).icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C18C5D] font-bold mb-1">
                        Teknis Garmen: {getPhotoDescriptor(activePhoto.id).tech}
                      </p>
                      <p className="text-xs text-[#2C2C24]/80 leading-relaxed">
                        {getPhotoDescriptor(activePhoto.id).desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom dismiss btn */}
                  <div className="mt-6 flex justify-between items-center text-[10px] text-[#2C2C24]/50 font-bold uppercase tracking-wider">
                    <span>Meccadeyna Atelier Studio</span>
                    <button
                      onClick={() => setActivePhoto(null)}
                      className="text-[#5D7052] hover:underline cursor-pointer font-bold"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
<img
  src={getImageSrc(photo.id, photo.image)}
  alt={photo.title}
  className="w-full h-full object-cover"
  loading="lazy"
  onError={(e) => {
    console.error("IMAGE ERROR:", photo.image);
    handleImageError(photo.id, photo.image);
  }}
/>
