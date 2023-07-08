import logo from "@/../public/assets/logoWhite.png";
import Text from "./text";
import twitch from "@/../public/assets/twitch.svg";
import facebook from "@/../public/assets/facebook.svg";
import instagram from "@/../public/assets/instagram.svg";
import youtube from "@/../public/assets/youtube.svg";
import copyright from "@/../public/assets/copyright.svg";
import Link from "next/link";

const Footer = () => {
  const datas = [
    {
      text: "Бидний Тухай",
      href: "/about",
    },
    {
      text: "Контент",
      href: "/content",
    },
  ];

  const icons = [
    {
      name: twitch,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.twitch.tv/esportsnetwork_live",
    },
    {
      name: facebook,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.facebook.com/esn.esportsnetwork",
    },
    {
      name: instagram,
      className: "h-[30px] cursor-pointer mr-[30px]",
      href: "https://www.instagram.com/esn_esportsnetwork/",
    },
    {
      name: youtube,
      className: "h-[30px] cursor-pointer",
      href: "https://www.youtube.com/@esn.esportsnetwork",
    },
  ];

  return (
    <div className="h-[200px] w-full bg-[#252c3b] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <img src={logo.src} alt="" className="w-[100px] mr-[40px]" />
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
              <Link href={icon.href} target="_blank">
                <img
                  src={icon.name.src}
                  alt=""
                  className={icon.className}
                  key={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-[20px]"></div>
      <div className="border-b border-[#ffffff] w-[600px]"></div>
      <div className="mt-[20px]"></div>
      <div className="w-[600px] flex justify-between items-start">
        <div className="flex items-center">
          <img src={copyright.src} alt="" className="w-[12px] mr-[6px]" />
          <p className="text-[#bbb8b8] text-[14px]">ESN 2023</p>
        </div>
        <p className="text-[#bbb8b8] w-[500px] text-right text-[12px]">
          1 тоот, Nomadia Pictures, Үйлдвэрчний гудамж 20, Хан-Уул Дүүрэг,
          Улаанбаатар, Монгол улс
        </p>
      </div>
    </div>
  );
};

export default Footer;
