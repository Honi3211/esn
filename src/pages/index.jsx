import Footer from "../../components/footer/footer";
import WatchusFooter from "../../components/footer/watchusfooter";
import Header from "../../components/header/header";
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
        <WatchusFooter />
      </div>
      <Footer />
    </div>
  );
}
