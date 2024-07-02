import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-slate-900 py-24 p-4 ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center">
        <div className="border rounded-full py-4 px-4 rotate-[290deg] text-extrabold ">
          <Link
            href={"/"}
            className="font-black text-blue-900 lg:text-3xl">
            STUDILY{" "}
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-16 justify-between items-start">
          <nav className="flex flex-col gap-4 justify-between  font-medium text-gray-500 text-l ">
            <h1 className="text-white text-2xl">Resources</h1>
            <Link href={"/resources"} className="hover:text-gray-300">Caterories</Link>
            <Link href={"/resources"} className="hover:text-gray-300">Top Resources</Link>
            <Link href={"/resources"} className="hover:text-gray-300">Latest Review</Link>
          </nav>
          <nav className="flex flex-col gap-4 justify-between font-medium text-gray-700 text-l ">
            <h1 className="text-white text-2xl">Forum</h1>
            <Link href={"/forum"} className="hover:text-gray-300">Latest Post</Link>
            <Link href={"/forum"} className="hover:text-gray-300">Latest Resources</Link>
          </nav>
          <nav className="flex flex-col gap-4 justify-between  font-medium text-gray-700 text-l ">
            <h1 className="text-white text-2xl">Contact Us</h1>
            <Link href={"/contact"} className="hover:text-gray-300">Home</Link>
            <Link href={"/contact"} className="hover:text-gray-300">Help</Link>
            <Link href={"/contact"} className="hover:text-gray-300">Contact</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
