import Header from "../../components/header/header";
import { contents } from "../../data/contents";
import WatchTabs from "../../components/watchComps/watchTabs";
import Footer from "../../components/footer/footer";

const Watch = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="md:mt-[60px]"></div>
      <div className="w-full flex flex-col p-[20px] md:p-[100px]">
        <WatchTabs name={contents[0].name} content={contents[0].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>

        <WatchTabs name={contents[1].name} content={contents[1].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>

        <WatchTabs name={contents[2].name} content={contents[2].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>

        <WatchTabs name={contents[3].name} content={contents[3].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>

        <WatchTabs name={contents[4].name} content={contents[4].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>

        <WatchTabs name={contents[5].name} content={contents[5].episodes} />

        <div className="mt-[80px] md:mt-[100px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Watch;
