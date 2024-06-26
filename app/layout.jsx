import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="container m-auto p-4 min-h-screen">{children}</main>
        <Footer />
        <Script src="../node_modules/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
