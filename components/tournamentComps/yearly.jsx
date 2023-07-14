import {
  apex,
  csgo,
  dota,
  fifa,
  mlbb,
  pubgM,
  tekken,
  valorant,
} from "../../public/assets";
import YearLine from "./yearLine";
import YearTab from "./yearTab";

const YearlyCalendars = () => {
  return (
    <div className="w-full flex justify-between relative ">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-white text-[50px] font-poppins font-thin">
          YEARLY CALENDAR
        </h1>
        <p className="text-white text-[50px] font-poppins font-black italic">
          NATIONAL CHAMPIONSHIP
        </p>

        <div className="mt-[150px]"></div>

        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"APEX LEGENDS"}
          img={apex.default.src}
          date={"APRIL 4 - APRIL 12, 2023"}
          isFirst={true}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"VALORANT"}
          img={valorant.default.src}
          date={"APRIL 25 - MAY 7, 2023"}
          isLogoRight={true}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"DOTA 2"}
          img={dota.default.src}
          imgSize={"100px"}
          date={"MAY 15 - JUNE 4, 2023"}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"CSGO"}
          img={csgo.default.src}
          date={"JUNE 15 - JULY 2, 2023"}
          isLogoRight={true}
        />

        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"MOBILE LEGENDS: BANG BANG"}
          imgSize={"200px"}
          img={mlbb.default.src}
          date={"SEPTEMBER ??? - SEPTEMBER ???, 2023"}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"FIFA23"}
          imgSize={"200px"}
          img={fifa.default.src}
          date={"OCTOBER ??? - OCTOBER ???, 2023"}
          isLogoRight={true}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"TEKKEN"}
          img={tekken.default.src}
          imgSize={"200px"}
          date={"OCTOBER ??? - OCTOBER ???, 2023"}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"PUBG MOBILE"}
          imgSize={"200px"}
          img={pubgM.default.src}
          date={"NOVEMBER ??? - NOVEMBER ???, 2023"}
          isLast={true}
          isLogoRight={true}
        />
      </div>
    </div>
  );
};

export default YearlyCalendars;
