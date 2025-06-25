"use client";

import React, { useState } from "react";

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose }) => {
  const [namaRekening, setNamaRekening] = useState("");
  const [noRekening, setNoRekening] = useState("");
  const [noKtp, setNoKtp] = useState("");
  const [pemilikRekening, setPemilikRekening] = useState("");
  const [step, setStep] = useState<"select" | "penerbit" | "pemodal">("select");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl overflow-scroll h-[90%] max-w-2xl w-full relative flex flex-col md:flex-row">
        {step !== "select" && (
          <button
            onClick={() => setStep("select")}
            className="absolute top-4 left-4 text-gray-600"
          >
            ←
          </button>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ×
        </button>

        {step === "select" && (
          <>
            <div className="p-8 md:w-1/2 bg-white z-20">
              <h2 className="text-3xl text-black font-bold mb-6">
                Pilih Peran Anda <br /> untuk Memulai
              </h2>

              <div className="space-y-6">
                <div
                  onClick={() => setStep("penerbit")}
                  className="border border-purple-600 rounded-xl p-4 hover:bg-purple-50 cursor-pointer"
                >
                  <h3 className="text-purple-700 font-bold text-lg">
                    Penerbit
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Anda tertarik mendukung dan membiayai ide bisnis yang
                    menjanjikan. Temukan proyek potensial, kelola investasi
                    Anda, dan bantu wujudkan inovasi.
                  </p>
                </div>

                <div
                  onClick={() => setStep("pemodal")}
                  className="border border-green-600 rounded-xl p-4 hover:bg-green-50 cursor-pointer"
                >
                  <h3 className="text-green-700 font-bold text-lg">Pemodal</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Anda memiliki ide atau bisnis yang siap dikembangkan. Cari
                    dukungan finansial dan bangun koneksi dengan pemodal.
                  </p>
                </div>
              </div>

              <p className="text-1xl text-gray-500 mt-6">
                Pilihan Anda akan menentukan alur dan fitur yang tersedia dalam
                platform.
              </p>
            </div>

            <div className="md:w-1/2 relative hidden md:block">
              <img
                src="/images/modal-auth.png"
                alt="Professional Woman"
                className="object-cover h-full w-full"
              />
            </div>
          </>
        )}

        {step === "penerbit" && (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">
              Isi Data Sebagai Penerbit
            </h2>
          </div>
        )}

        {step === "pemodal" && (
          <div className="py-8 w-full flex flex-col items-center">
            <div className="my-4">
              <h3 className="text-black mb-2 font-semibold text-sm">
                Informasi Pribadi
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      value={namaRekening}
                      onChange={(e) => setNamaRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      KTP
                    </label>
                    <input
                      type="text"
                      value={noRekening}
                      onChange={(e) => setNoRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="KTP"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Tempat Tanggal Lahir
                    </label>
                    <input
                      type="text"
                      value={pemilikRekening}
                      onChange={(e) => setPemilikRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tempat Tanggal Lahir"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col flex-wrap gap-4">
                      <div>
                        <label className="block text-gray-500 text-sm font-medium">
                          Jenis Kelamin
                        </label>
                      </div>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="gender"
                            value="L"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Pria</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="gender"
                            value="P"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Wanita</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Status Pernikahan
                    </label>
                    <input
                      type="text"
                      value={pemilikRekening}
                      onChange={(e) => setPemilikRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Status Pernikahan"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Pendidikan Terahkir
                    </label>
                    <input
                      type="text"
                      value={pemilikRekening}
                      onChange={(e) => setPemilikRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Pendidikan Terakhir"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Pekerjaan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Pekerjaan
                    </label>
                    <input
                      type="text"
                      value={pemilikRekening}
                      onChange={(e) => setPemilikRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Pekerjaan"
                    />
                  </div>

                  {/* No Telp */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      No Tlp
                    </label>
                    <input
                      type="text"
                      value={pemilikRekening}
                      onChange={(e) => setPemilikRekening(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="No Tlp"
                    />
                  </div>
                </div>

                {/* Alamat Sesuai KTP dan Alamat Domisili */}

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Alamat Sesuai KTP dan Alamat Domisili
                  </label>
                  <input
                    type="text"
                    value={pemilikRekening}
                    onChange={(e) => setPemilikRekening(e.target.value)}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Alamat Sesuai KTP dan Alamat Domisili"
                  />
                </div>

                {/* Alamat Email Aktif */}

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Alamat Email Aktif
                  </label>
                  <input
                    type="text"
                    value={pemilikRekening}
                    onChange={(e) => setPemilikRekening(e.target.value)}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Alamat Email Aktif"
                  />
                </div>
              </div>

              {/* Information Bank */}

              <div className="my-4">
                <h3 className="text-black mb-2 font-semibold text-sm">
                  Informasi Bank
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nama Bank
                      </label>
                      <input
                        type="text"
                        value={namaRekening}
                        onChange={(e) => setNamaRekening(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Bank"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nomor Rekening
                      </label>
                      <input
                        type="text"
                        value={noRekening}
                        onChange={(e) => setNoRekening(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nomor Rekening"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nama Pemilik Rekening
                      </label>
                      <input
                        type="text"
                        value={pemilikRekening}
                        onChange={(e) => setPemilikRekening(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Pemilik Rekening"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Cabang Bank
                      </label>
                      <input
                        type="text"
                        value={pemilikRekening}
                        onChange={(e) => setPemilikRekening(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Masukkan cabang bank"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profil Risiko */}

              <div className="my-4">
                <h3 className="text-black mb-2 font-semibold text-sm">
                  Profil Risiko
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Pilih tujuan
                      </label>
                      <select className="w-full bg-white px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="pendapatan">Pendapatan Tambahan</option>
                        <option value="jangka-panjang">
                          Pertumbuhan Jangka Panjang
                        </option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <label className="block text-gray-500 text-sm font-medium">
                          Toleransi Resiko
                        </label>
                      </div>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="risk"
                            value="rendah"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Rendah</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="risk"
                            value="sedang"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Sedang</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="risk"
                            value="tinggi"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Tinggi</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <label className="block text-gray-500 text-sm font-medium">
                          Pengalaman Investasi
                        </label>
                      </div>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="experience"
                            value="tidak_ada"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Tidak ada</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="experience"
                            value="kurang"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Kurang</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="experience"
                            value="cukup"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Cukup</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="experience"
                            value="banyak"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Banyak</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pengalaman Investasi
                    </label>
                    <select className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Pilih pengalaman</option>
                      <option value="Tidak Ada">Tidak Ada</option>
                      <option value="Kurang">Kurang</option>
                      <option value="Cukup">Cukup</option>
                      <option value="Banyak">Banyak</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pengetahuan tentang Pasar Modal
                    </label>
                    <select className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Pilih pengalaman</option>
                      <option value="Tidak Ada">Tidak Ada</option>
                      <option value="Kurang">Kurang</option>
                      <option value="Cukup">Cukup</option>
                      <option value="Banyak">Banyak</option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleModal;
