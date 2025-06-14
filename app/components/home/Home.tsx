'use client';

import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const faqData = {
    Umum: [
      {
        question: "Apa itu MyApp?",
        answer:
          "MyApp adalah Penyelenggara Layanan Urun Dana Berbasis Teknologi Informasi (Securities Crowdfunding) yang merupakan tempat bertemunya Pemodal dan Penerbit dalam satu wadah platform.",
      },
      {
        question: "Apa itu Efek?",
        answer:
          "Efek adalah surat berharga seperti saham, obligasi, atau surat utang lainnya yang dapat diperdagangkan di pasar modal.",
      },
      {
        question: "Apa itu Lembaga Penyimpanan dan Penyelesaian?",
        answer:
          "• Lembaga Penyimpanan dan Penyelesaian (LPP) adalah pihak yang menyelenggarakan kegiatan kustodian sentral bagi bank kustodian, perusahaan efek, dan pihak lain.\n • Fungsi LPP pada kegiatan Layanan Urun Dana antara lain: \n - Mengadministrasikan efek yang ditawarkan Penerbit \n - Menyelesaikan transaksi efek setelah terjadi pembelian oleh Pemodal \n - Mendistribusikan efek yang telah dibeli untuk dapat disimpan di rekening efek milik Pemodal yang ada Bank Kustodian \n • LPP dalam Layanan Urun Dana ini menggunakan Kustodian Sentral Efek Indonesia (KSEI).",
      },
    ],
    Pemodal: [
      {
        question: "Bagaimana cara menjadi Pemodal?",
        answer:
          "Anda bisa mendaftar di platform MyApp, melakukan verifikasi, dan mulai berinvestasi pada proyek yang tersedia.",
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
          "Penerbit adalah pihak yang mencari pendanaan melalui platform MyApp dengan menawarkan efek kepada publik.",
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
            MyApp
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
            Selamat Datang di MyApp
          </h1>
          <p className="text-white text-sm leading-relaxed">
            MyApp adalah Penyelenggara Layanan Urun Dana Berbasis Teknologi Informasi
            (Securities Crowdfunding) yang telah mendapatkan izin dari OJK melalui Surat
            Keputusan Anggota Dewan Komisioner OJK Nomor KEP-45/D.04/2022 pada 4 Juli 2022.
          </p>

          {/* Logos */}
          <div className="flex gap-6 items-center">
            {/* <img src="/ojk.png" alt="OJK Logo" className="h-12" />
            <img src="/iso.png" alt="ISO Logo" className="h-12" /> */}
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
        {/* <img
          src="/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        /> */}
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
            {/* <img src="/logos/kompas.png" alt="Kompas" className="h-6" />
            <img src="/logos/detik.png" alt="Detik" className="h-6" />
            <img src="/logos/cnbc.png" alt="CNBC" className="h-6" />
            <img src="/logos/salaam.png" alt="Salaam Gateway" className="h-6" />
            <img src="/logos/kontan.png" alt="Kontan" className="h-6" />
            <img src="/logos/dailysocial.png" alt="Dailysocial" className="h-6" />
            <img src="/logos/bisnis.png" alt="Bisnis.com" className="h-6" /> */}
          </div>

          <h3 className="text-sm font-bold text-gray-500 mt-10">DIDUKUNG OLEH</h3>
          {/* Add logos or sponsors here if needed */}
        </div>
      </section>


      {/* DIDUKUNG OLEH Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        {/* <img src="/logos/kominfo.png" alt="Kominfo" className="h-10" />
        <img src="/logos/danamon.png" alt="Danamon" className="h-10" />
        <img src="/logos/aludi.png" alt="ALUDI" className="h-10" />
        <img src="/logos/ksei.png" alt="KSEI" className="h-10" />
        <img src="/logos/pse.png" alt="PSE" className="h-10" />
        <img src="/logos/pefindo.png" alt="PEFINDO" className="h-10" />
        <img src="/logos/rapidssl.png" alt="RapidSSL" className="h-10" /> */}
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
              className={`px-6 py-2 relative cursor-pointer rounded-full font-semibold transition-all duration-300 ${
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
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
        
      </section>

      <section className="bg-white text-black px-6 md:px-20 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">DISCLAIMER</h2>
        <div className="max-h-[500px] relative  overflow-y-scroll p-6 border border-gray-300 rounded-lg space-y-4 text-justify text-sm leading-relaxed">
          <p className="text-1xl">
            PT Fintek Andalan Solusi Teknologi (“Fulusme”) adalah Penyelenggara Layanan Urun Dana melalui Penawaran Efek Berbasis Teknologi Informasi (Securities Crowdfunding) sebagaimana tunduk pada ketentuan Peraturan Otoritas Jasa Keuangan NOMOR 57/POJK.04/2020 tentang Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi atau Securities Crowdfunding (“POJK 57/2020”), yang telah berizin dan diawasi OJK, kami menyatakan bahwa :
          </p>
          <p>
            “OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM”;
          </p>
          <p>
            “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.”; dan
          </p>
          <p>
            PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI
          </p>
          <p>
            1. Anda perlu mempertimbangkan dengan cermat, teliti dan seksama setiap investasi bisnis yang akan Anda lakukan di Fulusme, berdasarkan pengetahuan, keilmuan serta pengalaman yang Anda miliki dalam hal keuangan dan bisnis. Dibutuhkan kajian/penelaahan laporan keuangan, target tujuan investasi, kemampuan analisis, serta pertimbangan risiko yang akan Anda ambil.
          </p>
          <p>
            Anda menyadari bahwa setiap bisnis pasti memiliki risikonya masing-masing. Untuk itu, dengan berinvestasi melalui Fulusme, Anda sudah mengerti akan segala resiko yang dapat terjadi di kemudian hari, seperti penurunan performa bisnis, hingga kebangkrutan dari bisnis yang anda investasikan tersebut.
          </p> 
          <p>
            Fulusme TIDAK BERTANGGUNG JAWAB terhadap risiko kerugian dan gugatan hukum serta segala bentuk risiko lain yang timbul dikemudian hari atas hasil investasi bisnis yang anda tentukan sendiri saat ini. Beberapa risiko yang dapat terjadi saat Anda berinvestasi yaitu :
          </p>
          <div>
            <p className="font-bold text-md">Risiko Usaha</p> 
            <p className="my-1"> Risiko adalah suatu hal yang tidak dapat dihindari dalam suatu usaha/bisnis. Beberapa risiko bisa terjadi karena berubahnya permintaan pasar dan proyeksi keuangan bisnis bisa saja tidak sesuai dengan proposal bisnis ketika dijalankan </p>
          </div>
          <div>
            <p className="font-bold text-md">Kerugian Investasi</p> 
            <p className="my-1">Setiap investasi memiliki tingkat risiko yang bervariasi seperti tidak terkumpulnya dana investasi yang dibutuhkan selama proses pengumpulan dana atau proyek yang dijalankan tidak menghasilkan keuntungan sesuai yang diharapkan.</p>
          </div>
          <div>
            <p className="font-bold text-md">Kekurangan Likuiditas</p> 
            <p className="my-1">Investasi Anda di suatu Penerbit, mungkin saja tidak likuid dan tidak mudah dijual kembali karena Efek yang ditawarkan tidak terdaftar di bursa umum secara publik. Ini berarti bahwa Anda mungkin tidak dapat dengan mudah menjual Efek Anda di bisnis tertentu atau Anda mungkin tidak dapat menemukan pembeli sebelum berakhirnya jangka waktu investasi di pasar sekunder.</p>
          </div>
          <div>
            <p className="font-bold text-md">Kelangkaan Pembagian Dividen</p> 
            <p className="my-1">Setiap Pemodal yang ikut berinvestasi berhak untuk mendapatkan dividen sesuai dengan jumlah kepemilikan Efek. Dividen (imbal hasil) ini akan diberikan oleh Penerbit dengan jadwal pembagian yang telah disepakati di awal dan dapat dicek di detail bisnis. Kelangkaan pembagian dividen bahkan gagal bayar dapat terjadi karena kinerja bisnis yang Anda investasikan bisa jadi kurang berjalan dengan baik.</p>
          </div>
          <div>
            <p className="font-bold text-md">Dilusi Kepemilikan Efek</p> 
            <p className="my-1">Dilusi kepemilikan Efek adalah penurunan persentase kepemilikan Efek yang terjadi karena bertambahnya total jumlah Efek yang beredar, dimana Investor yang bersangkutan tidak ikut membeli Efek yang baru diterbitkan tersebut. Penerbit dapat menerbitkan Efek baru jika jumlah penawaran yang diajukan masih dibawah batas maksimum. Jika Penerbit mengadakan urun dana lagi dan terjadi penerbitan Efek baru, maka Fulusme akan membuka bisnis tersebut di website Fulusme.id dan menginformasikan kepada semua pemegang Efek.</p>
          </div>
          <div>
            <p className="font-bold text-md">Perubahan Status Efek Syariah</p> 
            <p className="my-1">Risiko yang timbul adanya Penerbit melanggar atau tidak lagi memenuhi kriteria Efek Syariah. Penerbit yang listing di platform Fulusme sudah melalui proses screening dari tim analis bisnis Fulusme. Penerbit yang dipilih berdasarkan rekam jejak bisnis yang baik dan memenuhi standar dalam kesesuaian kriteria prinsip syariah yang diputuskan dalam persetujuan akhir oleh Dewan Pengawas Syariah. Dalam hal ini Fulusme sebagai penyelenggara akan memonitoring kepada Penerbit secara berkala.</p>
          </div>
          <div>
            <p className="font-bold text-md">Kegagalan Sistem Elektronik</p> 
            <p className="my-1">Fulusme telah menerapkan sistem teknologi informasi dan keamanan data yang handal. Namun bagaimanapun juga tetap memungkinkan jika terjadi gangguan sistem teknologi informasi dan kegagalan sistem, jika ini terjadi maka akan menyebabkan aktivitas bisnis Anda di platform Fulusme menjadi tertunda.</p>
            <p className="my-1">2. Semua materi terkait pilihan investasi yang tercantum dalam situs ini sebatas informasi dan tidak dapat dianggap sebagai nasihat, dukungan, ataupun rekomendasi investasi. Perusahaan sebagai penyedia layanan urun dana hanya terbatas pada fungsi administratif. Pemodal harus sepenuhnya menyadari adanya risiko kelangkaan pembayaran dividen di kemudian hari dan risiko-risiko lainnya </p> 
            <p className="my-1">3. Penyelenggara dengan persetujuan dari masing-masing Pengguna (Pemodal dan / atau Penerbit) mengakses, memperoleh, menyimpan, mengelola, dan / atau menggunakan data pribadi Pengguna ("Pemanfaatan Data") pada atau di dalam benda, perangkat elektronik (termasuk smartphone atau telepon seluler), perangkat keras (hardware) maupun lunak (software), dokumen elektronik, aplikasi atau sistem elektronik milik Pengguna atau yang dikuasai Pengguna, dengan memberitahukan tujuan, batasan, dan mekanisme Pemanfaatan Data tersebut kepada Pengguna yang bersangkutan sebelum memperoleh persetujuan yang dimaksud sesuai kebutuhan layanan urun dana</p> 
            <p className="my-1">4. Semua materi terkait pilihan investasi yang tercantum dalam situs ini sebatas informasi dan tidak dapat dianggap sebagai nasihat, dukungan, ataupun rekomendasi investasi. Perusahaan sebagai penyedia layanan urun dana hanya terbatas pada fungsi administratif. Pemodal harus sepenuhnya menyadari adanya risiko kelangkaan pembayaran dividen di kemudian hari dan risiko-risiko lainnya </p> 
            <p className="my-1">5. Fulusme bertindak sebagai Penyelenggara Layanan Urun Dana, bukan sebagai pihak yang menjalankan kegiatan usaha atau proyek Penerbit. Otoritas Jasa Keuangan bertindak sebagai regulator dan pemberi izin, pengawas Penyelenggara, bukan sebagai penjamin investasi.</p>
          </div>
        </div>
      </section>


      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="flex items-center bg-[#4CD137] text-white px-4 py-2 rounded-full shadow-lg">
          {/* <img src="/whatsapp-icon.png" alt="WA" className="w-5 h-5 mr-2" /> */}
          Butuh Bantuan?
        </button>
      </div>
    </main>
  );
};

export default Home;
