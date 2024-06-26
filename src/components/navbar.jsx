import { useState } from "react";
import NavBtn from "./navbtn";
const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="navbar__main">
        <div className="title-box">
          <div className="log-box">
            <img src="/assets/logo.png" alt="farms-log" className="logo" />
          </div>
          <h2 className="main-title">VEL FARMS</h2>
        </div>
        <ul className="nav-bar__options ">
          <NavBtn name={"Home"} to={"/"} />
          <NavBtn name={"Farms"} to={"/farm"} />
          <NavBtn name={"Product"} to={"/product"} />
          <NavBtn name={"About us"} to={"/about"} />
          <NavBtn name={"Contact us"} to={"/contact"} />
        </ul>
      </nav>
      <button
        className={`hamburger__btn ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <span className="hamburger__btn-line1"></span>
        <span className="hamburger__btn-line2"></span>
        <span className="hamburger__btn-line3"></span>
      </button>
      <SlideIn active={active} />
    </>
  );
};
const SlideIn = ({ active }) => {
  return (
    <div className={`slide__navigation ${active ? "slid-in" : ""}`}>
      <ul className="slide__options ">
        <NavBtn name={"Home"} to={"/"} />
        <NavBtn name={"Farms"} to={"/farm"} />
        <NavBtn name={"Product"} to={"/product"} />
        <NavBtn name={"About us"} to={"/about"} />
        <NavBtn name={"Contact us"} to={"/contact"} />
      </ul>
    </div>
  );
};

export default NavBar;
