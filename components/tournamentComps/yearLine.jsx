import YearTab from "./yearTab";
import { bg, dotaBg } from "../../public/assets";

const YearLine = ({
  title,
  img,
  date,
  isFirst = false,
  isLast = false,
  isLogoRight = false,
  imgSize,
  game,
  bgImg,
}) => {
  return (
    <div>
      {isLogoRight ? (
        <div
          className="w-screen h-[500px] flex items-center justify-center bg-cover px-[10px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <p className="text-triory w-[350px] font-poppins text-[5vw] md:text-[22px] font-light text-end italic">
            {date}
          </p>
          <div
            className={`${
              isFirst
                ? "rounded-t-lg rounded-b-none border-triory"
                : isLast
                ? "rounded-b-lg rounded-t-none"
                : "border-white"
            } h-full border-[4px] w-0 mx-[10px] md:mx-[20px]`}
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
        <div
          className="w-screen h-[500px] flex items-center justify-center bg-cover px-[10px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <YearTab text={title} img={img} game={game} imgSize={imgSize} />
          <div
            className={`${
              isFirst
                ? "rounded-t-lg rounded-b-none border-triory"
                : isLast
                ? "rounded-b-lg rounded-t-none"
                : "border-white"
            } h-full border-[4px] w-0 mx-[10px] md:mx-[20px]`}
          ></div>
          <p className="text-triory w-[350px] font-poppins text-[5vw] md:text-[22px] font-light italic">
            {date}
          </p>
        </div>
      )}
    </div>
  );
};

export default YearLine;
