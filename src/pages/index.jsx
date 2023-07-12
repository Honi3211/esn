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
} from "../../public/assets";
import { faceit } from "../../public/svgs";
import Channel from "../../components/channel";
import Division from "../../components/division";
import Typography from "../../components/typography/typography";

export default function Home() {
  const channels = [
    { title: "#605", src: univision.default },
    { title: "#605", src: ddish.default },
    { title: "#617", src: skymedia.default },
    { title: "#406", src: mnbc.default },
    { title: "#56", src: telecoMongolia.default },
    { title: "#34", src: voo.default },
  ];

  const socials = [
    { src: youtube.default, className: "h-[100px] px-[12px]" },
    { src: twitch.default, className: "h-[100px] px-[12px]" },
  ];

  const faceitDiv = [
    { src: bronze.default, title: "Bronze Division", color: "text-[#B27540]" },
    { src: silver.default, title: "Silver Division", color: "text-[#D7D7D7]" },
    { src: gold.default, title: "Gold Division", color: "text-[#E9AF35]" },
    {
      src: international.default,
      title: "International Pro Division",
      color: "text-[#191D2D]",
    },
  ];

  const descPictures = [
    { src: bg6.default },
    { src: bg5.default },
    { src: bg4.default },
    { src: bg8.default },
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="mt-[60px]"></div>
      <div className="h-full flex flex-col items-center">
        <div className="h-[700px] w-full flex items-center justify-around bg-white p-[100px]">
          <Typography variant="h1" className="text-primary mr-[50px] italic">
            GREETINGS <br />
            FROM <span className="text-secondary">ESN</span>
          </Typography>
          <h1 className="text-primary w-[700px] font-bold italic font-nunitoSans text-[30px]">
            Хамгийн чанартай видео тоглоом, eSport-той холбоотой контент
            үйлдвэрлэгч, дамжуулагч, дотоодын болон гадаадын албан ёсны эрхтэй
            eSports тэмцээн зохион байгуулагч.
          </h1>
        </div>

        <img src={bg3.default.src} alt="" />

        {/* <div className="w-full px-[50px] py-[50px] bg-jigjugBgColor flex">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <img src={jigjug.default.src} alt="" className="w-[400px]" />
              <p className="text-white text-[50px] font-poppins font-black italic">
                JIG JUG
              </p>
            </div>

            <p className="text-triory text-[50px] font-poppins font-black uppercase px-[10px]">
              Changed
            </p>

            <div className="flex flex-col items-center">
              <img src={esnPink.default.src} alt="" className="w-[400px]" />
              <p className="text-white text-[50px] font-poppins font-black italic">
                ESN
              </p>
            </div>
          </div>

          <div className="w-[500px] ml-[50px] flex items-start">
            <p className="text-white font-belanosima text-[30px] break-all">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
              nobis! Temporibus ab amet dolor minima? Ratione debitis tempore
              eius porro aspernatur. Doloribus nostrum obcaecati commodi quis,
              facilis provident dolores quisquam.
            </p>
          </div>
        </div> */}

        <div className="w-full flex justify-around px-[100px] py-[100px] bg-white">
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

          <div className="w-[800px]">
            <Typography variant="p1" className="text-primary font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              quidem necessitatibus maxime? Dignissimos voluptate reprehenderit
              iste quasi perspiciatis quidem porro autem aut eveniet! Ut, illum
              quibusdam. Temporibus amet doloremque fuga.
            </Typography>

            <div className="mt-[20px]"></div>

            <Typography variant="p1" className="text-primary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              quidem necessitatibus maxime? Dignissimos voluptate reprehenderit
              iste quasi perspiciatis quidem porro autem aut eveniet! Ut, illum
              quibusdam. Temporibus amet doloremque fuga.
            </Typography>
          </div>
        </div>

        <div className="w-full bg-[#A52733] p-[100px] flex flex-col items-center">
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

        <div className="w-full bg-white flex items-center p-[100px]">
          <Typography variant="p1" className="text-primary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quidem
            necessitatibus maxime? Dignissimos voluptate reprehenderit iste
            quasi perspiciatis quidem porro autem aut eveniet! Ut, illum
            quibusdam. Temporibus amet doloremque fuga. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non ratione enim magnam quas a,
            laborum consequuntur rem? Ad, fugit animi!
          </Typography>
          <img src={nationalGold.default.src} alt="" className="ml-[100px]" />
        </div>

        <img src={bg.default.src} alt="" />

        <div className="w-full flex flex-col items-center py-[100px]">
          <Typography variant="title" className="text-white text-center">
            WATCH US ON <span className="text-secondary">SOCIAL</span>
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

        <div className="w-full flex justify-center flex-wrap">
          {descPictures.map((picture, index) => {
            return (
              <img
                src={picture.src.src}
                className="w-[450px]"
                alt=""
                key={index}
              />
            );
          })}
        </div>

        <div className="w-full flex flex-col items-center py-[100px] px-[100px]">
          <div className="flex items-center">
            <Typography variant="title" className="text-white text-center">
              WATCH US ON <span className="text-secondary">TV</span>
            </Typography>
            <img
              src={premierSports.default.src}
              alt=""
              className="h-[100px] px-[30px]"
            />
          </div>

          <div className="mt-[40px]"></div>

          <div className="flex items-center flex-wrap">
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
      <Footer />
    </div>
  );
}
