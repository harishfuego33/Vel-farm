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
        <li className="nav-bar__option">Home</li>
        <li className="nav-bar__option">Farm</li>
        <li className="nav-bar__option">Product</li>
        <li className="nav-bar__option">About Us</li>
      </ul>
    </nav>
  );
};
export default NavBar;
