import logo from "@/../../public/assets/logoWhite.png";
import Text from "./text";
import tournamentLogo from "@/../../public/assets/national.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const datas = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Watch",
      href: "/content",
    },
    {
      text: "Tournaments",
      href: "/tournament",
    },
  ];

  const CheckPath = (href) => {
    const pathname = usePathname();
    if (href === pathname) {
      return true;
    }
    return false;
  };

  return (
    <div
      className="w-full h-[60px] backdrop-blur-[10px] flex justify-between fixed top-0 z-50 px-[50px]"
      style={{ backgroundColor: "rgb(19,26,44, 0.5)" }}
    >
      <Link href={"/"} className="h-full">
        <img src={logo.src} alt="" className="h-full ml-[50px] py-[8px]" />
      </Link>
      <div className="h-full flex items-center justify-center">
        {datas.map((data, index) => {
          return (
            <Text
              text={data.text}
              href={data.href}
              key={index}
              active={CheckPath(data.href)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
