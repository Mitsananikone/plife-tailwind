/** @format */

import Link from "next/link";

export default function CosmeticSurgeryCard() {
  return (
    <div className="flex h-screen bg-transparent pt-16 w-full items-start" >
    <div className="p-10 pt-32 fixed top-16 left-0 w-45/100 flex flex-col justify-center text-gray-700"> {/* Fixed positioning */}
      <h1 className="text-7xl font-bold text-gray-600" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>COSMETIC</h1>
        <h2 className="text-7xl font-bold text-gray-600" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>SURGERY</h2>
        <p className="text-2xl mt-4 w-3/5 text-gray-700" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
          Explore our popular beauty treatment offers and choose your products
        </p>
      
        <div className="mt-12 space-y-2 text-gray-400 ">
        <h1 className="text-5xl text-gray-700" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>BREAST IMPLANT</h1>
          <h1 className="text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>BREAST LIFT</h1>
          <h1 className="text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>NOSE ENGINEER</h1>
          <h1 className="text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>BODY SHAPE LIFTING</h1>
          <h1 className="text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>FACE AUGMENTATION</h1>
        </div>
        <Link href="/procedures/type/page" passHref>
            <button
              className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 shadow-lg hover:shadow-xl transition-all mt-8 w-64 hover:text-white"
              style={{ borderRadius: "4px" }}
            >
              See More
            </button>
          </Link>
      </div>

      <div className="ml-45/100 w-55/100 h-full overflow-y-auto p-10">

      </div>
    </div>
  );
}
