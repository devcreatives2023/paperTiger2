import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constants";

const Navbar = ({color,contact}) => {
  const [bgnavbar,setBgNavbar]=React.useState(false)
  return (
    <div className=" grid grid-cols-2 font-text xl:p-xl  items-center lg:p-xl px-2" style={{color:color}}>
      <div className="  flex gap-x-[137px] ">
        <div className=" flex items-center font-semibold text-2xl tracking-wider">
         PaperTiger
        </div>
        <div className=" invisible xl:visible lg:visible "> 
        <ul className=" flex gap-5 mt-2 text-xl">
          <li><Link to=""> Work </Link></li>
          <li><Link to=""> About </Link></li>
          <li><Link to=""> Careers </Link></li>
          </ul></div>
      </div>
      <div className="flex justify-end gap-x-3 items-end  cursor-pointer   invisible xl:visible lg:visible" style={{fontSize:contact}}>
        <p className=" rounded-[60px] px-2 border text-center p-1  uppercase font-semibold  " style={{borderColor:color}}>Contact us </p>
        <button className=" rounded-full border p-2" style={{borderColor:color}}><Icons.FiArrowDownRight /></button>
      </div>

    </div>
  );
};

export default Navbar;
