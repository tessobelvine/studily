/* eslint-disable react/no-unescaped-entities */
import ResourceCards from "@/components/ResourceCards";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const resources = [
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23/06/2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
];

export default function page() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className=" animate-bounce text-white   font-extrabold text-2xl">
          RESOURCES
        </h2>
        <Link href={'/resources/new'} className="bg-orange-600 border-none text-white uppercase leading-4 tracking-wide text-sm px-6 py-3 rounded hover:bg-slate-900 flex items-center justify-center gap-2"><FaPlus className="text-sm " /> Create Resource</Link>
      </div>
      <div className="text-white  py-8 lg:py-16 block">
        <h1 className="lg:text-4xl font-extrabold text-center opacity-75 text-2xl ">
          LET'S SHARE <span className="text-sky-500">RESOURCES</span> TOGETHER
        </h1>
      </div>
      <div>
        <div className="bg-slate-900 rounded shadow overflow-hidden">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-6 ${index !== resources.length - 1 ? "border-b border-b-gray-800" : ""}`}>
              <ResourceCards resource={resource} />
              <AiFillLike color="blue" size={50}/>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
