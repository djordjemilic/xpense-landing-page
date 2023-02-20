import { useEffect, useState } from "react";
import { header } from "../data";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import Navbar from "./Navbar";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? "lg:top-0 bg-white shadow-xl" : "lg:top-[60px]"
      } py-6 lg:py-4 fixed  w-full transition-all z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="hidden lg:flex">
          <Navbar />
        </div>
        <button className="hidden lg:flex btn btn-sm btn-outline">{btnText}</button>
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
