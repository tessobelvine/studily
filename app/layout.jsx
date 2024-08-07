
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import './globals.css';


export const metadata = {
  title: "Studify | Resource sharing platform",
  description: "Best and secure resource sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-slate-950 text-gray-200">
        <Header />
        <main className="container m-auto min-h-screen  pt-12">{children}</main>
        <FooterSection />
        <Script src="../node_modules/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
    </ClerkProvider>
  );
}

