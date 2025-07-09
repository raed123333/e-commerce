"use client";

import React from "react";
import Slider from "react-slick";
import Slide3 from "./Slide3";

import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";

// Optional: slick-carousel CSS (required for default styles)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  const slideData = [
    {
      id: 1,
      image: img1,
      title: "New Arrival hhh",
      mainTitle: "Trendy Fashion 2025",
      price: "49",
    },
    {
      id: 2,
      image: img2,
      title: "Hot Deal",
      mainTitle: "Summer Vibes Sale",
      price: "59",
    },
    {
      id: 3,
      image: img3,
      title: "Best Seller",
      mainTitle: "Smart Watches & More",
      price: "79",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-8">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide3
            key={item.id}
            image={item.image}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
