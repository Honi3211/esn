import ContentTab from "../../components/contentTab";
import Header from "../../components/header/header";
import { contents } from "../../data/contents";

const Watch = () => {
  console.log(contents);

  return (
    <div className="h-screen">
      <Header />
      <div className="mt-[60px]"></div>
      <div>
        <ContentTab />
      </div>
    </div>
  );
};

export default Watch;
