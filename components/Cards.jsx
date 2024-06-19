import React from "react";

export default function cards() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 p-4 py-24">
        <div className="flex-1 min-h-48 p-4 rounded-xl bg-orange-500 text-white ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            dolorem? Aperiam ut distinctio minima adipisci rerum dolore quae
            asperiores ipsum quasi assumenda reprehenderit dolor consequatur
            voluptate, voluptatem, ipsa dolorem dicta vel esse molestias ea
            animi iste accusamus? Expedita, nemo velit!
          </p>
        </div>

        <div className="flex-1 min-h-48 p-4 rounded-xl bg-orange-500 text-white ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            nostrum provident. Quas rerum explicabo, delectus maiores nesciunt
            tenetur modi veniam?
          </p>
        </div>

        <div className="flex-1 min-h-48 p-4 rounded-xl bg-blue-950 text-white ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            eligendi quasi cumque, facere vero assumenda eius deleniti similique
            beatae cum molestiae velit dicta. Amet tempora delectus illo
            doloremque nisi ab porro voluptate, iste dignissimos temporibus nam
            dicta? Accusantium id rem molestiae nihil cumque. Dolorem tempora
            unde numquam quae, repudiandae maxime!
          </p>
        </div>
      </div>
    </>
  );
}
