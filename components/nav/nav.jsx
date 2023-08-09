/** @format */

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "ABOUT", link: "/about/page" },
    { name: "BRAND", link: "/home/page" },
    { name: "PROCEDURES", link: "/procedures/page" },
    { name: "FAQ", link: "#faq" },
    { name: "RESOURCES", link: "#resources" },
    { name: "QUOTE", link: "#quote" },
    { name: "PRICING", link: "#pricing" },
    { name: "PROMO", link: "#promo" },
  ];

  return (
    <nav className="p-4 bg-transparent sticky top-0 z-50">
       <div className="flex items-center justify-between">
        <Link href="/home/page" passHref>
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="logo cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex ml-auto">
          {menuItems.map((item, index) => (
            <Link
              href={
                item.link ||
                `#${item.name?.toLowerCase() || item.toLowerCase()}`
              }
              key={index}
              passHref
            >
              <span
                className="text-lg uppercase text-white ml-16 cursor-pointer transition-all ease-in-out duration-300"
                style={{
                  marginLeft: "4em",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.textShadow = "2px 2px 4px #2119B4";
                }}
                onMouseOut={(e) => {
                  e.target.style.textShadow = "1px 1px 2px rgba(0,0,0,0.3)";
                }}
              >
                {item.name || item}
              </span>
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-1 w-6 mb-1 bg-black"></div>
          <div className="h-1 w-6 mb-1 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="hidden md:flex ml-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={
                item.link ||
                `#${item.name?.toLowerCase() || item.toLowerCase()}`
              }
              passHref
              legacyBehavior
            >
              <span
                className="text-lg uppercase text-white ml-16 cursor-pointer transition-all ease-in-out duration-300"
                style={{
                  marginLeft: "4em",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.textShadow = "2px 2px 4px #2119B4";
                }}
                onMouseOut={(e) => {
                  e.target.style.textShadow = "1px 1px 2px rgba(0,0,0,0.3)";
                }}
              >
                {item.name || item}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
