"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ServiceCategories } from "../../data/serviceCategories";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";

export default function ServicePage() {
  const pathname = usePathname();
  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (pathname) {
      const service = decodeURIComponent(pathname.split("/").pop());
      if (service) {
        const sanitizedService = service.toLowerCase().replace(/\s+/g, "-");
        console.log(sanitizedService);
        const content = ServiceCategories[sanitizedService];
        if (content) {
          setServiceContent(content);
        } else {
          console.error(`No content found for service: ${sanitizedService}`);
        }
      }
    }
  }, [pathname]);

  if (!serviceContent) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  return (
    <div className="lg:py-12 px-4 md:py-14 pb-14 bg-[#f4f1e7]">
      <div className="lg:px-24  lg:mb-16 flex justify-center">
        <h1 className="lg:text-4xl text-gray-800 mt-5 font-semibold mb-2 text-3xl">
          {serviceContent.title}
        </h1>
      </div>
      <div className="grid grid-wrap lg:px-32">
        <div className=" mt-4 md:mt-0 md:ml-8  ">
          <div className="flex justify-center text-center lg:pb-12">
            <p className="lg:text-3xl font-bold font-sans pb-5 text-2xl">
              {serviceContent.subtitle}
            </p>
          </div>
          <div className=" mx-10 sm:flex grid gap-12 pb-10 justify-center">
            <Image
              src={serviceContent.imageUrl5}
              alt={serviceContent.title}
              width={500}
              height={400}
              className="rounded-2xl  w-64 h-72 transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src={serviceContent.imageUrl2}
              alt={serviceContent.title}
              width={500}
              height={400}
              className="rounded-2xl w-64 h-72  transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src={serviceContent.imageUrl3}
              alt={serviceContent.title}
              width={500}
              height={400}
              className="rounded-2xl  w-64 h-72 transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src={serviceContent.imageUrl4}
              alt={serviceContent.title}
              width={500}
              height={400}
              className="rounded-2xl w-64 h-72 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-md  font-sans text-justify pb-5 sm:text-md">
            {serviceContent.description}
          </p>
          <p className="text-md font-sans pb-5 text-justify sm:text-md">
            {serviceContent.description2}
          </p>
          <p className="text-md font-sans pb-5 text-justify sm:text-md">
            {serviceContent.description3}
          </p>
        </div>
      </div>
    </div>
  );
}
