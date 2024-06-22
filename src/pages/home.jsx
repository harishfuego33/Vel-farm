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
        <div className="ag-practice">
          <div className="ag-articles">
            <div className="ag-titile">
              {" "}
              <h3>Commitment to Quality</h3>
            </div>
            <p className="ag-para">
              At Vel Farms, we are unwavering in our steadfast dedication to
              delivering the highest quality coconut products. From planting to
              harvesting, we rigorously adhere to the most stringent standards.
              Every step of our meticulous and comprehensive process is
              diligently managed to ensure that our products remain pure,
              natural, and abundantly packed with essential nutrients for our
              valued customers.
            </p>
          </div>
          <div className="ag-articles">
            <div className="ag-titile">
              {" "}
              <h3>Impact on the environment</h3>
            </div>
            <p className="ag-para">
              At Vel Farms, we are committed to practicing sustainable coconut
              farming, actively promoting biodiversity and supporting local
              wildlife. Our eco-friendly methods, which encompass efficient
              irrigation systems and organic agricultural practices, are
              designed to deliver the highest quality coconut products. By
              employing these sustainable techniques, we also contribute to the
              reduction of greenhouse gas emissions, thereby fostering a
              healthier environment for future generations
            </p>
          </div>
          <div className="ag-articles">
            <div className="ag-titile">
              {" "}
              <h3> Modern farming techniques</h3>
            </div>
            <p className="ag-para">
              At Vel Farms, we seamlessly integrate traditional wisdom with
              modern innovations, such as precision agriculture and advanced
              irrigation systems, to enhance both productivity and
              sustainability. This harmonious blend of time-honored practices
              and cutting-edge technology ensures that we consistently deliver
              superior coconut products to our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
