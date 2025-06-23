"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AppDispatch, RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loadSession, logout } from "@redux/slices/authSlice";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    dispatch(loadSession());
  }, [dispatch]);

  return (
    <>
      {pathname != "/verification" &&
        auth.isAuthenticated &&
        !auth.data?.verify && (
          <div className="fixed top-0 left-0 w-full z-50 bg-yellow-400 text-black text-center text-sm py-2 px-4 font-medium">
            Akun Anda belum terverifikasi.{" "}
            <a href="/verification" className="underline font-semibold">
              Verifikasi sekarang
            </a>
          </div>
        )}

      <nav
        className={`fixed ${
          pathname != "/verification" &&
          auth.isAuthenticated &&
          !auth.data?.verify
            ? "top-8"
            : "top-0"
        } left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? "bg-white text-[#322783] shadow-md" : "bg-[#4821C1]"
        }`}
      >
        <div className="flex justify-between items-center px-10 py-6 text-sm font-semibold">
          <div
            className={`text-xl font-bold ${
              isSticky ? "text-[#321B87]" : "text-white"
            }`}
          >
            CapBridge
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu
                  size={24}
                  className={isSticky ? "text-[#322783]" : "text-white"}
                />
              )}
            </button>
          </div>

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#4821C1] z-40 p-6 
                    transform transition-transform duration-300 
                    ${menuOpen ? "translate-x-0" : "translate-x-full"} 
                    md:hidden`}
          >
            <ul className="flex flex-col gap-6 text-white text-base font-semibold pt-16">
              <li className={pathname == "/" ? "text-[#4CD137]" : "text-white"}>
                <a href="/">Beranda</a>
              </li>
              <li
                className={
                  pathname == "/business-list" ? "text-[#4CD137]" : "text-white"
                }
              >
                <a href="/business-list">Daftar Bisnis</a>
              </li>
              <li
                className={
                  pathname == "/about-us" ? "text-[#4CD137]" : "text-white"
                }
              >
                <a href="/about-us">Tentang Kami</a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Pasar Sekunder
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Penerbit
                </a>
              </li>
              {auth.isAuthenticated ? (
                <>
                  <li>Halo, {auth.data?.email}</li>
                  <li>
                    <button
                      onClick={() => dispatch(logout())}
                      className="px-5 py-2 rounded-full bg-red-500 text-white"
                    >
                      Keluar
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <a href="/auth/login">
                    <button className="mt-2 md:mt-0 px-5 py-2 rounded-full bg-[#4CD137] text-white">
                      Masuk
                    </button>
                  </a>
                </li>
              )}
              <li>
                <a className="text-white" href="/auth/register">
                  Daftar
                </a>
              </li>
            </ul>
          </div>

          {menuOpen && (
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            />
          )}

          <ul className="hidden md:flex flex gap-6 items-center">
            <li className={pathname == "/" ? "text-[#4CD137]" : ""}>
              <a href="/">Beranda</a>
            </li>
            <li
              className={pathname == "/business-list" ? "text-[#4CD137]" : ""}
            >
              <a href="/business-list">Daftar Bisnis</a>
            </li>
            <li className={pathname == "/about-us" ? "text-[#4CD137]" : ""}>
              <a href="/about-us">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Pasar Sekunder</a>
            </li>
            <li>
              <a href="#">Penerbit</a>
            </li>
            {auth.isAuthenticated ? (
              <>
                <li>Halo, {auth.data?.email}</li>
                <li>
                  <button
                    onClick={() => dispatch(logout())}
                    className="px-5 py-2 rounded-full bg-red-500 text-white"
                  >
                    Keluar
                  </button>
                </li>
              </>
            ) : (
              <li>
                <a href="/auth/login">
                  <button
                    className={`px-5 py-2 rounded-full ${
                      isSticky
                        ? "bg-[#4CD137] text-white"
                        : "bg-[#4CD137] text-white"
                    }`}
                  >
                    Masuk
                  </button>
                </a>
              </li>
            )}
            {auth.isAuthenticated ? (
              <></>
            ) : (
              <li>
                <a href="/auth/register">Daftar</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
