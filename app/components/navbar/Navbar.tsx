'use client';

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    const pathname = usePathname();

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
                isSticky ? "bg-white text-[#322783] shadow-md" : "bg-[#4821C1]"
            }`}
        >
            <div className="flex justify-between items-center px-10 py-6 text-sm font-semibold">
            <div className={`text-xl font-bold ${isSticky ? "text-[#321B87]" : "text-white"}`}>
                CapBridge
            </div>
            <ul className="flex gap-6 items-center">
                <li className={pathname == "/" ? "text-[#4CD137]" : ""}>
                    <a href="/">Beranda</a>
                </li>
                <li className={pathname == "/business-list" ? "text-[#4CD137]" : ""}> 
                    <a href="/business-list">
                        Daftar Bisnis
                    </a>
                </li>
                <li className={pathname == "/about-us" ? "text-[#4CD137]" : ""}>
                    <a href="/about-us">
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pasar Sekunder
                    </a>
                </li>
                <li>
                    <a href="#">
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