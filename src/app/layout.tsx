import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";
import { Arimo } from "next/font/google";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Webring from "./components/Webring";

export const metadata: Metadata = {
  title: 'Chris Tse',
  description: 'Developer who likes his hobbies.',
  icons: {
    icon: './public/favicon.ico',
  },
}



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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </head>
      <body>
          <Sidebar/>
          <Navbar/>
          {children}
          <Webring title="SINCERELY," current="chris" url="https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json"></Webring>
      </body>
    </html>
  );
}
