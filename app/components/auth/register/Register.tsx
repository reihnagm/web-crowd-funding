"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import {
  setEmail,
  setPassword,
  setShowPassword,
} from "@redux/slices/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const email = useSelector((state: RootState) => state.auth.value);
  const password = useSelector((state: RootState) => state.auth.password);
  const showPassword = useSelector((state: RootState) => state.auth.showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-10">
      <div className="flex justify-between items-center mb-10">
        <img src="/logo.svg" alt="Fulusme Logo" className="w-20 h-20" />
        <button className="text-[#321B87] font-bold text-sm">&lt; Kembali Ke Beranda</button>
      </div>

      <h1 className="text-3xl font-medium text-[#321B87] mb-2">
        Selamat Datang <span className="font-bold">di Fulusme,</span>
      </h1>
      <p className="text-lg text-[#321B87] mb-10">
        Silahkan berinvestasi dengan <br className="md:hidden" />
        Daftar diri anda terlebih dahulu
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        {/* Daftar Sebagai */}
        <div>
          <label className="font-bold text-[#321B87] block mb-1">Daftar Sebagai</label>
          <select className="w-full p-3 bg-[#F1F5F9] rounded">
            <option>Pilih Tipe Pemodal</option>
            <option>Individu</option>
            <option>Institusi</option>
          </select>
        </div>

        {/* Nama Depan dan Nama Belakang */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-bold text-[#321B87] block mb-1">Nama Depan</label>
            <input type="text" className="w-full p-3 bg-[#F1F5F9] rounded" />
          </div>
          <div>
            <label className="font-bold text-[#321B87] block mb-1">Nama Belakang (Opsional)</label>
            <input type="text" className="w-full p-3 bg-[#F1F5F9] rounded" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="font-bold text-[#321B87] block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 bg-[#F1F5F9] rounded"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>

        {/* Nomor Handphone */}
        <div>
          <label className="font-bold text-[#321B87] block mb-1">Nomor Handphone</label>
          <input
            type="tel"
            className="w-full p-3 bg-[#F1F5F9] rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#321B87] text-white py-3 rounded font-bold hover:bg-[#2A1572] transition"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
