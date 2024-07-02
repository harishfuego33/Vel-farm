import Navfooter from "../components/navfooter";
import NavBar from "../components/navbar";
import Loader from "../components/loader";
import { useEffect, useState } from "react";
const Home = () => {
  const [loading, isLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => isLoading(false), 2000);
  // }, []);
  useEffect(() => {
    const handleLoad = () => {
      isLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768 && loading === true) {
        const timer = setTimeout(() => isLoading(false), 1000);
        return () => clearTimeout(timer);
      }
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, [loading]);
  // if (loading === true) setTimeout(() => isLoading(false), 1000);
  return (
    <main className="home__main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Greet />
          <AgricultureSustainability />
          <SuppliesCoconutVarieties />
          <MatureCoconutVarieties />
          <Navfooter />
        </>
      )}
    </main>
  );
};
const Greet = () => {
  return (
    <section className="greet__section">
      <article className="greet__section-article">
        <h1 className="greet__welcome">WELCOME TO</h1>
        <h1 className="greet__name">VEL FARMS</h1>
        <p className="greet__para">
          we dedicated to providing the highest quality coconut products while
          maintaining sustainable farming practices.
        </p>
        <a href="#agriculture__section" className="link">
          <button className="greet__btn">Learn More</button>
        </a>
      </article>
    </section>
  );
};
const AgricultureSustainability = () => {
  return (
    <section className="agriculture_section" id="agriculture__section">
      <h1 className="heading__primary">
        Agricultural <span className="secondary__color">Sustainability</span>
      </h1>
      <div className="ag-container">
        <div className="coconut__gallery">
          <div className="slides">
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-1.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-2.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-3.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-4.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-5.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-6.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
            <div className="gallery-img-box">
              <img
                src="/assets/gallery/gallery-7.webp"
                alt="farms-log"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
        <div className="ag-practice">
          <div className="ag-articles">
            <div className="ag-title">
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
            <div className="ag-title">
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
            <div className="ag-title">
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
const SuppliesCoconutVarieties = () => {
  return (
    <section className="supplies_section">
      <h1 className="heading__primary">
        Nationwide Supplier of <span className="secondary__color">Mature </span>
        and <span className="secondary__color">Tender</span> Coconuts
      </h1>
      <div className="ag-title">
        <h3> Mature coconut varieties</h3>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card__img-box">
            <img
              src="/assets/cards/card-1.webp"
              alt="farms-log"
              className="gallery-img"
            />
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span">FRESH GREEN</span>
            <span className="card__heading-span"> COCONUTS</span>
          </h4>
          <ul className="card__list">
            <ll className="card__list-items">
              The price cannot be determined in advance as it varies according
              to market conditions.
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Yield Time:</span> 35-45 days
            </ll>
            <ll className="card__list-items">
              <span className="dark--green">DESCRIPTION:</span> Young coconuts
              with a green outer husk and soft, jelly like meat inside
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">SUPPLY FOCUS:</span> Mainly
              distributed within Tamil Nadu.
            </ll>
          </ul>
        </div>
        <div className="card">
          <div className="card__img-box">
            <img
              src="/assets/cards/card-2.webp"
              alt="farms-log"
              className="gallery-img"
            />
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span"> SEMI HUSK</span>
            <span className="card__heading-span"> COCONUTS</span>
          </h4>
          <ul className="card__list">
            <ll className="card__list-items">
              The price cannot be determined in advance as it varies according
              to market conditions.
            </ll>

            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Yield Time:</span> 50 and above days
            </ll>
            <ll className="card__list-items">
              <span className="dark--green">DESCRIPTION:</span> Fully matured
              with a thick black husk. Robust flavor used for oil extraction and
              culinary purposes.
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">SUPPLY FOCUS:</span>Northern India
              and international export markets.
            </ll>
          </ul>
        </div>
        <div className="card ">
          <div className="card__img-box">
            <img
              src="/assets/cards/card-3.webp"
              alt="farms-log"
              className="gallery-img"
            />
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span">HUSK OR BLACK</span>
            <span className="card__heading-span"> COCONUTS</span>
          </h4>
          <ul className="card__list">
            <ll className="card__list-items">
              The price cannot be determined in advance as it varies according
              to market conditions.
            </ll>

            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Yield Time:</span> 50 and above days
            </ll>
            <ll className="card__list-items">
              <span className="dark--green">DESCRIPTION:</span> Semi husk
              coconuts have a partially removed husk, revealing the hard shell.
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">SUPPLY FOCUS:</span> Mainly
              distributed within Tamil Nadu.
            </ll>
          </ul>
        </div>
      </div>
    </section>
  );
};
const MatureCoconutVarieties = () => {
  return (
    <section className="supplies_section">
      <div className="ag-title ">
        {" "}
        <h3> Tender coconut varieties</h3>
      </div>
      <div className="cards">
        <div className="card ">
          <div className="card__img-box">
            <img
              src="/assets/cards/card-4.webp"
              alt="farms-log"
              className="gallery-img"
            />
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span"> DJ GREEN TENDER</span>
            <span className="card__heading-span"> COCONUTS</span>
          </h4>
          <ul className="card__list">
            <ll className="card__list-items">
              <span className="dark--green">Weight: </span>
              Approximately 2.5 kg
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Water capacity:</span> 400-500 ml of
              coconut water
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Yield Time:</span> 25-35 days
            </ll>
            <ll className="card__list-items">
              <span className="dark--green">CHARACTERISTICS: </span>Larger size,
              thick green husk, sweet and abundant water.
            </ll>
          </ul>
        </div>
        <div className="card ">
          <div className="card__img-box">
            <img
              src="/assets/cards/card-5.webp"
              alt="farms-log"
              className="gallery-img"
            />
          </div>
          <h4 className="card__heading">
            <span className="card__heading-span"> DJ RED TENDER</span>
            <span className="card__heading-span"> COCONUTS</span>
          </h4>
          <ul className="card__list">
            <ll className="card__list-items">
              <span className="dark--green">Weight: </span>
              Approximately 2 kg
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Water capacity:</span> 400-500 ml of
              coconut water
            </ll>
            <ll className="card__list-items">
              {" "}
              <span className="dark--green">Yield Time:</span> 25-35 days``
            </ll>
            <ll className="card__list-items">
              <span className="dark--green">CHARACTERISTICS:</span> Smaller
              size, distinctive red husk, refreshing and sweet water.
            </ll>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
