import React from "react";
import { Icons } from "../../constants";
const Guiding = () => {
  return (
    <div
      className="xl:h-[50vh] lg:h-[50vh] h-[120vh] font-text border-t-[2px] border-black grid
    xl:grid-cols-4 lg:grid-cols-4 grid-cols-1   items-start py-4"
    >
      <div className=" col-span-1  xl:text-text lg:text-text items-center uppercase">
        <p className=" leading-5">
          <span className=" flex gap-x-2 items-center">
            <Icons.FaCircle /> Guiding
          </span>
          <span className="ml-9"> Principles </span>
        </p>
      </div>
      <div className=" col-span-1 text-[18px]">
        t. Beatae consequat quis ullamco. Quis ipsa quisquam so in, eu but iste.
        Cupidatat labore occaecat but eu. Eiusmod fugit aute error. Mollit aut.
        Commodo nostrum or est and quisquam, yet velit. Amet velit so aute.{" "}
      </div>
      <div className=" col-span-2">


      </div>
    </div>
  );
};

export default Guiding;
