import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="lg:px-32 text-center bg-[#f4f1e7] p-4">
      <div className="flex justify-center">
        <p className="text-4xl py-8 font-bold font-mono">About Us</p>
      </div>
      <h2 className="text-lg sm:text-xl font-serif px-8 pb-14">
        At Trident, we are dedicated to providing high-quality uniforms that blend
        functionality with style. Our mission is to ensure that professionals in
        various fields, from healthcare to sports, can perform their duties with
        confidence and comfort. With a focus on innovation and customer
        satisfaction, we strive to create uniforms that not only meet but exceed
        our clients&#39; expectations. Our team of experts works tirelessly to
        design and manufacture uniforms that promote unity, professionalism, and
        trust.
      </h2>
      <div className="flex justify-center font-sans">
        <Link
          href="/about"
          className="inline-block rounded-md border border-transparent bg-amber-900 px-8 py-3 text-center font-medium hover:text-black hover:bg-white text-white "
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

