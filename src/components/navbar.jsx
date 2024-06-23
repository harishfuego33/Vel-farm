import { NavLink } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar__main">
      <div className="title-box">
        <div className="log-box">
          <img src="/assets/logo.png" alt="farms-log" className="logo" />
        </div>
        <h2 className="main-title">VEL FARMS</h2>
      </div>
      <ul className="nav-bar__options ">
        <NavBtn name={"Home"} to={"/"} />
        <NavBtn name={"Farm"} to={"/farm"} />
        <NavBtn name={"Product"} to={"/product"} />
        <NavBtn name={"About us"} to={"/about"} />
        <NavBtn name={"Contact us"} to={"/contact"} />
      </ul>
    </nav>
  );
};

const NavBtn = ({ name, to }) => {
  const currPath = useResolvedPath(to);
  const active = useMatch({ path: currPath.pathname, end: true });
  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <NavLink style={style} to={to}>
      <li className={`nav-bar__option ${active ? "underlined" : ""}`}>
        {name}
      </li>
    </NavLink>
  );
};
export default NavBar;
