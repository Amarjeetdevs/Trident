import Image from "next/image";
import Link from "next/link";
import fibre from '../assets/fabric.jpeg'
import child from '../assets/child.jpg'
import hsptl from '../assets/hsptl.jpg'
import plce from '../assets/plice.avif'
import crpt from '../assets/corporate.jpeg'
import sprt from '../assets/sprt.avif'


const HeroBanner = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-[#f4f1e7]">
        <div className="pb-40 pt-16 sm:pb-40 sm:pt-24 lg:pb-48  lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
           <div className="pb-4">
            <h2 className="text-xl" >
              The
            </h2>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              NEXT GENERATION
            </h2>
            <h2 className="text-xl">
              UNIFORM THEME
            </h2>
           </div>
            <div className="sm:max-w-lg">
              <h1 className="text-5xl font-mono tracking-tight text-gray-900 sm:text-7xl">
                Summer styles are finally here
                <br />
                <p className="text-6xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  2.O
                </p>
              </h1>
              {/* <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesnt care if you live or die.
              </p> */}
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            width={300}
                            height={300}
                            src={fibre}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5pZm9ybXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src={child}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src={hsptl}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src={plce}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src={crpt}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src={sprt}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block rounded-md border border-transparent bg-amber-900 px-8 py-3 text-center font-medium hover:text-black hover:bg-white text-white "
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
