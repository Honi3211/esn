import Typography from "../typography/typography";
import { esnLogoRed } from "../../public/assets";

const Title = ({ title, className }) => {
  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center items-center mr-[10px]">
        <img
          src={esnLogoRed.default.src}
          alt=""
          className="w-[75px] h-[75px]"
        />
        <span className="ml-[10px] text-secondary uppercase leading-none text-[50px] italic font-poppins font-black">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Title;
