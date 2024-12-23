const Index = () => {
    return (
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10 justify-center">
          <div className="w-full sm:w-3/4 px-10 py-10 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-black">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl text-gray-700">3 Items</h2>
            </div>
  
            {/* Product Card */}
            <div className="md:flex items-center py-8 md:py-10 lg:py-8 border-t border-gray-200">
              <div className="md:w-4/12 w-full flex justify-center">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
              <div className="md:pl-6 md:w-8/12 flex flex-col justify-center items-center text-center md:text-left">
                <p className="text-xs leading-3 text-gray-500">RF293</p>
                <p className="text-lg font-bold text-black mt-2">Luxe Card Holder</p>
                <p className="text-xs text-gray-500 mt-1">Height: 10 inches</p>
                <p className="text-xs text-gray-500 mt-1">Color: Black</p>
                <p className="text-xs text-gray-500 mt-1">Composition: 100% calf leather</p>
                <div className="flex items-center justify-center mt-4">
                  <p
                    className="text-xs leading-3 underline text-red-500 cursor-pointer hover:text-red-700"
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
  
            {/* Another Product Card */}
            <div className="md:flex items-center py-8 md:py-10 lg:py-8 border-t border-gray-200">
              <div className="md:w-4/12 w-full flex justify-center">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
              <div className="md:pl-6 md:w-8/12 flex flex-col justify-center items-center text-center md:text-left">
                <p className="text-xs leading-3 text-gray-500">RF293</p>
                <p className="text-lg font-bold text-black mt-2">Luxe Card Holder</p>
                <p className="text-xs text-gray-500 mt-1">Height: 10 inches</p>
                <p className="text-xs text-gray-500 mt-1">Color: Black</p>
                <p className="text-xs text-gray-500 mt-1">Composition: 100% calf leather</p>
                <div className="flex items-center justify-center mt-4">
                  <p
                    className="text-xs leading-3 underline text-red-500 cursor-pointer hover:text-red-700"
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
  
            {/* Continue Shopping Button */}
            <div className="flex justify-center mt-10">
              <a
                href="#"
                className="flex items-center font-semibold text-sm text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <svg
                  className="fill-current mr-2 text-white w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Index;
  