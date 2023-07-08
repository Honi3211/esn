const Text = ({ text, href, active }) => {
  return (
    <a
      href={href}
      className={`${
        active === true
          ? "border-b-[3px] border-[#A92532]  text-[#A92532]"
          : "text-[white]"
      } flex items-center justify-center text-[14px] font-belanosima uppercase mx-[12px] tracking-wide h-full px-[40px] transition duration-200 hover:text-[#A92532] border-[#A92532]`}
    >
      {text}
    </a>
  );
};

export default Text;
