"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { API_BACKEND } from "@/app/utils/constant";

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
}

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    placeOfBirth: z.string(),
    gender: z.string(),
    maritalStatus: z.string(),
    companyName: z.string(),
    companyAddress: z.string(),
    monthlyIncome: z.string(),
    position: z.string(),
    lastEducation: z.string(),
    work: z.string(),
    noTelp: z.string(),
    accountOwner: z.string(),
    bankBranch: z.string(),
    address: z.string(),
    email: z.string(),
    tep: z.string(),
    npwp: z.string(),
    deedOfIncorp: z.string(),
    numberOfEmploye: z.string(),
    capitalStruktur: z.string(),
    financialStatements: z.string(),
    nameDirection: z.string(),
    nameCommissioner: z.string(),
    noKtp: z.string(),
    nameBank: z.string(),
    noRekening: z.string(),
    experience: z.string(),
    risk: z.string(),
    dokumen1: z.any(),
    dokumen2: z.any(),
    dokumen3: z.any(),
    dokumen4: z.any(),
    password: z.any(),
});

type FormValues = {
    name: string;
    placeOfBirth: string;
    gender: string;
    maritalStatus: string;
    companyName: string;
    companyAddress: string;
    monthlyIncome: string;
    position: string;
    lastEducation: string;
    work: string;
    noTelp: string;
    accountOwner: string;
    bankBranch: string;
    address: string;
    email: string;
    tep: string;
    npwp: string;
    deedOfIncorp: string;
    numberOfEmploye: string;
    capitalStruktur: string;
    financialStatements: string;
    nameDirection: string;
    nameCommissioner: string;
    noKtp: string;
    nameBank: string;
    noRekening: string;
    experience: string;
    risk: string;
    dokumen1: any;
    dokumen2: any;
    dokumen3: any;
    dokumen4: any;
    password: string;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose }) => {
  const [workDesc, setWorkDesc] = useState("");
  const [step, setStep] = useState<"select" | "penerbit" | "pemodal">("select");
  const [linkKtp, setLinkKtp] = useState("")
  const [linKnpwp, setLinkNpwp] = useState("")
  const [linkRek, setLinkRek] = useState("")
  const [linkOptional, setLinkOptional] = useState("")

  const onSubmitInvestor: SubmitHandler<FormValues> = async (data) => {
    console.log("Data : " + JSON.stringify(data));

    try {
      const res = await axios.post(`${API_BACKEND}/api/v1/auth/register`, {
        "fullname": data.name,
        "email": data.email,
        "phone": data.noTelp,
        "role": "2",
        "password": data.password,
        "investor": {
            "ktp": data.noKtp,
            "address_ktp": data.address,
            "gender": data.gender,
            "status_marital": data.maritalStatus,
            "last_edu": data.lastEducation,
            "bank": {
                "no": data.noRekening,
                "name": data.nameBank,
                "owner": data.accountOwner,
                "branch": data.bankBranch
            },
            "job": {
                "company_name": data.companyName,
                "company_address":data.companyAddress,
                "monthly_income": data.monthlyIncome,
                "position": data.position
            }
        },
      });
      const result = await res.data;
      console.log("Hasil:", result);
    } catch (error) {
      
    }
  }
  
  const [fileNames, setFileNames] = useState([
    "Upload dokumen Fotokopi KTP",
    "Upload dokumen NPWP (jika ada)",
    "Upload dokumen Rekening Koran",
    "Upload dokumen Lainnya (Optional)",
  ]);


  const handleFileChange = async (index: number, file?: File) => {
    // const newFileNames = [...fileNames];
    // newFileNames[index] = file ? file.name : fileNames[index];
    // console.log("File " + newFileNames)
    // console.log("File " , file)
    // setFileNames(newFileNames);
    const formData = new FormData();
    formData.append("folder", "image");
    formData.append("app", "capbridge");
    formData.append("files", file ?? "");

    try {
      const res = await axios.put("http://157.245.193.49:3099/api/v1/media", 
        formData,
      );
      const result = await res.data;
      console.log("Hasil:", result.data[0].url);
      if(index == 0) {
        setLinkKtp(result.data[0].url);
      } else if (index == 1){
        setLinkNpwp(result.data[0].url)
      } else if(index == 2){
        setLinkRek(result.data[0].url)
      } else {
        setLinkOptional(result.data[0].url)
      }

    } catch (error) {
      console.error(error);
    }
  };


  
  const pemodal = useForm<FormValues>({
    // resolver: zodResolver(schema),
  });


  
  
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
          onClick={() => {
            onClose();
            setStep("select");
          }}
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
                          placeholder="Jabatan"
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
                          placeholder="Jabatan"
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

                <div className="flex flex-wrap gap-4">
                  {/* Nama Komisaris */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jenis Obligasi
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jenis Obligasi"
                    />
                  </div>
                  {/* Nama Direksi */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nilai Nominal
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nama Direksi"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Jangka Waktu */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jangka Waktu
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jangka Waktu"
                    />
                  </div>
                  {/* Tingkat Bunga */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Tingkat Bunga
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tingkat Bunga"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Jadwal Pembayaran Bunga */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jadwal Pembayaran Bunga
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jadwal Pembayaran Bunga"
                    />
                  </div>
                  {/* Jadwal Pembayaran Pokok */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jadwal Pembayaran Pokok
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jadwal Pembayaran Pokok"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Penggunaan Dana */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Penggunaan Dana
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Penggunaan Dana"
                    />
                  </div>
                  {/* Jadwal Pembayaran Pokok */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Jaminan Kolateral
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Jaminan Kolateral"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-500 mb-1"
                    htmlFor="description"
                  >
                    Deskripsi Pekerjaan
                  </label>
                  <textarea
                    id="description"
                    value={workDesc}
                    onChange={(e) => setWorkDesc(e.target.value)}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tuliskan deskripsi mu dengan jelas di sini"
                    rows={4}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex flex-col flex-wrap gap-4">
                    <div>
                      <label className="block text-gray-500 text-sm font-medium">
                        Apakah di Biayai oleh APBN/APBD
                      </label>
                    </div>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="funded"
                          value="APBN"
                          className="accent-black"
                        />
                        <span className="text-sm text-black">APBN</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="funded"
                          value="APBD"
                          className="accent-black"
                        />
                        <span className="text-sm text-black">APBD</span>
                      </label>
                    </div>
                  </div>
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
        )}

        {step === "pemodal" && (
          <form onSubmit={pemodal.handleSubmit(onSubmitInvestor)} data-tes='tes'>
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
                      Email
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("email")}
                      name="name"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Email"
                    />
                    {pemodal.formState.errors.email && <div className="text-danger mt-1">{pemodal.formState.errors.email.message}</div>}
                  </div>

                  {/* KTP */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Password
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("noKtp")}
                      name="noKtp"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Password"
                    />
                    {pemodal.formState.errors.password && <div className="text-danger mt-1">{pemodal.formState.errors.password.message}</div>}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* Nama */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("name")}
                      name="name"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Nama"
                    />
                    {pemodal.formState.errors.name && <div className="text-danger mt-1">{pemodal.formState.errors.name.message}</div>}
                  </div>

                  {/* KTP */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      KTP
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("noKtp")}
                      name="noKtp"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="KTP"
                    />
                    {pemodal.formState.errors.noKtp && <div className="text-danger mt-1">{pemodal.formState.errors.noKtp.message}</div>}
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
                      {...pemodal.register("placeOfBirth")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tempat Tanggal Lahir"
                      />
                    {pemodal.formState.errors.placeOfBirth && <div className="text-danger mt-1">{pemodal.formState.errors.placeOfBirth.message}</div>}
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
                            {...pemodal.register("gender")}
                            type="radio"
                            name="gender"
                            value="L"
                            className="accent-black"
                            />
                          <span className="text-sm text-black">Pria</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            {...pemodal.register("gender")}
                            type="radio"
                            name="gender"
                            value="P"
                            className="accent-black"
                          />
                          <span className="text-sm text-black">Wanita</span>
                        </label>
                        {pemodal.formState.errors.gender && <div className="text-danger mt-1">{pemodal.formState.errors.gender.message}</div>}
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
                      {...pemodal.register("maritalStatus")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Status Pernikahan"
                    />{pemodal.formState.errors.maritalStatus && <div className="text-danger mt-1">{pemodal.formState.errors.maritalStatus.message}</div>}
                  </div>
                  {/* Pendidikan Terakhir */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Pendidikan Terakhir
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("lastEducation")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Pendidikan Terakhir"
                    />
                    {pemodal.formState.errors.lastEducation && <div className="text-danger mt-1">{pemodal.formState.errors.lastEducation.message}</div>}
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
                      {...pemodal.register("work")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Pekerjaan"
                      />
                      {pemodal.formState.errors.work && <div className="text-danger mt-1">{pemodal.formState.errors.work.message}</div>}
                  </div>

                  {/* No Telp */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      No Tlp
                    </label>
                    <input
                      {...pemodal.register("noTelp")}
                      type="text"
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="No Tlp"
                      />
                      {pemodal.formState.errors.noTelp && <div className="text-danger mt-1">{pemodal.formState.errors.noTelp.message}</div>}
                  </div>
                </div>

                {/* Alamat Sesuai KTP dan Alamat Domisili */}

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Alamat Sesuai KTP dan Alamat Domisili
                  </label>
                  <input
                    type="text"
                    {...pemodal.register("address")}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Alamat Sesuai KTP dan Alamat Domisili"
                    />
                    {pemodal.formState.errors.address && <div className="text-danger mt-1">{pemodal.formState.errors.address.message}</div>}
                </div>

                {/* Alamat Email Aktif */}

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Alamat Email Aktif
                  </label>
                  <input
                    type="text"
                    {...pemodal.register("email")}
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Alamat Email Aktif"
                    />
                    {pemodal.formState.errors.email && <div className="text-danger mt-1">{pemodal.formState.errors.email.message}</div>}
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
                        {...pemodal.register("nameBank")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Bank"
                        />
                        {pemodal.formState.errors.nameBank && <div className="text-danger mt-1">{pemodal.formState.errors.nameBank.message}</div>}
                    </div>
                    {/* Nomor Rekening */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Nomor Rekening
                      </label>
                      <input
                        type="text"
                        {...pemodal.register("noRekening")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nomor Rekening"
                        />
                        {pemodal.formState.errors.noRekening && <div className="text-danger mt-1">{pemodal.formState.errors.noRekening.message}</div>}
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
                        {...pemodal.register("accountOwner")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Pemilik Rekening"
                      />
                      {pemodal.formState.errors.accountOwner && <div className="text-danger mt-1">{pemodal.formState.errors.accountOwner.message}</div>}
                    </div>
                    {/* Cabang Bank */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Cabang Bank
                      </label>
                      <input
                        type="text"
                        {...pemodal.register("bankBranch")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Cabang Bank"
                      />
                      {pemodal.formState.errors.bankBranch && <div className="text-danger mt-1">{pemodal.formState.errors.bankBranch.message}</div>}
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
                        {...pemodal.register("companyName")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Nama Perusahaan"
                      />
                      {pemodal.formState.errors.companyName && <div className="text-danger mt-1">{pemodal.formState.errors.companyName.message}</div>}
                    </div>
                    {/* Jabatan */}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Jabatan
                      </label>
                      <input
                        type="text"
                        {...pemodal.register("position")}
                        className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Jabatan"
                      />
                      {pemodal.formState.errors.position && <div className="text-danger mt-1">{pemodal.formState.errors.position.message}</div>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Alamat Perusahaan
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("companyAddress")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Alamat Sesuai KTP dan Alamat Domisili"
                    />
                    {pemodal.formState.errors.companyAddress && <div className="text-danger mt-1">{pemodal.formState.errors.companyAddress.message}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Penghasilan Bulanan
                    </label>
                    <input
                      type="text"
                      {...pemodal.register("monthlyIncome")}
                      className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Penghasilan Bulanan"
                    />
                    {pemodal.formState.errors.monthlyIncome && <div className="text-danger mt-1">{pemodal.formState.errors.monthlyIncome.message}</div>}
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
                          value="rendah"
                          {...pemodal.register("risk")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Rendah</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="sedang"
                          {...pemodal.register("risk")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Sedang</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="tinggi"
                          {...pemodal.register("risk")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Tinggi</span>
                      </label>
                    </div>
                    {pemodal.formState.errors.risk && (
                      <p className="text-red-500 text-sm">{pemodal.formState.errors.risk.message}</p>
                    )}
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
                          value="tidak_ada"
                          {...pemodal.register("experience")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Tidak ada</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="kurang"
                          {...pemodal.register("experience")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Kurang</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="cukup"
                          {...pemodal.register("experience")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Cukup</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="banyak"
                          {...pemodal.register("experience")}
                          className="accent-black"
                        />
                        <span className="text-sm text-black">Banyak</span>
                      </label>
                    </div>
                    {pemodal.formState.errors.experience && (
                      <p className="text-red-500 text-sm">{pemodal.formState.errors.experience.message}</p>
                    )}
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
                    {["dokumen1", "dokumen2", "dokumen3", "dokumen4"].map(
                      (field, index) => (
                        <label
                          key={field}
                          className="flex items-center gap-3 border border-dashed border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50"
                        >
                          <span>📄</span>
                          <span className="text-sm text-gray-600">
                            {fileNames[index]}
                          </span>
                          <input
                            type="file"
                            {...pemodal.register(field as any)}
                            className="hidden"
                            onChange={(e) =>
                              handleFileChange(index, e.target.files?.[0])
                            }
                          />
                        </label>
                      )
                    )}

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
          </form>
        )}
      </div>
    </div>
  );
};

export default RoleModal;

