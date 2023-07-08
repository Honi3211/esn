import Header from "../../components/header/header";
import bgPhoto from "@/../../public/assets/bg.jpg";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      {/* <div className="mt-[70px]"></div> */}
      <div className="h-full">
        <div
          style={{
            backgroundImage: `url(${bgPhoto.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full"
        ></div>
      </div>
      <Footer />
    </div>
  );
}
