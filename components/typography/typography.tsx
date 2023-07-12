import { FC } from "react";

export type TypographyTypes = "h1" | "h2" | "p1" | "p2" | "title" | "p3";

type Props = {
  variant: TypographyTypes;
  className?: string;
  children: React.ReactNode;
};

const Typography: FC<Props> = ({ variant, className = "", children }) => {
  const getClasses = (variant: TypographyTypes) => {
    switch (variant) {
      case "h1":
        return "leading-none font-poppins font-black text-[120px]";
      case "p1":
        return "font-belanosima text-[30px]";
      case "p2":
        return "font-poppins text-[30px]";
      case "p3":
        return "font-belanosima text-[20px]";
      case "title":
        return "font-poppins font-black text-[80px]";
    }
  };
  return (
    <div className={`${getClasses(variant)} ${className}`}>{children}</div>
  );
};

export default Typography;
