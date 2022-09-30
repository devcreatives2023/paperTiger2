import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../constants'
const Nav = () => {
  return (
    <div className=' text-white  invisible xl:visible lg:visible'>
        <div
        className=" grid grid-cols-2 font-text xl:p-xl  items-center lg:p-xl px-2"
      >

        <div className="  flex items-center gap-x-[137px] ">
          <div className=" flex items-center font-semibold text-2xl tracking-wider">
            PaperTiger
          </div>
          <div className=" invisible xl:visible lg:visible ">
            <ul className=" flex gap-5 mt-2 text-xl">
              <li>
                <Link to=""> Work </Link>
              </li>
              <li>
                <Link to=""> About </Link>
              </li>
              <li>
                <Link to=""> Careers </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex justify-end gap-x-3 items-end  cursor-pointer   invisible xl:visible lg:visible"
        >
          <p
            className=" text-[2rem] rounded-[60px] px-4 border text-center  uppercase font-semibold  "
            >
            Contact us
          </p>
          <button
            className=" rounded-full border p-2"
            >
            <Icons.FiArrowDownRight  fontSize={30}/>
          </button>
        </div>
      </div>
              </div>
  )
}

export default Nav