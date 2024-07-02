/* eslint-disable react/no-unescaped-entities */
import ResourceCards from "@/components/ResourceCards";

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
      <h2 className=" animate-bounce text-white   font-extrabold text-2xl">
        RESOURCES
      </h2>
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
              <div className="text-white">Hello</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
