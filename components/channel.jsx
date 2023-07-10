const Channel = ({ src, title, className }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <img src={src} alt="" className="h-[80px]" />
      <p className="text-white font-poppins font-bold text-[26px]">{title}</p>
    </div>
  );
};

export default Channel;
