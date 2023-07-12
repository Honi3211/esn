import Header from "../../components/header/header";
import { contents } from "../../data/contents";
import Tabs from "../../components/watchComps/tabs";
import Footer from "../../components/footer/footer";

const Watch = () => {
  return (
    <div className="w-full bg-[#22273b]">
      <Header />
      <div className="mt-[60px]"></div>
      <div className="w-full flex flex-col p-[100px]">
        <Tabs name={contents[0].name} content={contents[0].episodes} />

        <div className="mt-[100px]"></div>

        <Tabs name={contents[1].name} content={contents[1].episodes} />

        <div className="mt-[100px]"></div>

        <Tabs name={contents[2].name} content={contents[2].episodes} />

        <div className="mt-[100px]"></div>

        <Tabs name={contents[3].name} content={contents[3].episodes} />

        <div className="mt-[100px]"></div>

        <Tabs name={contents[4].name} content={contents[4].episodes} />

        <div className="mt-[100px]"></div>

        <Tabs name={contents[5].name} content={contents[5].episodes} />

        <div className="mt-[100px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Watch;
