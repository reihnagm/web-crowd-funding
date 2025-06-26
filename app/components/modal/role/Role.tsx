"use client";

import React, { useState } from "react";

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [nameBank, setNameBank] = useState("");
  const [noRekening, setNoRekening] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [position, setPosition] = useState("");
  const [lastEducation, setLastEducation] = useState("");
  const [work, setWork] = useState("");
  const [noKtp, setNoKtp] = useState("");
  const [noTelp, setNoTlp] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"select" | "penerbit" | "pemodal">("select");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl overflow-y-scroll h-[700px] max-w-3xl w-full relative flex flex-col md:flex-row">
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
          <div className="py-2 px-8 w-full flex flex-col">
            <div className="my-4">
              <div className="center text-center space-y-2">
                <h4 className="text-black text-2xl center block">
                  Isi Data Sebagai Penerbit
                </h4>
                <p className="text-sm text-gray-500">
                  Untuk memastikan kelancaran proses verifikasi dan layanan yang
                  optimal, kami <br /> mengajak Anda untuk melengkapi seluruh
                  data secara jujur, benar, dan akurat.
                </p>
              </div>
              <div className="space-y-4 my-4">
                <div className="flex flex-wrap gap-4">
                  {/* Nama */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Data Perusahaan
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Data Perusahaan"
                    />
                  </div>

                  {/* Nama Perusahaan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      value={noKtp}
                      onChange={(e) => setNoKtp(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nomor Induk Perusahaan"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Nomor Induk Perusahaan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nomor Induk Perusahaan
                    </label>
                    <input
                      type="text"
                      value={accountOwner}
                      onChange={(e) => setAccountOwner(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nomor Induk Perusahaan"
                    />
                  </div>

                  {/* Gender */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Akta Pendirian Perusahaan
                    </label>
                    <input
                      type="text"
                      value={accountOwner}
                      onChange={(e) => setAccountOwner(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Akta Pendirian Perusahaan"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* SK Kumham */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      SK Kumham
                    </label>
                    <input
                      type="text"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="SK Kumham"
                    />
                  </div>
                  {/* Pendidikan Terakhir */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Akta Perubahan Terahkir
                    </label>
                    <input
                      type="text"
                      value={lastEducation}
                      onChange={(e) => setLastEducation(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Akta Perubahan Terahkir"
                    />
                  </div>
                </div>

                {/* Alamat Perusahaan */}

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Alamat Perusahaan
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Alamat Perusahaan"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* NPWP Perusahaan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      NPWP Perusahaan
                    </label>
                    <input
                      type="text"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="NPWP Perusahaan"
                    />
                  </div>
                  {/* Jumlah Karyawan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jumlah Karyawan
                    </label>
                    <input
                      type="text"
                      value={lastEducation}
                      onChange={(e) => setLastEducation(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jumlah Karyawan"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Struktur Pemodalan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Struktur Pemodalan
                    </label>
                    <input
                      type="text"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Struktur Pemodalan"
                    />
                  </div>
                  {/* Laporan Keuangan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Laporan Keuangan
                    </label>
                    <input
                      type="text"
                      value={lastEducation}
                      onChange={(e) => setLastEducation(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Laporan Keuangan"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-black my-2 font-semibold text-sm">
                    Susunan Manajemen
                  </h3>
                  <div className="my-2">
                    <div className="flex flex-wrap gap-4">
                      {/* Komisaris */}
                      <div className="flex-1">
                        <p className="block text-sm font-medium text-gray-500 mb-1">
                          Komisaris
                        </p>
                      </div>
                      {/* Direksi */}
                      <div className="flex-1">
                        <p className="block text-sm font-medium text-gray-500 mb-1">
                          Direksi
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      {/* Nama Komisaris */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Nama
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Nama Komisaris"
                        />
                      </div>
                      {/* Nama Direksi */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Nama
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Nama Direksi"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {/* Jabatan Komisaris */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Jabatan
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Struktur Pemodalan"
                        />
                      </div>
                      {/* Jabatan Direksi */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Jabatan
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Laporan Keuangan"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {/* KTP Komisaris */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          KTP
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="KTP"
                        />
                      </div>
                      {/* KTP Direksi */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          KTP
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="KTP"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {/* NPWP Komisaris */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          NPWP
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="NPWP"
                        />
                      </div>
                      {/* NPWP Direksi */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          NPWP
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="NPWP"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "pemodal" && (
          <div className="py-2 px-8 w-full flex flex-col">
            <div className="my-4">
              <div className="center text-center space-y-2">
                <h4 className="text-black text-2xl center block">
                  Isi Data Sebagai Pemodal
                </h4>
                <p className="text-sm text-gray-500">
                  Untuk memastikan kelancaran proses verifikasi dan layanan yang
                  optimal, kami <br /> mengajak Anda untuk melengkapi seluruh
                  data secara jujur, benar, dan akurat.
                </p>
              </div>
              <h3 className="text-black my-4 font-semibold text-sm">
                Informasi Pribadi
              </h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  {/* Nama */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nama"
                    />
                  </div>

                  {/* KTP */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      KTP
                    </label>
                    <input
                      type="text"
                      value={noKtp}
                      onChange={(e) => setNoKtp(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="KTP"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Tempat Tanggal Lahir */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Tempat Tanggal Lahir
                    </label>
                    <input
                      type="text"
                      value={accountOwner}
                      onChange={(e) => setAccountOwner(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tempat Tanggal Lahir"
                    />
                  </div>

                  {/* Gender */}
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
                  {/* Status Pernikahan */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Status Pernikahan
                    </label>
                    <input
                      type="text"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Status Pernikahan"
                    />
                  </div>
                  {/* Pendidikan Terakhir */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Pendidikan Terakhir
                    </label>
                    <input
                      type="text"
                      value={lastEducation}
                      onChange={(e) => setLastEducation(e.target.value)}
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
                      value={work}
                      onChange={(e) => setWork(e.target.value)}
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
                      value={noTelp}
                      onChange={(e) => setNoTlp(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    {/* Nama Bank */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nama Bank
                      </label>
                      <input
                        type="text"
                        value={nameBank}
                        onChange={(e) => setNameBank(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Bank"
                      />
                    </div>
                    {/* Nomor Rekening */}
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
                    {/* Nama Pemilik Rekening */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nama Pemilik Rekening
                      </label>
                      <input
                        type="text"
                        value={accountOwner}
                        onChange={(e) => setAccountOwner(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Pemilik Rekening"
                      />
                    </div>
                    {/* Cabang Bank */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Cabang Bank
                      </label>
                      <input
                        type="text"
                        value={bankBranch}
                        onChange={(e) => setBankBranch(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Cabang Bank"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Informasi Pekerjaan */}

              <div className="my-4">
                <h3 className="text-black mb-2 font-semibold text-sm">
                  Informasi Pekerjaan
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    {/* Nama Perusahaan */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Perusahaan"
                      />
                    </div>
                    {/* Jabatan */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Jabatan
                      </label>
                      <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Jabatan"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Alamat Perusahaan
                    </label>
                    <input
                      type="text"
                      value={companyAddress}
                      onChange={(e) => setCompanyAddress(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Alamat Sesuai KTP dan Alamat Domisili"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Penghasilan Bulanan
                    </label>
                    <input
                      type="text"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Penghasilan Bulanan"
                    />
                  </div>
                </div>
              </div>

              {/* Profil Risiko */}

              <div className="my-4">
                <h3 className="text-black mb-2 font-semibold text-sm">
                  Profil Risiko
                </h3>
                <div className="space-y-6">
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
              </div>

              <div className="my-8">
                <h3 className="text-black mb-2 font-semibold text-sm">
                  Pernyataan dan Tanda Tangan
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    {/* Pernyataan Kebenaran Data */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Pernyataan Kebenaran Data
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Pernyataan Kebenaran Data"
                      />
                    </div>
                    {/* Pernyataan Memahami Risiko Investasi */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Pernyataan Memahami Risiko Investasi
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Pernyataan Memahami Risiko Investasi"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Tanda Tangan Pemohon
                    </label>
                    <textarea
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tanda Tangan Pemohon"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-black mb-2 font-semibold text-sm">
                      Lampiran Data
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Dokumen 1 */}
                      <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50">
                        <span>📄</span>
                        <span className="text-sm text-gray-600">
                          Upload dokumen Fotokopi KTP
                        </span>
                        <input type="file" className="hidden" />
                      </label>

                      {/* Dokumen 2 */}
                      <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50">
                        <span>📄</span>
                        <span className="text-sm text-gray-600">
                          Upload dokumen NPWP (jika ada)
                        </span>
                        <input type="file" className="hidden" />
                      </label>

                      {/* Dokumen 3 */}
                      <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50">
                        <span>📄</span>
                        <span className="text-sm text-gray-600">
                          Upload dokumen Rekening Koran
                        </span>
                        <input type="file" className="hidden" />
                      </label>

                      {/* Dokumen 4 */}
                      <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50">
                        <span>📄</span>
                        <span className="text-sm text-gray-600">
                          Upload dokumen Lainnya (Optional)
                        </span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>

                    {/* Tombol Submit */}
                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 font-semibold"
                      >
                        Submit Data
                      </button>
                    </div>
                  </div>
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
