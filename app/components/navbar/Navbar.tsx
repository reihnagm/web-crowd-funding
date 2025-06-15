'use client';

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isSticky ? "bg-white text-black shadow-md" : "bg-[#4821C1] text-white"
            }`}
        >
            <div className="flex justify-between items-center px-10 py-6 text-sm font-semibold">
            <div className={`text-xl font-bold ${isSticky ? "text-[#321B87]" : "text-white"}`}>
                MyApp
            </div>
            <ul className="flex gap-6 items-center">
                <li className={isSticky ? "text-[#321B87] font-semibold" : "text-[#4CD137]"}>
                    <a href="/">Beranda</a>
                </li>
                <li> 
                    <a href="javascript:void(0)">
                        Daftar Bisnis
                    </a>
                </li>
                <li>
                    <a href="/aboutus">
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        Pasar Sekunder
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        Penerbit
                    </a>
                </li>
                <li>
                    <a href="/auth/login">
                        <button
                            className={`px-5 py-2 rounded-full ${
                            isSticky ? "bg-[#4CD137] text-white" : "bg-[#4CD137] text-white"
                            }`}
                        >
                            Masuk
                        </button>
                    </a>
                </li>
                <li>
                    <a href="/auth/register">
                        Daftar
                    </a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;