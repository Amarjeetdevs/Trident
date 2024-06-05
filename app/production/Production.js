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
      "This section highlights the importance of accurate pattern creation in ensuring consistent sizing and fit throughout production. " 
    },
    { figureLink: fabric,
      figureTitle:'Fabrics',
      textDescription: 
      'This section could delve into the types of fabrics used at Trident, considering factors like durability, breathability, and aesthetics. It might also explore the "chain system" mentioned for stitching lines, explaining how it optimizes fabric usage and reduces waste.' 
    },
    { figureLink: marking,
      figureTitle:'Marking',
      textDescription: 
      "At Trident, marking is pivotal. We plan patterns with precision, using a chain system for efficiency. Numbering panels prevents errors. Advanced tech like laser cutters ensures top-notch cuts."  
    },
    { figureLink: cutting,
      figureTitle:'Cutting',
      textDescription: 
      "Our cutting department tailors fabric to match specified quantities and sizes, customizing it according to required specifications." 
    },
    { figureLink: Sitching,
      figureTitle:'Sitching',
      textDescription: 
      ' Emphasize the quality control measures implemented during stitching, involving production supervisors setting targets based on layouts and quality controllers ensuring adherence to standards.' 
    },
    { figureLink: Checking,
      figureTitle:'Checking',
      textDescription: 
      'Our checking process is rigorous. Our dedicated team meticulously inspects each product to ensure it meets our high quality standards. With attention to detail and thoroughness, we guarantee excellence in every item.' 
    },
    { figureLink: Ironing,
      figureTitle:'Ironing',
      textDescription: 
      "Ironing is a crucial step in our production process. Our skilled team meticulously presses each garment to perfection, ensuring a crisp and polished finish. With precision and care, we uphold the quality of our products."  
    },
    { figureLink: Packing,
      figureTitle:'Packing',
      textDescription: 
      'Packing is handled with precision and efficiency. Our team carefully packages each item, ensuring it arrives in pristine condition. With attention to detail and careful handling, we ensure that our products are ready for delivery.'  
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


