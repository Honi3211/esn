import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import YearlyCalendars from "../../components/tournamentComps/yearly";
import {
  apex,
  bg,
  bg2,
  bg3,
  bg4,
  csgo,
  dota,
  fifa,
  goldenBg,
  mlbb,
  pubgM,
  tekken,
  valorant,
  yearCalendar,
} from "../../public/assets";

const Tournament = () => {
  return (
    <div className="h-screen">
      <Header />

      <div className="mt-[60px]"></div>

      <div className="w-full flex flex-col items-center overflow-hidden">
        <div>
          <img src={bg.default.src} alt="" className="" />
        </div>

        <div className="mt-[100px]"></div>

        <div className="flex items-center flex-col">
          <h1 className="text-white text-[50px] font-poppins font-thin">
            YEARLY CALENDAR
          </h1>
          <p className="text-white text-[50px] font-poppins font-black italic">
            NATIONAL CHAMPIONSHIP
          </p>
        </div>

        <div className="mt-[100px]"></div>

        <div className="w-full px-[100px] flex justify-center">
          <YearlyCalendars />
        </div>
      </div>

      <div className="mt-[60px]"></div>

      <Footer />
    </div>
  );
};

export default Tournament;
