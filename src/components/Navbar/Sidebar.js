import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Sidebar = () => {
  return (
    <motion.div className="visible xl:invisible lg:invisible md:invisible bg-red-300  h-[400px] flex flex-col fixed top-0 left-0 right-0 " >
      <ul>
        <li className=" border-t-2 border-black">
          <Link to="">Work</Link>
        </li>
        <li className=" border-t-2 border-black">
          <Link to="">About</Link>
        </li>
        <li className=" border-t-2 border-black">
          <Link to="">Careers</Link>
        </li>
        <li className=" border-t-2 border-black">
          <Link to="">Contact Us</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
