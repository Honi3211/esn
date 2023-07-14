import YearTab from "./yearTab";
import { bg } from "../../public/assets";

const YearLine = ({
  title,
  img,
  date,
  isFirst = false,
  isLast = false,
  isLogoRight = false,
  imgSize,
  game,
}) => {
  return (
    <div>
      {isLogoRight ? (
        <div className="w-full h-[500px] flex items-center justify-center">
          <p className="text-[#a5a4a4] w-[350px] font-poppins text-[22px] font-light text-end italic">
            {date}
          </p>
          <div
            className={`${
              isFirst
                ? "rounded-t-lg rounded-b-none border-triory"
                : isLast
                ? "rounded-b-lg rounded-t-none"
                : "border-white"
            } h-full border-[4px] w-0 mx-[50px]`}
          ></div>
          <YearTab
            text={title}
            img={img}
            isRight={true}
            imgSize={imgSize}
            game={game}
          />
        </div>
      ) : (
        <div className="w-full h-[500px] flex items-center justify-center">
          <YearTab text={title} img={img} game={game} imgSize={imgSize} />
          <div
            className={`${
              isFirst
                ? "rounded-t-lg rounded-b-none border-triory"
                : isLast
                ? "rounded-b-lg rounded-t-none"
                : "border-white"
            } h-full border-[4px] w-0 mx-[50px]`}
          ></div>
          <p className="text-[#a5a4a4] w-[350px] font-poppins text-[22px] font-light italic">
            {date}
          </p>
        </div>
      )}
    </div>
  );
};

export default YearLine;
