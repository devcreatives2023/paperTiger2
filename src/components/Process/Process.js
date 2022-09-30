import React from "react";
import { Icons } from "../../constants";

const Process = () => {
  const data = [
    {
      type: " Doloremque magni",
      service: "Exercitationem laboriosam fugiat fugiat ?",
    },
    {
      type: " Doloremque magni",
      service: "Exercitationem laboriosam fugiat fugiat ?",
    },
    {
      type: " Doloremque magni",
      service: "Exercitationem laboriosam fugiat ?",
    },
    {
      type: " Doloremque magni",
      service: "Exercitationem laboriosam fugiat ?",
    },
    {
      type: " Doloremque magni",
      service: "Exercitationem laboriosam fugiat ?",
    },
  ];
  return (
    <div
      className=" xl:h-[90vh] lg:h-[90vh] font-text border-t-[1px] border-black grid
    xl:grid-cols-4 lg:grid-cols-4 grid-cols-1   items-start py-4"
    >
      <div className=" flex gap-4 col-span-2 xl:text-text lg:text-text items-center uppercase">
        <Icons.FaCircle /> Our Process
      </div>

      <div className="grid  grid-cols-2  col-span-2 justify-between gap-12   ">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className="border-b-2 flex flex-col gap-5 border-[#cac9c9]"
            >
              <p className=" text-sm text-[gray] uppercase">{items.type}</p>
              <p className=" xl:text-items lg:text-items  font-semibold">{items.service}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
