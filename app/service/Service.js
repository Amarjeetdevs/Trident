"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../assets/trid.jpeg";
import image2 from "../../assets/trid.jpeg";
import image3 from "../../assets/trid.jpeg";

const services = [
  {
    image: image1,
    title: "Sportswear",
    description:
      "Our Sportswear and Activewear range are produced with the best fabrics to ensure comfort and utility while doing any sport or physical exercise. Our product range includes tracksuits, track pants, team jackets, shorts, T-shirts and polo shirts.",
  },
  {
    image: image2,
    title: "Workwear",
    description:
      "Workwear uniform is the main product for the industrial sector. We source our fleece from reliable suppliers to ensure good comfort and quality. We have been producing fleece wear in all kinds of jackets, shirts, pants and sweatshirts.",
  },
  {
    image: image3,
    title: "Service 3",
    description: "Description for service 3.",
  },
];

export default function Service() {
  return (
    <section className="lg:px-32 md:px-20 bg-[#f4f1e7] py-12">
      <h2 className="text-4xl font-mono font-bold text-center mb-8">
        Our Services
      </h2>
      <h3 className="text-xl py-3">
        AMCO over the past 5 decades has gained great expertise in manufacturing
        outerwear, sportswear, activewear, and fleecewear for mens, womens and
        children in all size range. We have expertise in producing the finest
        garments within these product range with the most intricate design and
        specifications.
      </h3>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-auto md:w-1/2 rounded-xl"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="p-4 md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
