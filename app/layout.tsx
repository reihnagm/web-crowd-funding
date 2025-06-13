"use client";

import "./globals.css";
import "reactjs-tiptap-editor/style.css";

import {  store } from "@redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";

import Header from "@components/header/Header";
import LeftSidebar from "@components/sidebar/LeftSidebar";
import ModalLogout from "@components/modal/logout/Logout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   
  const pathname = usePathname();

  return (
    <Provider store={store}>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {pathname === "/auth/login" || pathname == "/auth/register" 
              ? (
                  <div className="w-full flex items-center justify-center h-screen">
                    {children}
                  </div>
                ) 
              : ( 
                  <div className="flex">
                    <div className="flex flex-col flex-grow">
                      <div className="flex flex-grow">
                        {children}
                      </div>
                    </div>
                  </div>
                ) 
              }
              <ModalLogout />
            </body>
          </html>
      </Provider>
    );
}
