import Image from "next/image";
import { } from "react-icons/pi";

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-screen justify-end">
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background.png" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="place-items-end mx-auto mt-12 content-center">
        <div className="relative bg-pink-100 bg-opacity-90 p-8 rounded-lg shadow-lg w-full md:w-1/2 ">
          <p className="text-sm text-gray-600 uppercase">New Arrival</p>
          <h1 className="text-4xl font-bold text-yellow-700">
            Discover Our New Collection
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800">
            Buy Now
          </button>
        </div>
  
        

      </div>
      

    

      </div>
  );
};

export default Hero;