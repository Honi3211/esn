import WatchTab from "./watchTab";

const Tabs = ({ name, content = [] }) => {
  return (
    <div className="w-full">
      <h1 className="font-poppins font-black text-white text-[40px] italic">
        {name}
      </h1>

      <div className="mt-[30px]"></div>

      <div className="gap-x-[20px] flex overflow-x-auto">
        {content.map((video, index) => {
          return (
            <div className="w-[336px]" key={index}>
              <WatchTab
                title={video.title}
                ep={video.ep}
                date={video.date}
                duration={video.duration}
                thumbnail={video.thumbnail}
                href={video.href}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
