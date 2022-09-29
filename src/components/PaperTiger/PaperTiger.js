import React from "react";
import { images, Icons } from "../../constants";
import { motion } from "framer-motion";
const PaperTiger = () => {
  return (
    <div className="flex h-[115vh] border-t-2 border-black py-9 m-4">
      <motion.div className=" relative -left-5">
        <motion.video
          initial={{ width: "700px", height: "800px" }}
          whileInView={{
            width: "350px",
            height: "800px",
            transition: {
              duration: 3,
              delay: 1.6,
            },
          }}
          autoPlay
          muted
          controls
          className=" object-cover outline-none rounded-[30px]"
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
        className="flex flex-col justify-center items-center px-5"
      >
        <p className=" uppercase text-[12px] text-center w-[300px]">
          Aliquid veritatis cupidatat yet reprehenderit for omnis so ad. Minima
          ad and aliquam
        </p>
        <h1 className=" font-title text-[4rem]  text-center uppercase w-[500px]">
          Eius labore nesciunt sunt so sed yet vel. Amet cillum sunt.
        </h1>
        <div className=" flex justify-center items-center mt-10 w-[500px]">
          <button className=" rounded-[30px] border-[3px]  text-[19px]  border-black   font-semibold uppercase p-2 px-12">
            I'm ready to talk to human
          </button>
          <Icons.FiArrowDownRight  className=" rounded-full border p-2 bg-[red] ml-2 " fontSize={45} />
        </div> 
      </motion.div>
      <motion.div 
      className="z-1 relative -right-5">
        <motion.video
          initial={{ width: "700px", height: "800px" }}
          whileInView={{
            width: "350px",
            height: "800px",
            transition: {
              duration: 3,
              delay: 1.6,
            },
          }}
          autoPlay
          muted
          controls
          className=" object-cover outline-none rounded-[30px]"
        >
          <source src={images.paper1}></source>
        </motion.video>
      </motion.div>
    </div>
  );
};

export default PaperTiger;
