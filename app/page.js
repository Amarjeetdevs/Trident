"use client";
import Collection from "@/components/Collection";
import HeroBanner from "@/components/HeroBanner";
import HeroBottom from "@/components/HeroBottom";
import HomeProducts from "@/components/HomeProducts";
import { useState } from "react";
import Production from "./production/Production";
import About from "@/components/About";

export default function Home() {
  const [show] = useState(true);
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <HeroBottom/>
      <About/>
      {/* <Collection /> */}
      <Production/>
      {/* <span className="text-2xl bg-[#f4f1e7] font-bold text-center pt-10 pb-10">
        Recent Products List
      </span> */}
      {/* <HomeProducts show={show} /> */}
    </div>
  );
}
