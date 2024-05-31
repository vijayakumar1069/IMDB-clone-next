import { menuItems } from "@/app/constants/constvalues";
import Link from "next/link";
import React from "react";
import { FaHome, FaInfo } from "react-icons/fa";

const MenuItem = () => {
  const iconsreturn = (name) => {
    switch (name) {
      case "Home":
        return <FaHome className="text-4xl sm:text-xl text-black" />;
      case "About":
        return <FaInfo className="text-4xl sm:text-xl text-black" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-x-3  font-navFont font-bold ">
      {menuItems.map((item) => (
        <Link href={item.url} key={item.title}>
          <div className="inline  cursor-pointer  sm:hidden">
            {iconsreturn(item.title)}
          </div>
          <div className="ml-2 text-black hidden sm:block uppercase">{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default MenuItem;
