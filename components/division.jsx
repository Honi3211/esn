const Division = ({ src, title, className, color }) => {
  return (
    <div className={`${className} flex flex-col items-center w-[200px]`}>
      <img
        src={src}
        alt=""
        className="w-full border-2 border-white rounded-[30px]"
      />
      <div className="mt-[20px]"></div>
      <p className={`${color} font-poppins font-bold text-[26px] text-center`}>
        {title}
      </p>
    </div>
  );
};

export default Division;
