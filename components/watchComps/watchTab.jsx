import { handleIcon } from "../util/iconHandler";
import Link from "next/link";

const WatchTab = ({ title, ep, date, duration, thumbnail, href }) => {
  return (
    <Link href={href} target="_blank">
      <div className="w-[336px] bg-primary rounded-[16px] overflow-hidden group duration-[.3s] relative cursor-pointer">
        <div className="w-[336px] h-[190px] bg-local bg-no-repeat group-hover:brightness-75 duration-[.3s]">
          <img src={thumbnail} alt="" />
        </div>
        <div className="w-full h-[190px] absolute top-0 opacity-0 group-hover:opacity-100 duration-[.3s] flex justify-center items-center">
          {handleIcon({
            icon: "play",
            className: "text-triory",
            size: "60px",
          })}
        </div>

        <div className="h-[200px] flex flex-col justify-between px-[20px] pt-[10px] pb-[16px] text-white duration-[.3s] group-hover:text-triory uppercase">
          <h1 className="text-[18px] font-nunitoSans font-black h-[130px] text-ellipsis overflow-hidden">
            {title}
          </h1>

          <div className="mt-[6px]"></div>

          <h2 className="text-[16px] font-poppins font-black italic">
            episode {ep}
          </h2>
          <div className="w-full flex justify-between">
            <h3 className="text-[12px] font-poppins text-[#d6d6d6] font-bold group-hover:text-white duration-[.3s]">
              {date}
            </h3>
            <h3 className="text-[12px] font-poppins text-[#d6d6d6] font-bold group-hover:text-white duration-[.3s]">
              {duration}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WatchTab;
