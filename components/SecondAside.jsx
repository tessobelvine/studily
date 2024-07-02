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
    <div className="bg-slate-900 p-4 border-t-8  border-sky-500 border-t-sky-500 rounded overflow-hidden">
      <h2 className="text-gray-200 mb-4">Top resources</h2>
      {resources.map((resource, index) => (
        <div key={index}
          className={`flex justify-between items-center ${index !== resources.length - 1 ? "border-b border-b-gray-800" : ""}`}>
          <ResourceCards resource={resource} />
        </div>
      ))}
    </div>
  );
}
