import ResourceCards from "@/components/ResourceCards";

const resources = [
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23 - 06 - 2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23 - 06 - 2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23 - 06 - 2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23 - 06 - 2024",
    decscription: "lorem ipsom dolor",
    imageSrc: "/images/landscape.png",
  },
  {
    title: "Pdf doc for meds school",
    category: "medicine",
    date: "23 - 06 - 2024",
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
    <div>
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div key={index}>
          <ResourceCards resource={resource} />
        </div>
      ))}
    </div>
  );
}
