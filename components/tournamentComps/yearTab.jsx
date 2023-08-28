const YearTab = ({ text, img, imgSize = "150px", isRight = false, game }) => {
  return (
    <div
      className={`${
        isRight ? "" : "items-end"
      } flex flex-col justify-center w-[350px]`}
    >
      <img
        src={img}
        alt=""
        className={`min-w-[100px] w-[15vw] md:w-[${imgSize}] mb-[20px]`}
      />
      <p
        className={`${
          isRight ? "" : "text-end"
        } text-white font-poppins text-[5vw] md:text-[26px] font-bold italic`}
      >
        {text} <span className="text-triory">{game}</span>
      </p>
    </div>
  );
};

export default YearTab;
