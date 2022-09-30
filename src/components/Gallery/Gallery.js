import React from "react";
import { images } from "../../constants";
const Gallery = () => {
  return (
    <div className=" h-[120vh] ">
      <div className="h-[80vh] xl:grid grid-cols-4 lg:grid xl:grid-cols-4  xl:grid-rows-[40] lg:grid-rows-[40] gap-x-10">
      <div className=" col-span-1 row-span-6">
        T1
          </div>
      <div className=" col-span-2 relative row-span-3 ">
        <p className="absolute top-[30%] text-white z-1 bg-red-300">T3</p>
        <video muted autoPlay controls className="realtive z-0 xl:h-[570px] lg:h-[570px] object-cover
         grayscale-[100%] border rounded-[30px] outline-none ">
          <source src={images.gv2} />
        </video>
      </div>
      <div className=" col-span-1 row-span-6 xl:mt-[150px] lg:mt-[150px]">
        T2
        <video muted autoPlay controls className="object-cover  xl:w-[250px] lg:w-[270px] w-[230px] xl:h-[500px] lg:h-[500px] h-[300px] grayscale-[100%] border rounded-[30px] outline-none ">
          <source src={images.gv1} />
        </video>
      </div>
    </div>
      <div className=" col-span-1  row-span-6  ">
        <img src={images.g3} className=" object-cover 
         grayscale-[100%] border rounded-[30px] outline-none xl:w-[550px] lg:w-[550px] xl:h-[280px] lg:h-[280px] bottom-0" />
      </div>
     </div>
  );
};

export default Gallery;
