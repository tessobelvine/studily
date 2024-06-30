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
    <div className="bg-slate-900 p-4 border-t-8  border-sky-500 border-t-sky-500">
      {resources.map((resource, index) => (
        <div key={index} className="border-b">
          <ResourceCards resource={resource} />
        </div>
      ))}
    </div>
  );
}
