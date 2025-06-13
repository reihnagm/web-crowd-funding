'use client';

import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const faqData = {
    Umum: [
      {
        question: "Apa itu Fulusme?",
        answer:
          "FULUSME adalah Penyelenggara Layanan Urun Dana Berbasis Teknologi Informasi (Securities Crowdfunding) yang merupakan tempat bertemunya Pemodal dan Penerbit dalam satu wadah platform.",
      },
      {
        question: "Apa itu Efek?",
        answer:
          "Efek adalah surat berharga seperti saham, obligasi, atau surat utang lainnya yang dapat diperdagangkan di pasar modal.",
      },
    ],
    Pemodal: [
      {
        question: "Bagaimana cara menjadi Pemodal?",
        answer:
          "Anda bisa mendaftar di platform FULUSME, melakukan verifikasi, dan mulai berinvestasi pada proyek yang tersedia.",
      },
      {
        question: "Apa risiko menjadi Pemodal?",
        answer:
          "Semua investasi memiliki risiko, termasuk risiko gagal bayar dari penerbit. Lakukan analisis terlebih dahulu.",
      },
    ],
    Penerbit: [
      {
        question: "Apa itu Penerbit?",
        answer:
          "Penerbit adalah pihak yang mencari pendanaan melalui platform FULUSME dengan menawarkan efek kepada publik.",
      },
      {
        question: "Apa syarat menjadi Penerbit?",
        answer:
          "Penerbit harus merupakan badan hukum Indonesia dan memenuhi persyaratan dari OJK serta regulasi terkait.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<"Umum" | "Pemodal" | "Penerbit">("Umum");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#321B87] to-[#4821C1] text-white relative overflow-hidden">
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="flex justify-between items-center px-10 py-6 text-sm font-semibold">
          <div className={`text-xl font-bold ${isSticky ? "text-[#321B87]" : "text-white"}`}>
            FULUSME
          </div>
          <ul className="flex gap-6 items-center">
            <li className={isSticky ? "text-[#321B87] font-semibold" : "text-[#4CD137]"}>Beranda</li>
            <li>Daftar Bisnis</li>
            <li>Tentang Kami</li>
            <li>Pasar Sekunder</li>
            <li>Penerbit</li>
            <li>
              <button
                className={`px-5 py-2 rounded-full ${
                  isSticky ? "bg-[#4CD137] text-white" : "bg-[#4CD137] text-white"
                }`}
              >
                Masuk
              </button>
            </li>
            <li>Daftar</li>
          </ul>
        </div>
      </nav>

      {/* Spacer to avoid layout jump */}
      <div className="h-[90px]" />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 py-16">
        {/* Left content */}
        <div className="space-y-6 z-10 relative">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Selamat Datang di FULUSME
          </h1>
          <p className="text-white text-sm leading-relaxed">
            FULUSME adalah Penyelenggara Layanan Urun Dana Berbasis Teknologi Informasi
            (Securities Crowdfunding) yang telah mendapatkan izin dari OJK melalui Surat
            Keputusan Anggota Dewan Komisioner OJK Nomor KEP-45/D.04/2022 pada 4 Juli 2022.
          </p>

          {/* Logos */}
          <div className="flex gap-6 items-center">
            <img src="/ojk.png" alt="OJK Logo" className="h-12" />
            <img src="/iso.png" alt="ISO Logo" className="h-12" />
          </div>
        </div>

        {/* Right Stats */}
        <div className="mt-10 md:mt-0 z-10 relative text-white">
          <div className="space-y-6 text-right">
            <div>
              <p className="text-sm">Dana Tersalurkan</p>
              <p className="text-2xl font-bold text-[#4CD137]">Rp 2.250.000.000</p>
            </div>
            <div>
              <p className="text-sm">Pengembalian Dana</p>
              <p className="text-2xl font-bold text-[#4CD137]">Rp 900.000.000</p>
            </div>
            <div>
              <p className="text-sm">Rata-rata Realisasi ROI</p>
              <p className="text-2xl font-bold text-[#4CD137]">20%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Investment Project Section */}
      <section className="bg-white text-black py-12 px-6 text-center md:px-16">
        <h2 className="text-2xl font-bold text-center mb-2">
          Investasi Proyek Yang Sedang Berjalan
        </h2>
        <p className="text-center text-sm mb-10">
          Lihat daftar investasi bisnis terbaru yang sedang berlangsung dan temukan peluang
          untuk berinvestasi hari ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Project cards */}
          <div className="border p-4 rounded-xl bg-gray-100">
            <div className="text-xs font-bold text-center text-white bg-purple-700 rounded-full py-1 mb-2">
              Proyek Berakhir
            </div>
            <p className="font-semibold text-sm mb-1">
              PROYEK PENGADAAN MATERIAL DAN INSTALASI PERALATAN MITRA10 GARUT TAHUN 2024
            </p>
            <ul className="text-xs space-y-1 mt-2">
              <li>Dana Terkumpul: Rp 500.000.000</li>
              <li>Kebutuhan Modal: Rp 500.000.000</li>
              <li>Minimal Investasi: Rp 1.000.000</li>
              <li>Jangka Waktu: 2 Bulan</li>
              <li>Proyeksi ROI: 4% (24% p.a)</li>
            </ul>
          </div>

          <div className="border p-4 rounded-xl bg-green-100">
            <div className="text-xs font-bold text-center text-white bg-green-600 rounded-full py-1 mb-2">
              Proyek Berjalan
            </div>
            <p className="font-semibold text-sm mb-1">
              Jasa Pemeliharaan Perangkat Penunjang Infrastruktur Telekomunikasi Tower Bersama Group (TBG)
            </p>
            <ul className="text-xs space-y-1 mt-2">
              <li>Dana Terkumpul: Rp 850.000.000</li>
              <li>Kebutuhan Modal: Rp 850.000.000</li>
              <li>Minimal Investasi: Rp 1.000.000</li>
              <li>Jangka Waktu: 6 Bulan</li>
              <li>Proyeksi ROI: 9.5% (19.01% p.a)</li>
            </ul>
          </div>

          <div className="border p-4 rounded-xl bg-gray-100">
            <div className="text-xs font-bold text-center text-white bg-purple-700 rounded-full py-1 mb-2">
              Proyek Berakhir
            </div>
            <p className="font-semibold text-sm mb-1">
              Pembangunan Extention Bay Trafo Gardu Induk Balikpapan PT PLN Indonesia
            </p>
            <ul className="text-xs space-y-1 mt-2">
              <li>Dana Terkumpul: Rp 300.000.000</li>
              <li>Kebutuhan Modal: Rp 300.000.000</li>
              <li>Minimal Investasi: Rp 1.000.000</li>
              <li>Jangka Waktu: 2 Bulan</li>
              <li>Proyeksi ROI: 18% p.a</li>
            </ul>
          </div>

          <div className="border p-4 rounded-xl bg-gray-100">
            <div className="text-xs font-bold text-center text-white bg-purple-700 rounded-full py-1 mb-2">
              Proyek Berakhir
            </div>
            <p className="font-semibold text-sm mb-1">
              Renovasi Interior Resto M-Lounge
            </p>
            <ul className="text-xs space-y-1 mt-2">
              <li>Dana Terkumpul: Rp 400.000.000</li>
              <li>Kebutuhan Modal: Rp 400.000.000</li>
              <li>Minimal Investasi: Rp 1.000.000</li>
              <li>Jangka Waktu: 12 Bulan</li>
              <li>Proyeksi ROI: 18% p.a</li>
            </ul>
          </div>
        </div>

        <button className="bg-[#3C2B90] hover:bg-[#2d2171] text-white px-6 py-2 rounded-full font-semibold mb-10">
          Lihat Proyek Selengkapnya
        </button>

      </section>

      {/* What is Securities Crowd Funding Section */}
      <section className="bg-white text-black py-16 px-6 md:px-20 text-center">

        <div className="grid md:grid-cols-2 items-center gap-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Apa itu Securities <span className="text-[#4CD137]">Crowd</span>{" "}
            <span className="text-[#3C2B90]">Funding?</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong>Securities Crowd Funding</strong> merupakan langkah mudah bagi
            Pemodal untuk memiliki bisnis dengan cara cepat dan dijalankan oleh
            praktisi yang berpengalaman di bidangnya, tanpa harus repot membangun
            bisnis baru.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16">
          <h3 className="text-sm font-bold text-gray-500 mb-4">
            TELAH DILIPUT OLEH
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src="/logos/kompas.png" alt="Kompas" className="h-6" />
            <img src="/logos/detik.png" alt="Detik" className="h-6" />
            <img src="/logos/cnbc.png" alt="CNBC" className="h-6" />
            <img src="/logos/salaam.png" alt="Salaam Gateway" className="h-6" />
            <img src="/logos/kontan.png" alt="Kontan" className="h-6" />
            <img src="/logos/dailysocial.png" alt="Dailysocial" className="h-6" />
            <img src="/logos/bisnis.png" alt="Bisnis.com" className="h-6" />
          </div>

          <h3 className="text-sm font-bold text-gray-500 mt-10">DIDUKUNG OLEH</h3>
          {/* Add logos or sponsors here if needed */}
        </div>
      </section>


      {/* DIDUKUNG OLEH Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <img src="/logos/kominfo.png" alt="Kominfo" className="h-10" />
        <img src="/logos/danamon.png" alt="Danamon" className="h-10" />
        <img src="/logos/aludi.png" alt="ALUDI" className="h-10" />
        <img src="/logos/ksei.png" alt="KSEI" className="h-10" />
        <img src="/logos/pse.png" alt="PSE" className="h-10" />
        <img src="/logos/pefindo.png" alt="PEFINDO" className="h-10" />
        <img src="/logos/rapidssl.png" alt="RapidSSL" className="h-10" />
      </div>

    <section className="bg-gray-100 text-black py-16 px-6 md:px-20">
  <div className="text-center mb-10">
    <h2 className="text-2xl font-bold mb-2">FAQ</h2>
    <p className="text-sm text-gray-600">Pertanyaan yang sering ditanyakan</p>
  </div>

  {/* Tabs */}
  <div className="flex justify-center gap-4 mb-8">
    {(["Umum", "Pemodal", "Penerbit"] as const).map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
          setOpenIndex(null); // close all on tab switch
        }}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeTab === tab
            ? "bg-[#3C2B90] text-white"
            : "border border-[#3C2B90] text-[#3C2B90] hover:bg-[#3C2B90] hover:text-white"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
  <div className="max-w-3xl mx-auto space-y-4">
    {faqData[activeTab].map((item, index) => {
      const isOpen = openIndex === index;

      return (
        <div
          key={index}
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="group relative cursor-pointer bg-white rounded-lg border border-gray-300 shadow-sm transition hover:bg-gray-50"
        >
          <div className="flex justify-between items-center px-6 py-5">
            <span className="font-semibold text-base">{item.question}</span>
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>


          <div
            className={`px-6 text-sm text-gray-600 transition-all duration-300 ${
              isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
            } overflow-hidden`}
          >
            {item.answer}
          </div>
        </div>
      );
    })}
  </div>
</section>






      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="flex items-center bg-[#4CD137] text-white px-4 py-2 rounded-full shadow-lg">
          <img src="/whatsapp-icon.png" alt="WA" className="w-5 h-5 mr-2" />
          Butuh Bantuan?
        </button>
      </div>
    </main>
  );
};

export default Home;
