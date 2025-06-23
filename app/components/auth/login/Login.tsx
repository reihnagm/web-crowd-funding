"use client";

import { loginAsync } from "@/redux/slices/authSlice";
import { AppDispatch } from "@redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Form Belum Lengkap",
        text: "Mohon isi semua field wajib.",
      });
      return;
    }

    try {
      await dispatch(
        loginAsync({
          login: {
            email: email,
            password: password,
          },
        })
      ).unwrap();

      router.push("/");
    } catch (error: any) {
      console.error("Register failed:", error);
    }
  };

  return (
    <div className="w-1/2  bg-white px-6 md:px-20 py-10">
      <div className="flex justify-between items-center mb-10">
        <img src="/images/img.jpg" alt="CapBridge Logo" className="w-20 h-20" />
        <a href="/">
          <button className="text-[#321B87] font-bold text-sm">
            &lt; Kembali Ke Beranda
          </button>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="font-bold text-[#321B87] block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 bg-[#F1F5F9] rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="font-bold text-[#321B87] block mb-1">
            Kata Sandi
          </label>
          <input
            type="password"
            className="w-full p-3 bg-[#F1F5F9] rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-1/2">
            <p>Lupa Kata Sandi</p>
            <p>
              Belum Punya Akun?{" "}
              <a
                href="/auth/register"
                className="text-[#321B87] cursor-pointer font-bold hover:underline"
              >
                Daftar Sekarang
              </a>
            </p>
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
