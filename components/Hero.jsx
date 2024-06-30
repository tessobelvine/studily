import Button from "./Button";


export default function Hero() {
  return (
    <>
      <div className="bg-[url('/Images/dark-bg2.jpg)] w=[500px] h=[500px] bg-cover bg-center rounded flex flex-col lg:flex-row gap-8 p-8">
        <div className="flex-1">
          <h1 className="text-blue-900 text-3xl font-extrabold mb-3">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-white mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vel in, assumenda distinctio laboriosam vero ipsum deleniti quas
            consequatur nisi non esse voluptatibus omnis repudiandae.
          </p>
          <div>
            <Button className='bg-orange-600 border-none'>Register</Button>
          </div>
        </div>

        <div className="flex flex-1 gap-2 justify-center items-center">
          <div className="w-24 bg-white h-64 rounded-full text-center">
            hello
          </div>
          <div className="w-32 h-80 bg-white rounded-full text-center">
            hello
          </div>
          <div className="w-24 bg-white h-64 rounded-full text-center">
            hello
          </div>
        </div>
      </div>
    </>
  );
}
