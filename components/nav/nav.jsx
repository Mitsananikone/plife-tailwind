import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'ABOUT', 'PROCEDURES', 'FAQ', 'RESOURCES', 'QUOTE', 'PRICING', 'PROMO',
  ];

  return (
    <nav className="p-4 bg-transparent">
      <div className="flex items-center justify-between">
        <img src="/images/logo.svg" alt="Logo" className="logo" />
        <div className="hidden md:flex ml-auto"> {/* Align to right */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg uppercase text-white ml-16 transition-all ease-in-out duration-300"
              style={{
                marginLeft: '4em', // Adding 4em margin to the left of each item
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => { e.target.style.textShadow = '2px 2px 4px #2119B4'; }}
              onMouseOut={(e) => { e.target.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)'; }}
            >
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="h-1 w-6 mb-1 bg-black"></div>
          <div className="h-1 w-6 mb-1 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg uppercase text-black hover:text-#2119B4 transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
