import Typography from "../typography/typography";
import { esnLogoRed } from "../../public/assets";

const Title = ({ title, color, className }) => {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex items-center mr-[10px]">
          <img
            src={esnLogoRed.default.src}
            alt=""
            className="w-[75px] h-[75px]"
          />
          <span className="ml-[20px] text-secondary uppercase leading-none text-[50px] italic font-poppins font-black">
            ESN{" "}
          </span>
        </div>

        <p
          className={`${
            color ? color : "text-primary"
          } uppercase leading-none text-[50px] italic font-poppins font-black break-words`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default Title;
