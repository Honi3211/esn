import Typography from "../typography/typography";

const Tab = ({ img, org, name, width }) => {
  return (
    <div className={width ? width : "w-[800px]"}>
      <img src={img} alt="" className="w-full h-[360px]" />
      <p className="text-primary font-poppins text-[30px] font-bold">
        <span className="text-secondary">{org} </span>
        {name}
      </p>
    </div>
  );
};

export default Tab;
