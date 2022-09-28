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
    <div className=" h-[80vh] font-text border-t-[2px] border-black grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-x-7  items-start py-4">
      <div className=" flex gap-4  text-text items-center uppercase">
        <Icons.FaCircle /> Service pillars
      </div>
      <div className=" grid grid-cols-2 gap-14  flex-wrap ">
        {data.map((items, index) => {
          return (
            <div key={index} className="border-b-2 gap-y-7 flex flex-col w-[100%] leading-10">
              <p className=" text-sm text-[gray]">{items.arrange} </p>
              <p className=" text-[1.5rem] capitalize font-semibold">{items.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
