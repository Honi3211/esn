import {
  esnNationalChamp,
  jigjugNationalChamp,
  winterShowdown,
} from "../../public/assets/tournaments";
import Tab from "./tournTab";

const Tabs = () => {
  const datas = [
    {
      img: esnNationalChamp.default.src,
      name: "NATIONAL CHAMPIONSHIP",
      org: "ESN",
      width: "w-[920px]",
    },
    {
      img: winterShowdown.default.src,
      name: "WINTER SHOWDOWN",
      org: "JIG JUG",
      width: "w-[800px]",
    },
    {
      img: jigjugNationalChamp.default.src,
      name: "NATIONAL CHAMPIONSHIP",
      org: "JIG JUG",
      width: "w-[800px]",
    },
  ];
  return (
    <div className="w-full">
      <div className="gap-x-[20px] flex overflow-x-auto">
        {datas.map((data, index) => {
          return (
            <div className="" key={index}>
              <Tab
                img={data.img}
                name={data.name}
                org={data.org}
                width={data.width}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Tabs;
