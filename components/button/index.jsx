import { dividerClasses } from "@mui/material";

const Button = ({ title, func, type = "primary", className }) => {
  switch (type) {
    case "primary":
      return (
        <div>
          <button
            className={`${className} border-4 border-secondary  rounded-[12px] py-[12px] px-[44px] font-bold hover:bg-secondary text-secondary hover:text-white uppercase font-poppins text-[17px] duration-[.2s]`}
          >
            {title}
          </button>
        </div>
      );
    case "secondary":
      return (
        <div>
          <button
            className={`${className} border-4 border-triory  rounded-[12px] py-[12px] px-[50px] font-bold hover:bg-triory text-triory hover:text-primary uppercase font-poppins text-[16px] duration-[.2s]`}
          >
            {title}
          </button>
        </div>
      );
  }
};

export default Button;
