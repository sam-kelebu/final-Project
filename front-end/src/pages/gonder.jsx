import React from "react";



const Gonder = () => {
  return (
   
      <div className="flex-col items-center  min-h-screen bg-gray-100 mt-[20] w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end">
        {/* Content */}
        <div className="flex flex-col md:flex-row mx-auto gap-4 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-full h-40 object-cover rounded-t-lg"
              src=""
              alt="Category 1"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 animate-fadeIn">
                Lalibela
              </h2>
              <p className="text-gray-700 animate-slideInLeft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Now
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-full h-40 object-cover rounded-t-lg"
              src=".jpeg"
              alt="Category 1"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 animate-fadeIn">
                Gishen(ግሸን)
              </h2>
              <p className="text-gray-700 animate-slideInLeft">
                2120 meters, the cool highland climate .
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Now
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-full h-40 object-cover rounded-t-lg"
              src="keranio.jpeg"
              alt="Category 1"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 animate-fadeIn">
                Fasil Castel
              </h2>
              <p className="text-gray-700 animate-slideInLeft">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-8">
          <div className="container mx-auto rounded-lg overflow-hidden relative transform hover:scale-105 transition-transform duration-300 ease-in-out">
            {/* Image */}
            <img
              className="w-full h-60  object-cover"
              src="gmb1.jpeg"
              alt="Category 1"
            />
            {/* Text Content */}
            <div className="">
              <h2 className="text-3xl font-bold mb-2 animate-fadeIn">
                Category 1
              </h2>
              <p className="text-gray-700 animate-slideInRight ">
                The castles and palaces of Gondar originate from the 17th and
                18th centuries when the Ethiopian royal court established their
                capital
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Gonder;
