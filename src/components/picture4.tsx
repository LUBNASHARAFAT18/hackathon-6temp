// const Gallery = () => {
//   const images = [
//     "/image36.png",// Replace with actual image URLs
//     "/image38.png",
//     "/image40.png",
//     "/image43.png",
//     "/image45.png",
//     "/image37.png",
//     "/image39.png",
//   ];

//   return (
//     <div className=" bg-gray-800 h-2/3 py-2 left-px-4">
//       {/* Header */}
//       <h1 className="text-2x1 lg:text-3xl font-bold text-center mb-6 px-32 text-black  ">
//         Share your setup with{" "}
//         <span className="text-blue-500 flex justify-center">#FuniroFurniture</span>
//       </h1>

//       {/* Image Grid */}
//       <div className="grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`${
//               index === 0 || index === 1
//                 ? "lg:col-span-2"
//                 : "lg:col-span-1"
//             } rounded-md overflow-hidden shadow-md`}
//           >
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1 + 7}`}
//               className="w-274px h-382px object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import Image from 'next/image';

// components/Gallery.js
export default function Gallery() {
  const images = [
    { src: "/image36.png", colSpan: "col-span-2", rowSpan: "col-span-1" }, 
    { src: "/image38.png", colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: "/image40.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
    { src: "/image43.png", colSpan: "col-span-2", rowSpan: "row-span-1" }, 
    { src: "/image45.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
    { src: "/image37.png", colSpan: "col-span-1", rowSpan: "row-span-1" }, 
    { src: "/image45.png", colSpan: "col-span-3", rowSpan: "row-span-1" },
    { src: "/image45.png", colSpan: "col-span-3", rowSpan: "row-span-1" }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Share your setup with <span className="text-blue-600">#FuniroFurniture</span>
      </h2>
           <div className="flex justify-center py-6 px-4">
        <div className="relative w-full max-w-[1200px] h-[200px] md:h-[400px] lg:h-[600px]">
          <Image
            src="/grid.jpg"
            alt="Furniture Setup"
            className="object-cover rounded-lg shadow-lg"
            layout="responsive"  // Adjusted to make the image responsive
            width={1200}          // Added width for responsive layout
            height={800}          // Added height for responsive layout
            priority              // Ensures the image loads faster
            aria-label="Furniture setup in a home"  // Added aria-label for accessibility
          />
        </div>
      </div>
    </section>
  );
}


