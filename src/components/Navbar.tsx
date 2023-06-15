import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 -z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="data:image/png;base64,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"
          className="w-9 h-9 rounded-full"
          alt="logo"
        />
      </div>
    </div>
  );
}
