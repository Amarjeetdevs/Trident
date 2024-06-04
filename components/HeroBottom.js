import React from "react";

export default function HeroBottom() {
  return (
    <div className="hidden lg:flex bg-[#f4f1e7]  py-20 justify-between px-40 space-x-8 p-4 ">
      <div className="bg-[#98431e] text-white hover:bg-white hover:text-black shadow-md   shadow-slate-500 p-6 rounded-lg flex-1">
        <h3 className="text-xl font-serif font-semibold mb-2">FREE SHIPPING</h3>
        <p className="text-sm">
          There are many variations of passages of Lorem Ipsum available,
          alteration
        </p>
      </div>
      <div className="bg-[#98431e] text-white hover:bg-white hover:text-black  shadow-md   p-6  shadow-slate-500 rounded-md flex-1">
        <h3 className="text-xl font-serif font-semibold mb-2">HELP LINE</h3>
        <p className="text-sm">
          (+112) 1925184203 - call any time for any support Lorem Ipsum
          available, alteration
        </p>
      </div>
      <div className="bg-[#98431e] text-white hover:bg-white hover:text-black shadow-md p-6  shadow-slate-500 rounded-md flex-1">
        <h3 className="text-xl font-serif font-bold mb-2">
          MONEY BACK GUARANTEE
        </h3>
        <p className="text-sm">
          There are many variations of passages of Lorem Ipsum available,
          alteration
        </p>
      </div>
    </div>
  );
}
