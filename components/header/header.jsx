import { esnLogoRed } from "../../public/assets";
import Text from "./text";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const datas = [
    [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "About",
        href: "/about",
      },
    ],
    [
      {
        text: "Watch",
        href: "/watch",
      },
      {
        text: "Tournaments",
        href: "/tournaments",
      },
    ],
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
      className="w-full shadow-lg h-[60px] backdrop-blur-[10px] flex justify-center fixed top-0 z-50 px-[50px]"
      style={{ backgroundColor: "rgb(25, 29, 45, 0.8)" }}
    >
      <div className="h-full flex items-center justify-center">
        {datas[0].map((data, index) => {
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

      <Link href={"/"}>
        <img
          src={esnLogoRed.default.src}
          alt=""
          className="h-full py-[8px] px-[40px] mx-[12px]"
        />
      </Link>

      <div className="h-full flex items-center justify-center">
        {datas[1].map((data, index) => {
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
