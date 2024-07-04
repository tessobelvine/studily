/* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";
import { Footer } from "flowbite-react";
import React from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaEnvelopeOpen, FaLocationArrow, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function page() {
  return (
    <section className="max-w-screen-lg mx-auto p-4 content-center mb-4 ">
      <marquee className="text-white text-2xl font-extrabold pt-8 animation-bounce">Let's Get In Touch</marquee>
      <div className="flex flex-col gap-8 lg:flex-row overflow-hidden border rounded-lg lg:items-start mt-8">
        <div className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-900 p-5 h-46 ">
          <div className="">
            <h1 className="text-white text-2xl font-bold lg:pb-16 pb-8">
              Send us a message
            </h1>
            <div className="relative z-0 w-full mb-5 group">
              <label for="floating-name" className="block font-bold">
                Full names
              </label>
              <input
                type="text"
                name="floating-name"
                id="floating-name"
                className=" block p-2 w-full text-sm border-0 text-gray-800 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-white peer"
                required></input>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label for="floating-email" className="block font-bold">
                Email
              </label>
              <input
                type="email"
                name="floating-email"
                id="floating-email"
                className=" block py-2.5 w-full text-sm text-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-white peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white bg-transparent focus:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
                required></input>
            </div>
            <label for="message" className="block font-bold pb-4">
              Your message{" "}
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2 w-full text-sm text-gray-800 rounded-lg border border-gray-300 dark:placeholder dark:text-white border-none "></textarea>
          </div>
          <div className="flex gap-2 items-center bg-gray-800 w-48 rounded py-2 px-4 mt-16">
            <FaPaperPlane color="white" size={22} />
            <button className=" text-white ">Send message</button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 p-6 py-8">
          <h2 className="text-2xl font-bold">Contact us</h2>
          <div className="border-b-4 w-12 border-indigo-900 -mt-2"></div>
          <p className="font-bold text-xl mt-4">We are open for any suggestion or 
            just to have a chat</p>
          <div className="my-4 text-gray-400">
            <div className="flex gap-4 items-center mb-4 ">
              <FaLocationArrow className="" />
              <p className="flex gap-4"><span className=" font-bold block">Address:</span>Bamenda, Cameroon</p>
            </div>

            <div className="flex gap-4 items-center mb-4 ">
              <FaPhone className="" />
              <p className="flex gap-4"><span className="font-bold hover:text-blue-500">Phone:</span>+237 655-616-308</p>
            </div>

            <div className="flex gap-4 items-center mb-4 ">
              <FaEnvelopeOpen className="" />
              <p className="flex gap-4"><span className="font-bold">Email:</span>meidabelvine@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </section>
  );
}
