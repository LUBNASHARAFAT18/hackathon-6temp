const BrowseRange = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">Browse The Range</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="/MaskGroup.png"
              alt="MaskGroup"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-4 font-medium text-lg">Dining</h3>
          </div>
          <div className="text-center">
            <img
              src="/living.png"
              alt="living"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-4 font-medium text-lg">Living</h3>
          </div>
          <div className="text-center ">
            <img
              src="/badroom.png"
              alt="bedroom"
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-4 font-medium text-lg">Bedroom</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default BrowseRange;
  