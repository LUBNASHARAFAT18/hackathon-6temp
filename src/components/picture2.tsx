const ProductGrid = () => {
    const products = [
      {
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discount: "-30%",
        image: "/syltherine.png",
      },
      {
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        discount: null,
        image: "/leviosa.png",
      },
      {
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/lolito.png",
      },
      {
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        new: true,
        image: "/respira.png",
      },
      {
        name: "Grifo",
        description: "Night lamp",
        price: "Rp 1.500.000",
        image: "/grifo.png",
      },
      {
        name: "Muggo",
        description: "Small mug",
        price: "Rp 150.000",
        new: true,
        image: "/muggo.png",
      },
      {
        name: "Pingky",
        description: "Cute bed set",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discount: "-50%",
        image: "/pingky.png",
      },
      {
        name: "Potty",
        description: "Minimalist flower pot",
        price: "Rp 500.000",
        new: true,
        image: "/potty.png",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white border rounded-lg shadow-sm overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:opacity-75"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="mt-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              {product.new && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button className="bg-white text-black px-4 py-2 rounded shadow-md font-semibold">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-100">
            Show More
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductGrid;
  