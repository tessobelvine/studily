import React from "react";
import Image from "next/image";
import ResourceCards from "./ResourceCards";

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

];

export default function SecondAside() {
  return (
    <div className="bg-slate-900 border-t-8  border-sky-500 border-t-sky-500 rounded overflow-hidden">
      <h2 className="text-gray-200 m-4 text-bold text-sm mb-0 uppercase">latest resources</h2>
      {resources.map((resource, index) => (
        <div key={index}
          className={`flex px-4 justify-between items-center ${index !== resources.length - 1 ? "border-b border-b-gray-800" : ""}`}>
          <ResourceCards resource={resource} />
        </div>
      ))}
    </div>
  );
}
