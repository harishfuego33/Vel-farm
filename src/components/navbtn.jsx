import { useResolvedPath, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
export default NavBtn;
