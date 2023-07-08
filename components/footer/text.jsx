const Text = ({ text, href, className }) => {
  return (
    <a href={href} className={`${className} text-white font-black`}>
      {text}
    </a>
  );
};

export default Text;
