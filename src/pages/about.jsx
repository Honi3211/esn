import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  bg,
  bg3,
  bg4,
  bg5,
  bg6,
  bg8,
  nationalGold,
  ddish,
  mnbc,
  skymedia,
  telecoMongolia,
  univision,
  voo,
  premierSports,
  youtube,
  twitch,
  esnFullDark,
  bronze,
  silver,
  gold,
  international,
  jigjug,
  esnPink,
  goldenBg,
  esnLogoRed,
} from "../../public/assets";
import { faceit } from "../../public/svgs";
import Division from "../../components/division";
import Typography from "../../components/typography/typography";
import Button from "../../components/button";
import { faceitDiv } from "../../data/texts";
import {
  champions1,
  champions3,
  champions4,
  players3,
  workers,
} from "../../public/assets/players";
import Title from "../../components/title";
import Tabs from "../../components/esnTournamentComps/tournTabs";
import Channel from "../../components/channel";
import { channels, socials } from "../../data/texts";

const About = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-[60px]"></div>
      <div className="flex flex-col items-center">
        <div className="w-full bg-white px-[200px] py-[200px] flex items-center">
          <div className="w-full flex justify-between">
            <Typography variant="h1" className="text-primary mr-[50px] italic">
              GREETINGS <br />
              FROM <span className="text-secondary">ESN</span>
            </Typography>
            <div>
              <h1 className="text-primary max-w-[700px] italic font-light font-nunitoSans text-[30px]">
                Бид бол хамгийн чанартай видео тоглоом, электрон спортын
                холбогдолтой контент үйлдвэрлэгч, дамжуулагч, дотоодын болон
                гадаадын албан ёсны эрхтэй тэмцээн зохион байгуулагч юм.
              </h1>
              <div className="mt-[20px]"></div>
            </div>
          </div>
        </div>

        <img src={players3.default.src} alt="" />

        <div className="w-full py-[100px] px-[300px] bg-white flex flex-col items-center overflow-hidden">
          <div className="w-full flex justify-between">
            <Title title={"Champion"} className={"mr-[30px]"} />
            <p className="text-primary w-[700px] font-nunitoSans text-[30px] font-light italic max-w-[700px]">
              Бид дотоод улсдаа хамгийн өндөр шагналын сантай тэмцээнүүдийг
              зохиодгоороо электрон спорт сонирхогч хүүхэд залуусдаа танигдсан
              аль хэдийн танигдсан билээ. Монголын электрон спортын хөгжилд шинэ
              зүйл нэмсэн нь зохиогддог{" "}
              <span className="text-secondary">NATIONAL CHAMPIONSHIP </span>{" "}
              тэмцээн юм.
            </p>
          </div>
          <div className="mt-[50px]"></div>
          <p className="w-full text-start font-poppins font-black text-primary text-[50px]">
            OUR TOURNAMENTS
          </p>
          <Tabs />
        </div>

        <div className="w-full py-[100px] px-[300px] bg-primary flex flex-col items-center overflow-hidden">
          <div className="w-full flex justify-between">
            <Title
              title={"LIVE"}
              color={"text-white"}
              className={"mr-[30px]"}
            />
            <p className="text-white w-[700px] font-nunitoSans text-[30px] font-extralight italic max-w-[700px]">
              Бид{" "}
              <span className="text-secondary">
                дуу дүрсний өндөр чанартай{" "}
              </span>
              гадаадын болон дотоодын тэмцээнүүдийг{" "}
              <span className="text-secondary">албан ёсны эрхтэй </span> шууд
              дамжуулдаг. Сошиал платформуудаар болон тв сувгуудаар тус тус шууд
              дамжуулалт хүргэдэг.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-full flex flex-col items-center pt-[100px]">
              <Typography variant="title" className="text-white text-center">
                LIVE <span className="text-secondary">PLATFORM</span>
              </Typography>

              <div className="mt-[40px]"></div>

              <div className="flex items-center flex-wrap">
                {socials.map((social, index) => {
                  return (
                    <img
                      src={social.src.src}
                      alt=""
                      className={social.className}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>

            <div className="w-full flex flex-col items-center pt-[50px]">
              <div className="flex items-center flex-wrap justify-center">
                <Typography variant="title" className="text-white text-center">
                  TV <span className="text-secondary">CHANNEL</span>
                </Typography>
                <img
                  src={premierSports.default.src}
                  alt=""
                  className="h-[100px] px-[30px]"
                />
              </div>

              <div className="mt-[40px]"></div>

              <div className="flex items-center justify-center flex-wrap">
                {channels.map((channel, index) => {
                  return (
                    <Channel
                      src={channel.src.src}
                      key={index}
                      title={channel.title}
                      className={"px-[12px]"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <img src={champions3.default.src} alt="" />

        <div className="w-full flex items-center justify-around py-[100px] px-[200px] bg-white">
          <div className="flex flex-col items-center mx-[50px]">
            <img
              src={esnFullDark.default.src}
              alt=""
              className="w-[400px] border-b-2 border-black pb-[30px]"
            />
            <img
              src={faceit.default.src}
              alt=""
              className="w-[400px] pt-[10px]"
            />
          </div>

          <div className="mt-[60px]"></div>

          <div className="w-[700px]">
            <p className="text-primary w-[700px] font-nunitoSans text-[30px] font-light max-w-[700px]">
              Бид FACEIT платформ дээр{" "}
              <span className="text-secondary">дотоодын сервэр</span>{" "}
              ажиллуулдаг ба энэ нь Монголын Counter-Strike тоглогчдод маш том
              боломж олгодог. FACEIT тоглогчдийн түвшингөөс хамааран 4 ангилалд
              хамааран тоглодог ба үүнд{" "}
              <span className="text-secondary">
                Bronze, Silver, Gold, International Pro Division-үүд
              </span>{" "}
              байдаг.
            </p>
          </div>
        </div>

        <div className="w-full bg-secondary p-[100px] flex flex-col items-center">
          <Typography variant="title" className="text-white text-center">
            WE HAVE <span className="text-triory">DIVISIONS</span> FOR PLAYERS
            ON FACEIT
          </Typography>

          <div className="mt-[40px]"></div>

          <div className="w-full flex justify-around px-[50px]">
            {faceitDiv.map((div, index) => {
              return (
                <Division
                  title={div.title}
                  src={div.src.src}
                  color={div.color}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        <img src={workers.default.src} alt="" />

        <div className="w-full flex items-center justify-around py-[100px] px-[200px] bg-primary">
          <img
            src={jigjug.default.src}
            alt=""
            className="w-[300px] h-[300px]"
          />
          <img
            src={esnLogoRed.default.src}
            alt=""
            className="w-[300px] h-[300px]"
          />
          <p className="text-[30px] w-[700px] text-white font-nunitoSans font-extralight">
            Хамгийн анх 2019 оны 12 сарын 16-нд{" "}
            <span className="text-secondary font-light">JIG JUG</span>{" "}
            нэртэйгээр Монгол дахь хамгийн анхны{" "}
            <span className="text-secondary font-light">Live Streaming</span>{" "}
            платформоо танилцуулан олонд танигдсан. Twitch, Douyu зэрэг
            платформуудтай төстэй механик, ажиллагаатай байсан билээ. Ийнхүү JIG
            JUG нэрийн доор 2 том тэмцээнийг зохион байгуулсаны эцэст шинэ өнгө
            төрхтэйгөөр олонд танигдсан нь{" "}
            <span className="text-secondary font-light">ESN</span> байсан юм.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
