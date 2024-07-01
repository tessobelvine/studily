import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-slate-900 lg:py-24 p-4 ">
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="py-4 px-4 text-extrabold content-start ">
        <Link
            href={"/"}
            className="font-black text-sky-500 lg:text-3xl text-3xl">
            STUDILY{" "}
          </Link>
        </div>
        <div className="flex gap-16 justify-between">
        <nav className="flex flex-col gap-4 justify-between  font-medium text-gray-700 text-l hover:text-sky-500">
          
          <h1 className="text-white text-2xl">Resources</h1>
          <Link href={"/resources"}>Caterories659450569</Link>
          <Link href={"/resources"}>Top Resources</Link>
          <Link href={"/resources"}>Latest Review</Link>
        </nav>
        <nav className="flex flex-col gap-4 justify-between font-medium text-gray-700 text-l hover:text-sky-500">
          <h1 className="text-white text-2xl">Forum</h1>
          <Link href={"/forum"}>Latest Post</Link>
          <Link href={"/forum"}>Latest Resources</Link>      
        </nav>
        <nav className="flex flex-col gap-4 justify-between  font-medium text-gray-700 text-l hover:text-sky-500">
          <h1 className="text-white text-2xl">Contact Us</h1>
          <Link href={"/contact"}>Home</Link>
          <Link href={"/contact"}>Help</Link>
          <Link href={"/contact"}>Contact</Link>
          
        </nav>
        </div>
        <div></div>

      </div>
      <div className="border-b-2 border-b-gray-500"></div>
    </section>
  );
}
