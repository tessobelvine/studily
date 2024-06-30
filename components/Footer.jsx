import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-slate-900 py-24 p-4 ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="border rounded-full py-4 px-4 rotate-[290deg] text-extrabold ">
        <Link
            href={"/"}
            className="font-black text-blue-900 lg:text-3xl">
            STUDILY{" "}
          </Link>
        </div>
        <div className="flex gap-8 justify-between items-center">
        <nav className="flex flex-col gap-4 justify-between  font-medium text-gray-700 text-l hover:text-sky-500">
          
          <h1 className="text-white text-2xl">Resources</h1>
          <Link href={"/resources"}>Caterories</Link>
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
    </section>
  );
}
