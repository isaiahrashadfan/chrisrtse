import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Noto_Serif } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";
import { Arimo } from "next/font/google";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


const noto_serif = Noto_Serif({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-noto_serif'
});

const anonymous_pro = Anonymous_Pro({
  weight: ['400','700'],
  subsets: ["latin"],
  variable: '--font-anonymous_pro'
});

const arimo = Arimo({
  weight: ['400','500','600','700'],
  subsets: ["latin"],
  variable: '--font-arimo'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${noto_serif.variable} ${anonymous_pro.variable} ${arimo.variable}`}>
      <body>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
