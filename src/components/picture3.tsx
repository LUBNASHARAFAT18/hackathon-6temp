
// pages/index.js
export default function Picture3() {
    return (
      <div className="bg-[#fdfcfb] p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-3x1 lg:text-6xl font-bold mb-4">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-gray-600 mb-6">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-600">
              Explore More
            </button>
          </div>
  
          {/* Right Section - Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="innerpeace.png"
                  alt="innerpeace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4">
                  <p className="text-sm text-gray-600">01 — Bed Room</p>
                  <h3 className="text-lg font-semibold">Inner Peace</h3>
                  <button className="mt-2 inline-flex items-center text-yellow-500 font-medium">
                    <span className="mr-2">Explore</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
  
              {/* Additional Images */}
              <div className="space-y-4">
                <img
                  src="Chair.png"
                  alt="Room 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Room 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
  
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  