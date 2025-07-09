"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface PropseType {
  image: StaticImageData;
  mainTitle: string;
  title: string;
  price: string;
}

const Slide3: React.FC<PropseType> = ({ image, title, mainTitle, price }) => {
  return (
    <div className="relative outline-none border-none">
      <div className="absolute left-[20px] sm:left-[40px] max-w-[300px] sm:max-w-[400px] top-1/2
                      -translate-y-1/2 space-y-2 lg:space-y-4 bg-[#FFFFFFcc] sm:bg-transparent p-4 sm:p-0
                      rounded-lg sm:rounded-none">
        <h3 className="text-pink-200 text-[20px] sm:text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-black text-[24px] sm:text-[30px] lg:text-[44px] font-bold leading-tight">
          {mainTitle}
        </h2>
        <h3 className="text-[20px] sm:text-[24px] text-gray-500">
          Starting at{" "}
          <b className="text-[22px] sm:text-[26px] lg:text-[30px]">{price}</b>.00
        </h3>
        <div className="bg-pink-500 text-white text-[14px] sm:text-[16px] p-2 px-4 rounded-lg
                        inline-block cursor-pointer hover:bg-black transition">
          Shop Now
        </div>
      </div>

      <Image
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-xl"
        src={image}
        alt="banner"
        width={2000}
        height={500}
        priority
      />
    </div>
  );
};

export default Slide3;
