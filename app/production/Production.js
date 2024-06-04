"use client";
import React from "react";
import trident from '../../assets/trid.jpeg';
import pttern from '../../assets/Pattern.png';
import fabric from '../../assets/fabric.jpeg';
import cutting from '../../assets/cutting.jpeg';
import Checking from '../../assets/checking.jpeg';
import Ironing from '../../assets/ironing.jpeg';
import Packing from '../../assets/packing.png';
import Sitching from '../../assets/stiching.jpeg';
import marking from '../../assets/marking.jpeg';





import Image from "next/image";
export default function Production() {
  const figures = [
    { figureLink: pttern,
      figureTitle:'Pattern making',
      textDescription:
      'Our cutting department cuts the fabric according to the quantity and size. Our cutting helpers do the numbering on the cut panels to avoid the shading and mixing of the sizes' 
    },
    { figureLink: fabric,
      figureTitle:'Fabrics',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.' 
    },
    { figureLink: marking,
      figureTitle:'Marking',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.'  
    },
    { figureLink: cutting,
      figureTitle:'Cutting',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.' 
    },
    { figureLink: Sitching,
      figureTitle:'Sitching',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.' 
    },
    { figureLink: Checking,
      figureTitle:'Checking',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.' 
    },
    { figureLink: Ironing,
      figureTitle:'Ironing',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.'  
    },
    { figureLink: Packing,
      figureTitle:'Packing',
      textDescription: 
      'We follow chain system in our stitching lines. Our production supervisors take targets according to set layouts and our quality controllers ensure the quality standard during the stitching process.'  
    },
  ];
  return (
    <section className="lg:px-32 md:px-20  bg-[#f4f1e7]">
<div className="flex justify-center">
<h2 className="text-4xl font-mono items-center font-bold pt-20 p-8 ">PRODUCTION</h2>

</div>
      <div className="grid justify-center items-center lg:px-20 " > 
        <h4 className="text-lg sm:text-xl font-serif px-8 pb-14">
          The success of Trident is primarily because of the system that has
          been <br/> placed at all stages of the production process.
        </h4>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3">
        {figures.map((figure, index) => (
          <div key={index} className="flex flex-col items-start">
            <Image
              src={figure.figureLink} 
              alt={`Image not found`} 
              className="w-full h-auto mx-0 rounded-xl transform hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 text-center text-3xl font-semibold">{figure.figureTitle}</p>
            <p className="mt-2 text-start pb-5 hover:text-green-700 transform hover:scale-105 transition-transform duration-300">{figure.textDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


