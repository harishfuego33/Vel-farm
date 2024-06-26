const Farms = () => {
  return (
    <main className="farm__main">
      <FarmSection />
      <FarmGallery />
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
        </div>
        <div className="farm__gallery-card" data-line="UDUMALPET">
          <img
            src="/assets/farm/farm-2.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
        <div className="farm__gallery-card" data-line="PALANI">
          <img
            src="/assets/farm/farm-3.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
        <div className="farm__gallery-card" data-line="ANAMALAI">
          <img
            src="/assets/farm/farm-4.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
        <div className="farm__gallery-card" data-line="COIMBATORE">
          <img
            src="/assets/farm/farm-5.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
        <div className="farm__gallery-card" data-line="SATHYAMANGALAM">
          {" "}
          <img
            src="/assets/farm/farm-6.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
        <div className="farm__gallery-card" data-line="KANGEYAM">
          {" "}
          <img
            src="/assets/farm/farm-7.webp"
            alt="farms-log"
            className="gallery-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Farms;
