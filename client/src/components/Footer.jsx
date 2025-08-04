import { Link } from "react-router-dom";
import logo from "../assets/Safe Travels_LOGO FINAL.png";

const Footer = () => {
  return (
    <div className="footer inset-x-0 bottom-0 flex flex-col bg-zinc-100 text-white py-2 px-5">
      <div className="flex flex-col justify-center items-center py-4 w-[100%]">
        <img
          className="h-[70px] md:h-[60px] md:w-[170px] mb-3"
          src={logo}
        ></img>
        <Link className="text-zinc-400 text-lg mb-3 font-serif" to="/">
          HOME
        </Link>
        <p className="text-zinc-400 text-xs">
          Copyright © {new Date().getFullYear()} - SafeTravelsGG
        </p>
      </div>
    </div>
  );
};

export default Footer;
