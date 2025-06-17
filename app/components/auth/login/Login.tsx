"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { setEmail } from "@redux/slices/authSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const email = useSelector((state: RootState) => state.auth.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-1/2  bg-white px-6 md:px-20 py-10">
      <div className="flex justify-between items-center mb-10">
        <img src="/images/img.jpg" alt="CapBridge Logo" className="w-20 h-20" />
        <a href="/">
          <button className="text-[#321B87] font-bold text-sm">&lt; Kembali Ke Beranda</button>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
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
          <label className="font-bold text-[#321B87] block mb-1">Kata Sandi</label>
          <input
            type="email"
            className="w-full p-3 bg-[#F1F5F9] rounded text-black"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <div  className="w-1/2">
            <p>Lupa Kata Sandi</p>
            <p>Belum Punya Akun? <a href="/auth/register" className="text-[#321B87] cursor-pointer font-bold hover:underline">Daftar Sekarang</a></p>
          </div>
          <button
            type="submit"
            className="w-1/4 bg-[#321B87] text-white py-3 rounded-full font-bold hover:bg-[#2A1572] transition"
          >
            Masuk
          </button>
        </div>

      </form>
    </div>
  );
};

export default Login;
