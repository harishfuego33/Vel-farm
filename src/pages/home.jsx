const Home = () => {
  return (
    <main className="home__main">
      <Greet />
      <AgricultureSustainblity />
    </main>
  );
};
const Greet = () => {
  return (
    <section className="greets__section">
      <article className="greets">
        <h1 className="greet__welcome">WELCOME TO</h1>
        <span className="greet__name">VEL FARMS</span>
        <p className="greet__para">
          we dedicated to providing the highest quality coconut products while
          maintaining sustainable farming practices.
        </p>
        <button className="greet__btn">Learn More</button>
      </article>
    </section>
  );
};
const AgricultureSustainblity = () => {
  return (
    <section className="agriculture_section">
      <h1 className="heading__primary">
        Agricultural <span className="secondary__color">Sustainability</span>
      </h1>
      <div className="ag-container">
        <div className="coconut__galary">
          <div className="slides">
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-1.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-2.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-3.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-4.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-5.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-6.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
            <div className="galary-img-box">
              <img
                src="/assets/galary/galary-7.webp"
                alt="farms-log"
                className="galary-img"
              />
            </div>
          </div>
        </div>
        <div className="ag-practice"></div>
      </div>
    </section>
  );
};
export default Home;
