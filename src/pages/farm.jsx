import Navfooter from "../components/footer";
const Farms = () => {
  return (
    <main className="farm__main">
      <FarmSection />
      <FarmGallery />
      <Navfooter />
    </main>
  );
};

const FarmSection = () => {
  return (
    <section className="farm__section">
      <div className="contact__title">
        <h1 className="contact-h1">OUR FARMS</h1>
        <p className="greet__para">
          At Vel Farms, our coconuts thrive in fertile environments across
          Pollachi, Udumalpet, Palani, Sathyamangalam, Coimbatore, Kangeyam, and
          Anamalai. We prioritize sustainable farming with eco-friendly methods.
          Our farmers use innovative and traditional techniques to ensure
          top-quality coconuts, nurtured with care and harvested with pride.
          Experience the pure, natural difference in every product. Join us in
          supporting sustainable agriculture and local communities.
        </p>
      </div>
    </section>
  );
};
const FarmGallery = () => {
  return (
    <section className="farm__gallery">
      <div className="farm__gallery-cards">
        <div className="farm__gallery-card" data-line="POLLACHI">
          <img
            src="/assets/farm/farm-1.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para ">
            Vel Farms &apos; headquarters in Pollachi is renowned for its lush
            greenery and thriving coconut plantations. This central hub
            showcases advanced farming techniques and sustainable practices. It
            serves as the main operational and distribution center.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="UDUMALPET">
          <img
            src="/assets/farm/farm-2.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            In Udumalpet, Vel Farms benefits from a favorable climate ideal for
            coconut cultivation. The farm combines traditional methods with
            modern innovations. This ensures the production of high-quality
            coconuts.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="PALANI">
          <img
            src="/assets/farm/farm-3.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            Vel Farms &apos; Palani location is dedicated to organic farming
            practices. Nestled in the Western Ghats, this farm produces
            organically certified coconuts. It ensures chemical-free and
            eco-friendly cultivation methods.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="ANAMALAI">
          <img
            src="/assets/farm/farm-4.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            In Anamalai, Vel Farms operates amidst a biodiverse landscape,
            perfect for sustainable coconut farming. The farm integrates
            agroforestry practices to promote biodiversity. This ensures
            long-term ecological balance.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="COIMBATORE">
          <img
            src="/assets/farm/farm-5.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            The Coimbatore farm leverages the city &apos; s industrial
            infrastructure and agricultural expertise. This location integrates
            technology with traditional farming practices. The goal is to
            enhance productivity and quality.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="SATHYAMANGALAM">
          <img
            src="/assets/farm/farm-6.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            The Sathy farm is set in a picturesque area with rich soil and ample
            water resources. It focuses on maximizing yield while maintaining
            environmental sustainability. Soil health is a top priority here.
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
        <div className="farm__gallery-card" data-line="KANGEYAM">
          <img
            src="/assets/farm/farm-7.webp"
            alt="farms-log"
            className="gallery-img"
          />
          <div className="farm__gallery-para">
            Located in Kangeyam, Vel Farms utilizes well-drained soil and a
            consistent climate for robust coconut crops. The farm is known for
            high-yield varieties and efficient water management. Practices are a
            key focus here
          </div>
          <span className="farm__gallery-overlay"></span>
        </div>
      </div>
    </section>
  );
};

export default Farms;
