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
      <span className="text-white block">
        <h1>LET'S SHARE RESOURCES TOGETHER</h1>
        <p>
          Alone we can do little; <span>together we can do much.</span>
        </p>
      </span>
      <div>
        <h2 className="text-white   font-extrabold mb-8">RESOURCES</h2>
        <div className="bg-slate-900 p-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex border-b border-gray-500 border-b-gray-500  justify-between items-center">
            <ResourceCards resource={resource} />
            <div className="text-white">Hello</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
