import { useEffect, useState } from "react";
import {
  apex,
  apexBg,
  csgo,
  csgoBg,
  dota,
  dotaBg,
  fifa,
  fifaBg,
  mlbb,
  mlbbBg,
  pubgM,
  pubgMBg,
  tekken,
  tekkenBg,
  valorant,
  valorantBg,
} from "../../public/assets";
import YearLine from "./yearLine";
import YearTab from "./yearTab";

const YearlyCalendars = () => {
  // const [scrollYState, setScrollYState] = useState();

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {

  //     // console.log(window.scrollY);
  //     // console.log(scrollYState);
  //   });
  // }, []);

  return (
    <div className="w-full flex justify-between relative ">
      <div className="w-full flex flex-col items-center">
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"APEX LEGENDS"}
          img={apex.default.src}
          date={"APRIL 4 - APRIL 12, 2023"}
          isFirst={true}
          bgImg={apexBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"VALORANT"}
          img={valorant.default.src}
          date={"APRIL 25 - MAY 7, 2023"}
          isLogoRight={true}
          bgImg={valorantBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"DOTA 2"}
          img={dota.default.src}
          imgSize={"200px"}
          date={"MAY 15 - JUNE 4, 2023"}
          bgImg={dotaBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"CSGO"}
          img={csgo.default.src}
          date={"JUNE 15 - JULY 2, 2023"}
          isLogoRight={true}
          bgImg={csgoBg.default.src}
        />

        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"MOBILE LEGENDS: BANG BANG"}
          imgSize={"300px"}
          img={mlbb.default.src}
          date={"SEPTEMBER ??? - SEPTEMBER ???, 2023"}
          bgImg={mlbbBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"FIFA23"}
          imgSize={"300px"}
          img={fifa.default.src}
          date={"OCTOBER ??? - OCTOBER ???, 2023"}
          isLogoRight={true}
          bgImg={fifaBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"TEKKEN"}
          img={tekken.default.src}
          imgSize={"300px"}
          date={"OCTOBER ??? - OCTOBER ???, 2023"}
          bgImg={tekkenBg.default.src}
        />
        <YearLine
          title={"NATIONAL CHAMPIONSHIP OF "}
          game={"PUBG MOBILE"}
          imgSize={"300px"}
          img={pubgM.default.src}
          date={"NOVEMBER ??? - NOVEMBER ???, 2023"}
          isLast={true}
          isLogoRight={true}
          bgImg={pubgMBg.default.src}
        />
      </div>
    </div>
  );
};

export default YearlyCalendars;
