import React from 'react';

const Shewa = () => {
  return (

      <div className="flex mx-auto gap-4 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover"
            src="gobie.jpeg"
            alt="Category 1"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Lalibela</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover"
            src="gobie.jpeg"
            alt="Category 1"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Gishen(ግሸን)</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover"
            src="gobie.jpeg"
            alt="Category 1"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Category 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
  
  );
}

export default Shewa;
