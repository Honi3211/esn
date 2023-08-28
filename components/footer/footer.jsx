import { esnFullWhite } from "../../public/assets";
import {
  youtube,
  facebook,
  twitch,
  instagram,
  copyright,
} from "../../public/svgs";
import Text from "./text";
import Link from "next/link";

const Footer = () => {
  const datas = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Watch",
      href: "/watch",
    },
  ];

  const icons = [
    {
      name: twitch.default,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.twitch.tv/esportsnetwork_live",
    },
    {
      name: facebook.default,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.facebook.com/esn.esportsnetwork",
    },
    {
      name: instagram.default,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.instagram.com/esn_esportsnetwork/",
    },
    {
      name: youtube.default,
      className: "h-[30px] cursor-pointer",
      href: "https://www.youtube.com/@esn.esportsnetwork",
    },
  ];

  return (
    <div className="h-[200px] w-full bg-[#0f111b] flex-col justify-center items-center md:flex hidden">
      <div className="flex justify-center items-center border-b border-[#ffffff] pb-[20px] ">
        <img
          src={esnFullWhite.default.src}
          alt=""
          className="w-[100px] mr-[40px]"
        />
        <div className="flex justify-around">
          {datas.map((data, index) => {
            return (
              <Text
                text={data.text}
                href={data.href}
                className={"mr-[40px]"}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex items-center">
          {icons.map((icon, index) => {
            return (
              <Link href={icon.href} target="_blank" key={index}>
                <img src={icon.name.src} alt="" className={icon.className} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-[20px]"></div>
      <div className="w-[530px] flex justify-between items-start">
        <div className="flex items-center">
          <img
            src={copyright.default.src}
            alt=""
            className="w-[12px] mr-[6px]"
          />
          <p className="text-[#bbb8b8] text-[14px]">ESN 2023</p>
        </div>
        <p className="text-[#bbb8b8] w-[400px] text-right text-[12px]">
          1 тоот, Nomadia Pictures, Үйлдвэрчний гудамж 20, Хан-Уул Дүүрэг,
          Улаанбаатар, Монгол улс
        </p>
      </div>
    </div>
  );
};

export default Footer;
