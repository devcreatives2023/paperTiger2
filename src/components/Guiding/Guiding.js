import React from "react";
import { Icons } from "../../constants";
const Guiding = () => {
  const data = [
    { arrange: "P/1", name: "interactive design" },
    { arrange: "P/2", name: "website enginnering" },
    { arrange: "P/3", name: "contents strategy" },
    { arrange: "P/4", name: "brancd identity" },
    { arrange: "P/5", name: "inbound marketing" },
  ];
  return (
    <div
      className="xl:h-[70vh]  lg:h-[90vh]  h-[120vh] font-text border-t-[1px]
    border-black grid
      xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 items-start py-4"
    >
      <div className=" col-span-1 xl:text-text text-[10px] lg:text-text uppercase  ">
        <p className=" leading-5">
          <span className=" flex xl:gap-x-2 lg:gap-x-2  items-center">
            <Icons.FaCircle /> Guiding
          </span>
          <span className="ml-9"> Principles </span>
        </p>
      </div>
      <div className=" col-span-1 xl:text-[19px] lg:text-[19px] leading-8 mt-12 xl:mt-0 lg:mt-0 xl:ml-[-40px] lg:-ml-[20px]">
        Beatae consequat quis ullamco. Quis ipsa quisquam so in, eu but iste.
        Cupidatat labore occaecat but eu. Cupidatat labore occaecat but eu. so
        in, eu but iste.
      </div>
      <div className=" col-span-2 grid grid-cols-2 gap-10">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="border-b-2 ml-4 gap-y-[22px] flex flex-col w-[100%] leading-10"
            >
              <p className=" text-sm text-[gray]">{items.arrange} </p>
              <p className=" xl:text-items lg:text-items capitalize font-semibold">
                {items.name}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guiding;
