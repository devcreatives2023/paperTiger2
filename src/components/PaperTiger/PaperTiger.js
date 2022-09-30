import React from "react";
import { images, Icons } from "../../constants";
import { motion } from "framer-motion";
const PaperTiger = () => {
  return (
    <div className="flex flex-col  xl:flex-row lg:flex-row xl:h-[115vh] lg:h-[115vh] border-t-2 border-black py-9 m-4">
      <motion.div className=" relative xl:-left-5 lg:-left-5">
        <motion.video
          initial={{ width: "700px" }}
          whileInView={{
            width: "350px",
            transition: {
              duration: 3,
              delay: 1.6,
            },
          }}
          autoPlay
          muted
          controls
          className=" object-cover xl:h-[800px] lg:h-[800px] h-[150px] outline-none rounded-[30px]"
        >
          <source src={images.paper1}></source>
        </motion.video>
      </motion.div>
      <motion.div
        initial={{ width: "0px", opacity: 0 }}
        whileInView={{
          width: "800px",
          opacity: 1,
          transition: {
            delay: 2,
            duration: 1,
          },
        }}
        className="flex flex-col xl:justify-center lg:justify-center  xl:items-center lg:items-center px-5"
      >
        <p className=" uppercase xl:text-[12px] text-[8px] lg:text-[12px] text-center   w-[300px]">
          Aliquid veritatis cupidatat yet reprehenderit for omnis so ad. Minima
          ad and aliquam
        </p>
        <h1 className=" font-title xl:text-[4rem] lg:text-[4rem] text-center
         uppercase xl:w-[500px] lg:w-[500px] w-[200px]">
          Eius labore nesciunt sunt so sed yet vel. Amet cillum sunt.
        </h1>
        <div className=" flex xl:justify-center lg:justify-center items-center xl:mt-10 lg:mt-10 mt-5 xl:w-[500px] lg:w-[500px]">
          <button className=" rounded-[30px] border-[3px]  xl:text-[19px] lg:text-[19px] text-[12px]
            border-black   font-semibold uppercase p-2 xl:px-12 lg:px-12">
            I'm ready to talk to human
          </button>
          <Icons.FiArrowDownRight  className=" rounded-full border p-2 bg-[red] ml-2 " fontSize={45} />
        </div> 
      </motion.div>
      <motion.div 
      className="z-1 relative xl:-right-5 lg:-right-5">
        <motion.video
          initial={{ width: "700px" }}
          whileInView={{
            width: "350px",
            transition: {
              duration: 3,
              delay: 1.6,
            },
          }}
          autoPlay
          muted
          controls
          className=" object-cover outline-none rounded-[30px] xl:h-[800px] lg:h-[800px] h-[150px]"
        >
          <source src={images.paper1}></source>
        </motion.video>
      </motion.div>
    </div>
  );
};

export default PaperTiger;
