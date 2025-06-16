"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { setEmail } from "@redux/slices/authSlice";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const email = useSelector((state: RootState) => state.auth.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-1/2 bg-white px-6 md:px-20 py-10">
      <div className="flex justify-between items-center mb-10">
        <img src="/images/img.jpg" alt="MyApp Logo" className="w-20 h-20" />
        <a href="/">
          <button className="text-[#321B87] font-bold text-sm">&lt; Kembali Ke Beranda</button>
        </a>
      </div>

      <h1 className="text-3xl font-medium text-[#321B87] mb-2">
        Selamat Datang <span className="font-bold">di MyApp,</span>
      </h1>
      <p className="text-lg text-[#321B87] mb-10">
        Silahkan berinvestasi dengan <br className="md:hidden" />
        Daftar diri anda terlebih dahulu
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="font-bold text-[#321B87] block mb-1">Daftar Sebagai</label>
          <select className="w-full p-3 bg-[#F1F5F9] rounded text-black">
            <option>Pilih Tipe Pemodal</option>
            <option>Individu</option>
            <option>Institusi</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-bold text-[#321B87] block mb-1">Nama Depan</label>
            <input type="text" className="w-full p-3 bg-[#F1F5F9] rounded text-black" />
          </div>
          <div>
            <label className="font-bold text-[#321B87] block mb-1">Nama Belakang (Opsional)</label>
            <input type="text" className="w-full p-3 bg-[#F1F5F9] rounded text-black" />
          </div>
        </div>

        <div>
          <label className="font-bold text-[#321B87] block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 bg-[#F1F5F9] rounded text-black"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>

        <div>
          <label className="font-bold text-[#321B87] block mb-1">Nomor Handphone</label>
          <input
            type="tel"
            className="w-full p-3 bg-[#F1F5F9] rounded text-black"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <p className="w-1/2">Butuh pertanyaan? <a href="javascript:void(0)" className="text-[#321B87] cursor-pointer font-bold hover:underline">Hubungi Kami</a> </p>
          <button
            type="submit"
            className="w-1/4 bg-[#321B87] text-white py-3 rounded-full font-bold hover:bg-[#2A1572] transition"
          >
            Daftar
          </button>
        </div>

      </form>
    </div>
  );
};

export default Register;
