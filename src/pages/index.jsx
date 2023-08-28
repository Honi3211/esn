import Footer from "../../components/footer/footer";
import Channel from "../../components/channel";
import Header from "../../components/header/header";
import {
  socials,
  descPictures,
  channels,
  descPictures1,
  descPictures2,
} from "../../data/texts";
import { homeBg2, premierSports } from "../../public/assets";
import { homeBg1 } from "../../public/assets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="md:mt-[60px]"></div>
      <div className="flex-col items-center">
        <div className="w-full">
          <img src={homeBg1.default.src} alt="" className="md:block hidden" />
          <img src={homeBg2.default.src} alt="" className="md:hidden block" />
        </div>
        <div className="w-full flex flex-col items-center px-[20px] md:p-[100px] py-[20px] md:py-[100px]">
          <h2 className="font-poppins font-black text-[15vw] md:text-[80px] text-white text-center">
            WATCH US ON <span className="text-secondary">SOCIAL</span>
          </h2>

          <div className=" md:mt-[40px]"></div>

          <div className="flex items-center justify-center flex-wrap">
            {socials.map((social, index) => {
              return (
                <Link href={social.href} target="_blank">
                  <img
                    src={social.src.src}
                    className={social.className}
                    key={index}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full flex justify-center flex-wrap">
          {descPictures1.map((picture, index) => {
            return (
              <img
                src={picture.src.src}
                className="w-[450px]"
                alt=""
                key={index}
              />
            );
          })}
          {descPictures2.map((picture, index) => {
            return (
              <img
                src={picture.src.src}
                className="md:block hidden w-[450px]"
                alt=""
                key={index}
              />
            );
          })}
        </div>

        <div className="w-full flex flex-col items-center py-[20px] md:py-[100px] px-[20px] md:px-[100px]">
          <div className="flex items-center justify-center flex-wrap">
            <h2 className="font-poppins font-black text-[15vw] md:text-[80px] text-white text-center">
              WATCH US ON <span className="text-secondary">TV</span>
            </h2>
            <img
              src={premierSports.default.src}
              alt=""
              className="h-[20vw] md:h-[100px] px-[30px]"
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
        <div className="w-full">
          {descPictures2.map((picture, index) => {
            return (
              <img
                src={picture.src.src}
                className="md:hidden block w-[450px]"
                alt=""
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
