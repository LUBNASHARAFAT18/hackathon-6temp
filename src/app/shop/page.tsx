import Image from "next/image";

export default function Shop() {
  return (
    <div className="relative w-full h-40 md:h-48 flex items-center justify-center ">
      
      {/* public/imageshop.png */}
      <div className="absolute inset-0">
        <Image
          src="/imageshop.png"
          alt="Shop "
          layout="fill"
          objectFit="cover"
          className="opacity-50 "
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-black">Shop</h1>
        <p className="text-sm text-gray-700">
          <span className="text-gray-500">Home</span> &gt; <span>Shop</span>
        </p>
      </div>
      
    </div>
    
    
  );
}
