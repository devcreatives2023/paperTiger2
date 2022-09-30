import React from "react";
import { Icons } from "../../constants";
const Services = () => {
  const data = [
    { arrange: "s/1", name: "interactive design" },
    { arrange: "s/2", name: "website enginnering" },
    { arrange: "s/3", name: "contents strategy" },
    { arrange: "s/4", name: "brancd identity" },
    { arrange: "s/5", name: "inbound marketing" },
  ];
  return (
    <div className=" xl:h-[80vh] lg:h-[80vh] h-[70vh] font-text border-t-[1px] border-black grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-7  items-start py-4">
      <div className=" flex gap-4  col-span-2 xl:text-text lg:text-text items-center uppercase">
        <Icons.FaCircle /> Service pillars
      </div>
      <div className=" grid grid-cols-2 col-span-2 gap-14  flex-wrap ">
        {data.map((items, index) => {
          return (
            <div key={index} className="border-b-2 xl:gap-y-7 lg:gap-y-7 flex flex-col w-[100%] leading-10">
              <p className=" text-sm text-[gray]">{items.arrange} </p>
              <p className=" xl:text-items lg:text-items capitalize font-semibold">{items.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
