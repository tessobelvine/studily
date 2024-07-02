import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="rounded p-8 flex flex-col lg:flex-row gap-8">
        <div className=" flex flex-col items-center lg:items-start ">
          <h1 className="text-center max-w-lg lg:text-start text-sky-500 text-4xl lg:text-6xl font-bold">
            Providing Best Resources For Brighter Future
          </h1>
          <p className=" max-w-lg text-white text-center mb-10 lg:text-left pt-8 lg:text-2xl">
            The most valuable resource that we all have is each other. Without
            collaboration our growth is limited to our own perspectives
          </p>
          <div className="flex gap-8 items-center ">
            <button className="bg-orange-600 border-none text-white px-8 py-2 rounded hover:bg-indigo-700">
              Register
            </button>

            {/* <div> */}
              <button className="bg-transparent border-2 border-l-blue-700 border-t-green-500 border-b-pink-500 border-r-orange-500  text-white px-8 py-2 rounded hover:border-blue-700">
                Sign in
              </button>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-1 gap-2 justify-center items-center">
          <div className="w-24 bg-white bg-[url('/Images/IMG_0415.jpeg')] bg-cover bg-left bg-no-repeat h-64 rounded-full text-center">
            
          </div>
          <div className="w-32 h-80 bg-white bg-[url('/Images/IMG_0415.jpeg')] bg-cover bg-center bg-no-repeat rounded-full text-center">
            
          </div>
          <div className="w-24 bg-white bg-[url('/Images/IMG_0415.jpeg')] bg-cover bg-right bg-no-repeat h-64 rounded-full object-left-0">
            
          </div>
        </div>
      </div>
    </>
  );
}
