import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Header = () => {
  return (
    <div className="font-navFont flex justify-between items-center p-5 max-w-6xl mx-auto">
      <div className="">
        <MenuItem/>
      </div>
      <Link href={"/"} className="flex  items-center">
        <span className="bg-amber-500 font-bold p-2 rounded-xl ">IMDB</span>
        <span className="hidden sm:inline font-bold">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
