// import Link from "next/link";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-slate-900 h-screen block">
      <h2>Contact page</h2>
      <div className=" flex bg-sky-500 p-8 h-96 m-8">
        <div>
          <h1>Send us a message</h1>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <FaFacebook size={50} color="blue" className="pt-4" />
          <FaWhatsapp size={50} color="green" className="pt-4" />
          <FaFacebook size={50} color="blue" className="pt-4" />
        </div>
        <div>
          <h1>Contact us</h1>
          <p>We are open for any suggestion or just to have a chat</p>
        </div>
      </div>
    </section>
  );
}
