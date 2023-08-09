import React from 'react';

const TreatmentCard = ({ imageUrl, description }) => {
  return (
    <div
      className="group w-64 relative border border-gray-300 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="h-64 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={description}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-4 text-center bg-white">
        <p
          className="text-gray-400 group-hover:text-black transition-colors duration-300 text-m font-semibold text-shadow"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TreatmentCard;
