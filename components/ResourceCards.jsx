import Image from "next/image";
import React from "react";

export default function ResourceCards({ resource }) {
  return (
    <div className="flex gap-4 py-4 border-b text-gray-300">
      <Image className="w-8 h-8 object-cover rounded-full" src={resource.imageSrc} width={800} height={800}/>
      <div>
        <h2>{resource.title}</h2>
        <div>
          <span className="text-xs ">{resource.date}</span>
          <span className="text-xs mx-4 bg-blue-900 inline-block p-1 rounded">{resource.category}</span>
        </div>
      </div>
    </div>
  );
}
