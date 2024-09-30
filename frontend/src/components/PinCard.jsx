import React, { useEffect, useState } from 'react';

const PinCard = ({ pin, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Apply the animation when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // Delay each image by 200ms
  }, [index]);

  return (
    <div className={`p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="bg-white overflow-hidden shadow rounded-lg relative group cursor-pointer">
        <div className="w-full h-auto flex justify-center">
          <img
            src={pin.image.url}
            alt=""
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <a
              href={`/pin/${pin._id}`}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Pin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinCard
