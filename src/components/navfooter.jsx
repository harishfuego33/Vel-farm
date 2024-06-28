import { NavLink } from "react-router-dom";
const Navfooter = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <footer className="footer__section">
      <div className="title-box">
        <div className="log-box">
          <img src="/assets/logo.png" alt="farms-log" className="logo" />
        </div>
        <h2 className="main-title">VEL FARMS</h2>
      </div>
      <p className="contact__quotes new-quote">
        &quot; Together, we grow strong like a coconut tree, thriving with unity
        and purpose. &quot;
      </p>
      <div className="foot__box-1">
        <ul className="footer__list">
          <NavLink style={style} to={"/"}>
            <li className="footer__unordered-list">HOME</li>
          </NavLink>
          <NavLink style={style} to={"/farm"}>
            <li className="footer__unordered-list">FARMS</li>
          </NavLink>
          <NavLink style={style} to={"/product"}>
            <li className="footer__unordered-list">PRODUCT</li>
          </NavLink>
          <NavLink style={style} to={"/about"}>
            <li className="footer__unordered-list">ABOUT US</li>
          </NavLink>
          <NavLink style={style} to={"/contact"}>
            <li className="footer__unordered-list">CONTACT US</li>
          </NavLink>
        </ul>
        <div className="foot__box-2">
          <p className="copy_right">
            &copy; Copyright 2024 by <strong>MOUNTAINS CREATION</strong>. All
            Rights Reserved. is Powered by VEL FARMS.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Navfooter;
