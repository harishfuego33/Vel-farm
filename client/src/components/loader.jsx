const Loader = () => {
  const style = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "gray",
  };
  const style2 = {
    width: "15rem",
    height: "15rem",
  };
  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div className="loader" style={style}>
      <div className="loader-box" style={style2}>
        <img
          src="/assets/logo.png"
          alt="logo"
          // width={100}
          // height={100}
          // className="gallery-logo"
          style={img}
        />
      </div>
    </div>
  );
};
export default Loader;
