import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-sm font-primary font-semibold text-center w-full text-neutral-400 py-6">
      Copyright and Designed by
      <Link
        to="https://www.linkedin.com/in/deepak-kumar-07675a185/"
        className="hover:text-neutral-50 transition-all duration-300 ease-in-out ml-1"
      >
        Deepak
      </Link>
    </div>
  );
};

export default Footer;
