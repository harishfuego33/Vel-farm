import { useResolvedPath, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavBtn = ({ name, to, active, setActive, classN = "underlined" }) => {
  const currPath = useResolvedPath(to);
  const pathactive = useMatch({ path: currPath.pathname, end: true });
  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <NavLink style={style} to={to} onClick={() => setActive(!active)}>
      <div className={`nav-bar__option ${pathactive ? classN : ""}`}>
        {name}
      </div>
    </NavLink>
  );
};
export default NavBtn;
