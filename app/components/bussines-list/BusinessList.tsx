'use client';

import React, { useState } from 'react';
import Navbar from '@components/navbar/Navbar';
import { X } from "lucide-react";

type Project = {
  image: string;
  alt: string;
  status: 'Proyek Berakhir' | 'Proyek Berjalan';
  statusColor: 'purple' | 'green';
  title: string;
  danaTerkumpul: string;
  kebutuhanModal: string;
  minimalInvestasi: string;
  jangkaWaktu: string;
  proyeksiROI: string;
};

const projects: Project[] = [
  {
    image: '/images/mitra.jpg',
    alt: 'Mitra10 Garut',
    status: 'Proyek Berakhir',
    statusColor: 'purple',
    title: 'PROYEK PENGADAAN MATERIAL DAN INSTALASI PERALATAN MITRA10 GARUT TAHUN 2024',
    danaTerkumpul: 'Rp 500.000.000',
    kebutuhanModal: 'Rp 500.000.000',
    minimalInvestasi: 'Rp 1.000.000',
    jangkaWaktu: '2 Bulan',
    proyeksiROI: '4% (24% p.a)',
  },
  {
    image: '/images/tower.jpg',
    alt: 'Tower Bersama Group',
    status: 'Proyek Berjalan',
    statusColor: 'green',
    title: 'Jasa Pemeliharaan Perangkat Penunjang Infrastruktur Telekomunikasi Tower Bersama Group (TBG)',
    danaTerkumpul: 'Rp 850.000.000',
    kebutuhanModal: 'Rp 850.000.000',
    minimalInvestasi: 'Rp 1.000.000',
    jangkaWaktu: '6 Bulan',
    proyeksiROI: '9.5% (19.01% p.a)',
  },
  {
    image: '/images/pln.jpg',
    alt: 'PLN Balikpapan',
    status: 'Proyek Berakhir',
    statusColor: 'purple',
    title: 'Pembangunan Extention Bay Trafo Gardu Induk Balikpapan PT PLN Indonesia',
    danaTerkumpul: 'Rp 300.000.000',
    kebutuhanModal: 'Rp 300.000.000',
    minimalInvestasi: 'Rp 1.000.000',
    jangkaWaktu: '2 Bulan',
    proyeksiROI: '18% p.a',
  },
  {
    image: '/images/resto.jpg',
    alt: 'Renovasi Resto M-Lounge',
    status: 'Proyek Berakhir',
    statusColor: 'purple',
    title: 'Renovasi Interior Resto M-Lounge',
    danaTerkumpul: 'Rp 400.000.000',
    kebutuhanModal: 'Rp 400.000.000',
    minimalInvestasi: 'Rp 1.000.000',
    jangkaWaktu: '12 Bulan',
    proyeksiROI: '18% p.a',
  },
  {
    image: '/images/cv.jpg',
    alt: 'Pulsa Data Telekomunikasi',
    status: 'Proyek Berakhir',
    statusColor: 'purple',
    title: 'Pembelian Pulsa Data Operator Telekomunikasi',
    danaTerkumpul: 'Rp 200.000.000',
    kebutuhanModal: 'Rp 200.000.000',
    minimalInvestasi: 'Rp 1.000.000',
    jangkaWaktu: '2 Bulan',
    proyeksiROI: '22% p.a',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const bgColor = project.statusColor === 'purple' ? 'bg-purple-900 text-purple-800' : 'bg-green-700 text-green-700';

  return (
    <div className="rounded-xl overflow-hidden shadow border">
      <div className="relative h-40">
        <img src={project.image} alt={project.alt} className="object-cover w-full h-full" />
        <div className={`absolute inset-0 ${project.statusColor === 'purple' ? 'bg-purple-900' : 'bg-green-700'} bg-opacity-60`} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className={`bg-white ${bgColor} text-xs font-bold px-4 py-1 rounded-full shadow`}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <p className="font-semibold text-sm text-start mb-2">{project.title}</p>
        <ul className="text-xs my-4 space-y-1">
          <li className="flex justify-between font-bold">
            <span>Dana Terkumpul</span>
            <span>{project.danaTerkumpul}</span>
          </li>
          <li className="flex justify-between">
            <span>Kebutuhan Modal</span>
            <span>{project.kebutuhanModal}</span>
          </li>
          <li className="flex justify-between">
            <span>Minimal Investasi</span>
            <span>{project.minimalInvestasi}</span>
          </li>
          <li className="flex justify-between">
            <span>Jangka Waktu</span>
            <span>{project.jangkaWaktu}</span>
          </li>
          <li className="flex justify-between">
            <span>Proyeksi ROI</span>
            <span>{project.proyeksiROI}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const BussinesList: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <Navbar />

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
                    <button
                    onClick={closeModal}
                    className="absolute top-4 left-4 text-gray-500 hover:text-black"
                    >
                    <X size={20} />
                    </button>
                    <div className="text-center text-black font-bold text-lg mb-4">Urutkan</div>
                    <div className="flex flex-col gap-3">
                    <button className="bg-gray-100 text-black py-2 rounded-md">Nama A - Z</button>
                    <button className="bg-gray-100 text-black py-2 rounded-md">Nama Z - A</button>
                    <button className="bg-gray-100 text-black py-2 rounded-md">Nilai Rendah ke Tinggi</button>
                    <button className="bg-gray-100 text-black py-2 rounded-md">Nilai Tinggi ke Rendah</button>
                    <button
                        onClick={closeModal}
                        className="text-sm text-gray-500 mt-2 underline"
                    >
                        Reset
                    </button>
                    </div>
                </div>
                </div>
            )}

            <section className="bg-white relative text-black py-12 px-6 text-center md:px-16 pt-32 scroll-mt-32">
                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 text-left">
                    <div className="relative w-full md:w-1/4">
                        <input
                        type="text"
                        placeholder="Cari Bisnis..."
                        className="w-full py-3 pl-5 pr-10 text-sm rounded-full bg-[#F6F6FF] focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</div>
                    </div>

                    <button onClick={openModal} className="flex items-center gap-2 text-black border px-4 py-2 rounded-full hover:bg-gray-100 transition">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
                        />
                        </svg>
                        <span className="text-sm font-medium">Filter</span>
                    </button>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default BussinesList;
