import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
export default function page() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 rounded-lg bg-white w-[90%] max-w-[1200px] mx-auto mt-4 py-8 lg:gap-20">
      {/* Left Section - Image */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        <Image
          src='/Frame.png'
          alt="Nike Dri-FIT ADV TechKnit Ultra"
          className="w-full h-auto object-cover"
          width={400}
          height={400}
        />
      </div>

      {/* Right Section - Content */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
        <h2 className={`text-xl lg:text-4xl font-medium text-deepBlack mb-4 `}>
          Nike Air Force 1 PLT.AF.ORM
        </h2>
        <p className={`text-sm font-light text-deepBlack mb-6 leading-7`}>
        Men&apos;s Short-Sleeve Running Top
        </p>
        <p className={`text-4xl font-medium text-deepBlack mb-6 `}>
          ₹ 3 895.00
        </p>
        <button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          <CiShoppingCart className="w-6 h-6 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
