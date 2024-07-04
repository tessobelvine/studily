import Image from "next/image";

export default function ResourceCards({ resource }) {
  return (
    <div className="flex lg:flex-row justify-center items-center gap-4 py-3  text-gray-300 rounded overflow-hidden">
      <div className="flex-1 flex items-start gap-4 py-2 text-gray-300">
        <Image
          className="w-8 h-8 object-cover rounded-md mt-2"
          src={resource.imageSrc}
          alt={resource.title} width={800}
          height={800}
        />
        <div className="">
          <h2 className="hover:underline cursor-pointer line-clamp-1">{resource.title}</h2>
          <p className="hover:underline cursor-pointer line-clamp-1">{resource.description}</p>
          <div>
            <span className="text-xs ">{resource.date}</span>
            <span className="text-xs mx-4 cursor-pointer hover:underline bg-blue-800 inline-block p-1 rounded">
              {resource.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
