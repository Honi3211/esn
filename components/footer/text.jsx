const Text = ({ text, href, className }) => {
  return (
    <a
      href={href}
      className={`${className} text-white uppercase font-belanosima`}
    >
      {text}
    </a>
  );
};

export default Text;
