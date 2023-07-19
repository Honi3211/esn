import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import YearlyCalendars from "../../components/tournamentComps/yearly";
import {
  apex,
  bg,
  csgo,
  dota,
  fifa,
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
        <img src={bg.default.src} alt="" className="" />

        <div className="mt-[200px]"></div>

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
