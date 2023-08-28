const Channel = ({ src, title, className }) => {
  return (
    <div className={`${className} flex flex-col items-center min-w-[180px]`}>
      <img src={src} alt="" className="h-[10vw] min-h-[50px] md:h-[80px]" />
      <p className="text-white font-poppins font-bold text-[8vw] md:text-[26px]">
        {title}
      </p>
    </div>
  );
};

export default Channel;
