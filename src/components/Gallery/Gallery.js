import React from "react";
import { images } from "../../constants";
const Gallery = () => {
  return (
    <div className=" h-[120vh] ">
      <div className="h-[80vh] grid grid-cols-4  grid-rows-[40] gap-x-10">
      <div className=" col-span-1 row-span-6">
        T1
          </div>
      <div className=" col-span-2 relative row-span-3 ">
        <p className="absolute top-[30%] text-white z-1 bg-red-300">T3</p>
        <video muted autoPlay controls className="realtive z-0 h-[570px] object-cover
         grayscale-[100%] border rounded-[30px] outline-none ">
          <source src={images.gv2} />
        </video>
      </div>
      <div className=" col-span-1 row-span-6 mt-[150px]">
        T2
        <video muted autoPlay controls className="object-cover  w-[270px] h-[500px] grayscale-[100%] border rounded-[30px] outline-none ">
          <source src={images.gv1} />
        </video>
      </div>
    </div>
      <div className=" col-span-1  row-span-6  ">
        <img src={images.g3} className=" object-cover 
         grayscale-[100%] border rounded-[30px] outline-none w-[550px] h-[280px] bottom-0" />
      </div>
     </div>
  );
};

export default Gallery;
