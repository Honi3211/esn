import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  bg,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  ddish,
  mnbc,
  skymedia,
  telecoMongolia,
  univision,
  voo,
  premierSports,
  youtube,
  twitch,
  uuruurUz,
  esnFullDark,
  esnFullWhite,
  esnLogoRed,
  esnPink,
  esnRed,
  jigjug,
} from "../../public/assets";
import { faceit } from "../../public/svgs";
import Channel from "../../components/channel";

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

  return (
    <div className="w-full">
      <Header />
      <div className="mt-[60px]"></div>
      <div className="h-full flex flex-col items-center">
        <div className="h-[700px] w-full flex items-center justify-around bg-white px-[100px]">
          <h1 className="leading-none font-poppins font-black text-[120px] text-primary">
            GREETINGS <br />
            FROM <span className="text-secondary">ESN</span>
          </h1>
          <p className="text-primary font-belanosima w-[700px] text-[30px] break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
            nostrum, modi alias fugiat eaque natus possimus sapiente. Rem eum
            quidem mollitia sed eaque dolore placeat? Aliquam blanditiis
            incidunt qui.
          </p>
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
            <p className="text-primary text-[30px] font-semibold font-belanosima break-all">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              quidem necessitatibus maxime? Dignissimos voluptate reprehenderit
              iste quasi perspiciatis quidem porro autem aut eveniet! Ut, illum
              quibusdam. Temporibus amet doloremque fuga.
            </p>
            <div className="mt-[20px]"></div>
            <p className="text-primary text-[30px]  font-belanosima break-all">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              quidem necessitatibus maxime? Dignissimos voluptate reprehenderit
              iste quasi perspiciatis quidem porro autem aut eveniet! Ut, illum
              quibusdam. Temporibus amet doloremque fuga.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[100px]">
          <p className="text-white font-poppins font-black text-[100px]">
            WATCH US ON <span className="text-secondary">SOCIAL</span>
          </p>
          <div className="mt-[40px]"></div>
          <div className="flex items-center flex-wrap">
            {socials.map((social, index) => {
              return (
                <img src={social.src.src} alt="" className={social.className} />
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img src={bg6.default.src} alt="" className="h-[450px]" />
          <img src={bg5.default.src} alt="" className="h-[450px]" />
          <img src={bg4.default.src} alt="" className="h-[450px]" />
          <img src={bg8.default.src} alt="" className="h-[450px]" />
        </div>

        <div className="w-full flex flex-col items-center py-[100px] px-[100px]">
          <div className="flex items-center">
            <p className="text-white font-poppins font-black text-[100px]">
              WATCH US ON <span className="text-secondary">TV</span>
            </p>
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
