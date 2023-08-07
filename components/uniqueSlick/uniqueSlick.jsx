import React, { useState, useEffect } from 'react';

const UniqueSlick = () => {
  const words = ['LIFE', 'PRICE', 'EXPERIENCE'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 300); // Half of transition duration
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ marginTop: '35%', width: '70%', marginLeft: '15%' }}>
      <div className="flex flex-col items-center w-full font-roboto text-gray-200">
        <div className="flex justify-between w-full font-bold text-shadow-lg" style={{ fontSize: 'calc(2vw + 2.3em)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          <span className="text-left">UNIQUE</span>
          <span className={`text-right transition-opacity duration-600 ease-in ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {words[currentWordIndex]}
          </span>
        </div>
        <div className="flex justify-between w-full text-center font-bold font-roboto whitespace-nowrap text-shadow-sm" style={{ fontSize: 'calc(1vw + 0.2em)', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          <span>Top Surgeons and Specialists</span>
          <span> - Affordable Pricing -</span>
          <span>Free Consultation</span>
        </div>
      </div>
      <button
        className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded ml-32 whitespace-nowrap h-16 align-middle shadow-lg hover:shadow-xl transition-all"
        style={{ borderRadius: '4px' }}
      >
        REQUEST QUOTE
      </button>
    </div>
  );
};

export default UniqueSlick;
