/* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";
import React from "react";
import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPaperPlane, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function page() {
  return (
    <section className="block p-8 content-center mb-4 lg:px-64 ">
      <marquee className="text-white text-2xl font-extrabold pt-8 animation-bounce">Let's Get In Touch</marquee>

      <div className="flex flex-col gap-8 lg:flex-row  bg-gradient-to-r from-blue-500 to-indigo-200 rounded lg:items-start mt-8">
        <div className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-900 p-5 h-46 rounded">
          <div className="">
            <h1 className="text-white text-2xl font-bold lg:pb-16 pb-8">
              Send us a message
            </h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating-name"
                id="floating-name"
                className=" block py-2.5 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=""
                required></input>
              <label
                for="floating-name"
                className="peer-focus:font-medium absolute text-sm text-black font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focu:-translate-y-6">
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating-email"
                id="floating-email"
                className=" block py-2.5 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=""
                required></input>
              <label
                for="floating-email"
                className="peer-focus:font-medium absolute text-sm text-black font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focu:-translate-y-6">
                Email
              </label>
            </div>
            <label for="message" className="block font-bold pb-4">
              Your message{" "}
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2 w-full text-sm text-gray rounded-lg border border-gray-300 dark:placeholder dark:text-white border-none "></textarea>
          </div>
          <div className="flex gap-2 items-center bg-black w-48 rounded py-2 px-4 mt-16">
            <FaPaperPlane color="white" size={22} />
            <button className=" text-white ">Send message</button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Contact us</h1>
          <div className="border-b-4 w-12 border-indigo-900 mb-8"></div>
          <p className="font-bold text-xl">We are open for any suggestion or just to have a chat</p>
          <div className="">
            <div className="flex gap-4 pt-8 items-center ">
              <FaLocationArrow size={35} color="indigo" className="pt-4" />
              <p className="flex gap-4"><span className=" font-bold block">Address:</span>Bamenda, Cameroon</p>
            </div>
            <div className="flex gap-4 pt-5 items-center ">
              <FaPhone size={35} color="indigo" className="pt-4" />
              <p className="flex gap-4"><span className="font-bold hover:text-blue-500">Phone:</span>+237 655-616-308</p>
            </div>
            <div className="flex gap-4 pt-5 items-center ">
              <FaEnvelopeOpen size={35} color="indigo" className="pt-4" />
              <p className="flex gap-4"><span className="font-bold">Email:</span>meidabelvine@gmail.com</p>
            </div>

            <div className="flex gap-4 pt-24 items-center px-20">
              <div>
                <FaFacebook size={30} color="blue" />
              </div>
              <div>
                <FaWhatsapp size={30} color="green" />
              </div>
              <div>
                <FaTwitter size={30} color="blue" />
              </div>
              <div>
                <FaInstagram size={30} color="#D90166" />
              </div>
              <div>
                <FaLinkedin size={30} color="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
