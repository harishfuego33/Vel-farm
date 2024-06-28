import { useResolvedPath, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavBtn = ({ name, to, active, setActive }) => {
  const currPath = useResolvedPath(to);
  const pathactive = useMatch({ path: currPath.pathname, end: true });
  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <NavLink style={style} to={to} onClick={() => setActive(!active)}>
      <li className={`nav-bar__option ${pathactive ? "underlined" : ""}`}>
        {name}
      </li>
    </NavLink>
  );
};
export default NavBtn;
