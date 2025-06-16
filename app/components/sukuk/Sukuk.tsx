'use client';

import React, { useState } from "react";

const Sukuk: React.FC = () => {
  return (
    <section className="py-28 px-4 md:px-12">
 
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <div className="relative rounded-xl overflow-hidden">
                    <img
                    src="/images/tower.jpg"
                    alt="Tower Maintenance"
                    className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Efek Bersifat Utang
                    </span>
                    <span className="bg-indigo-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Proyek Berakhir
                    </span>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Tentang Bisnis</h2>
                    <p className="text-sm mb-4">
                    Penerbitan Efek Bersifat Utang ini akan digunakan oleh <strong>PT PAMENGKANG JAGAT ABADI</strong> untuk penguatan modal kerja dalam rangka proyek Jasa Pemeliharaan Perangkat Penunjang Infrastruktur Telekomunikasi Tower Bersama Group (TBG).
                    </p>
                    <ul className="list-disc list-inside text-sm mb-4">
                    <li>JABODETABEK INNER</li>
                    <li>JABODETABEK OUTER SERANG</li>
                    <li>JABODETABEK OUTER TANGERANG</li>
                    </ul>
                    <p className="text-sm mb-4">
                    Pekerjaan dilakukan sejak 1 Januari 2024 s/d 31 Desember 2024
                    </p>
                    <p className="text-sm">
                    <strong>PT PAMENGKANG JAGAT ABADI</strong> didirikan pada tahun 2004, merupakan perusahaan kontraktor sipil dan pemeliharaan tower yang menyediakan solusi terintegrasi.
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 shadow-md space-y-2">

                <div className="bg-white rounded-lg p-2">
                    <h3 className="text-xl text-black font-bold">
                        Jasa Pemeliharaan Perangkat Penunjang Infrastruktur Telekomunikasi Tower Bersama Group (TBG)
                    </h3>
                    <div className="my-2">
                        <div className="flex flex-wrap justify-between">
                            <p className="text-xs">Perusahaan</p> 
                            <p className="text-sm">PT PAMENGKANG JAGAT ABADI</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <p className="text-xs">Kode Efek</p>
                            <p className="text-sm">PPJA1</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <p className="text-xs">Jenis Akad</p>
                            <p className="text-sm">Efek Bersifat Utang</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-2 rounded-lg space-y-1">
                    <div className="relative w-[90%] h-4 bg-purple-200 rounded-full my-2">
                        <div className="absolute top-0 left-0 h-4 bg-[#3E268D] rounded-full" style={{ width: '100%' }}></div>
                        <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 translate-x-full bg-green-500 text-white text-xs font-bold px-2 rounded-full shadow">
                            100%
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <p className="text-xs font-bold">Dana Terkumpul</p>
                        <p className="text-xs font-bold">Rp 850.000.000</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-2 flex justify-evenly text-xs text-center py-2">
                    <span className="text-black font-bold">Prelisting</span>
                    <span className="text-black font-bold">Listing</span>
                    <span className="text-black font-bold">Pendanaan Terpenuhi</span>
                    <span className="text-black font-bold">Berjalan</span>
                </div>

                <div className="bg-white p-2 rounded-lg">
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs"> Kategori Bisnis</p> 
                        <p className="text-xs">KONTRAKTOR</p> 
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs">Minimal Investasi:</p>
                        <p className="text-xs">Rp 1.000.000</p> 
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs">Harga Unit:</p> 
                        <p className="text-xs">Rp 100.000</p> 
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs"> Jumlah Unit </p>  
                        <p className="text-xs">8500</p>
                    </div>
                    <div className="flex flex-wrap my-2 justify-between"> 
                       <p className="text-xs"> Total Unit (Rp) </p>
                       <p className="text-xs"> Rp 850.000.000 </p> 
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs">Periode Pengembalian:</p>
                        <p className="text-xs">Bulan ke-4, ke-5, ke-6</p>
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs">Tenor:</p>
                        <p className="text-xs">6 Bulan</p> 
                    </div>
                    <div className="flex flex-wrap my-2 justify-between">
                        <p className="text-xs">ROI (Proyeksi):</p> 
                        <p className="text-xs">9.5% (19.01% p.a)</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-evenly gap-4 mt-4 text-sm">
                    <button className="bg-white text-black border px-4 py-2 rounded-md">Simulasi</button>
                    <button className="bg-white text-black border px-4 py-2 rounded-md">Bagikan</button>
                    <button className="bg-white text-black border px-4 py-2 rounded-md">Proposal</button>
                    <button className="bg-white text-black border px-4 py-2 rounded-md">Lokasi</button>
                </div>

                <button className="w-full bg-gray-300 text-white font-semibold py-2 rounded-md mt-4 cursor-not-allowed">
                    Beli Efek
                </button>

                <p className="text-xs text-center mt-2">
                    Butuh Pertanyaan? <a href="#" className="text-blue-600 font-semibold">Hubungi Kami</a>
                </p>
            </div>
        </div>
    </section>
  );
};

export default Sukuk;
