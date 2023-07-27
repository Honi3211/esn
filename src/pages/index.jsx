import Footer from "../../components/footer/footer";
import Channel from "../../components/channel";
import Header from "../../components/header/header";
import Typography from "../../components/typography/typography";
import { socials, descPictures, channels } from "../../data/texts";
import { premierSports } from "../../public/assets";
import { homeBg1 } from "../../public/assets";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-[60px]"></div>
      <div className="flex-col items-center">
        <div className="w-full">
          <img src={homeBg1.default.src} alt="" />
        </div>
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
