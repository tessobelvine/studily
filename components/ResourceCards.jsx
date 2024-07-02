import Image from "next/image";

export default function ResourceCards({ resource }) {
  return (
    <div className="flex lg:flex-row justify-center items-center gap-4 py-3  text-gray-300 rounded overflow-hidden">
      <div className="flex-1 flex gap-4 py-2 text-gray-300">
        <Image
          className="w-8 h-8 object-cover rounded-full"
          src={resource.imageSrc}
          alt={resource.title}          width={800}
          height={800}
        />
        <div>
          <h2>{resource.title}</h2>
          <div>
            <span className="text-xs ">{resource.date}</span>
            <span className="text-xs mx-4 bg-blue-800 inline-block p-1 rounded">
              {resource.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
