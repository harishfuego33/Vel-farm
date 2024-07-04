import Navfooter from "../components/navfooter";
import AnimationLoader from "../hooks/useAnimationLoader";
import NavBar from "../components/navbar";
import { useState } from "react";

const About = () => {
  const [loading, isLoading] = useState(true);
  AnimationLoader(() => isLoading(false));
  // AnimationLoader(() => isLoading(false));

  // if (loading === true) {
  //   setTimeout(() => {
  //     isLoading(false);
  //   }, 2000);
  // }
  return (
    <main className="about__main">
      <NavBar loading={loading} />
      <AboutSection loading={loading} />
      <GoalSection />
      <ExportSection />
      <ColabSection />
      <Navfooter />
    </main>
  );
};
const AboutSection = ({ loading }) => {
  return (
    <section className="about__section">
      <div
        className={`founder__container ${!loading ? "founder__loaded" : ""}`}
      >
        <span className="overlay"></span>
        <div className="founder__container-img"></div>
        <div className="founder__container-info">
          <div className="founder__container-info-box">
            <h5 className="founder__container-title">FOUNDER</h5>
            <h1 className="founder__container-name">SARAVANAN</h1>
          </div>
          <p className="founder__container-para">
            Saravanan, the visionary founder of Vel Farms and Vel Agency, has
            established a thriving business in the coconut industry. With his
            dedication and innovative practices, he has transformed Vel Farms
            into a leading name in coconut farming and product manufacturing.
            Under his leadership, the business has expanded significantly,
            ensuring quality and sustainability in every aspect.Vel Farms,
            headquartered in Pollachi, Tamil Nadu, is a leading player in the
            coconut cultivation and supply industry. With a rich history rooted
            in sustainable farming practices and a commitment to quality, Vel
            Farms has established itself as a trusted name in the market. The
            company has been activey functioning from 2004 and it is owned Velu
            agency private limited.
          </p>
        </div>
      </div>
    </section>
  );
};
const GoalSection = () => {
  return (
    <section className="goal__section">
      <h1 className="heading__primary">
        <span className="secondary__color">Our </span> Story, Vision{" "}
        <span className="secondary__color">and </span>
        Mission
      </h1>
      <div className="goal__cards">
        <div className="goal__card">
          <p className="goal__card-title">Our Story</p>
          <div className="goal__card-description">
            <p>
              &quot;Welcome to Vel Farms, where our passion for coconuts began
              generations ago. Nestled in the heart of India&quot;s lush coconut
              regions, our journey started with a simple vision: to cultivate
              the finest coconuts using sustainable practices. Today, we proudly
              continue this tradition, delivering pure, natural goodness from
              our farms to your table.&quot;
            </p>
          </div>
        </div>
        <div className="goal__card">
          <p className="goal__card-title">Our Mission</p>
          <div className="goal__card-description">
            <p>
              &quot;At Vel Farms, our mission is to produce the highest quality
              coconut products while promoting sustainable farming practices. We
              are dedicated to preserving the natural goodness of coconuts,
              supporting our local community, and ensuring the well-being of our
              environment. By adhering to these principles, we aim to deliver
              products that are good for you and the planet.&quot;
            </p>
          </div>
        </div>
        <div className="goal__card">
          <p className="goal__card-title">Our Vision</p>
          <div className="goal__card-description">
            &quot;At Vel Farms, we prioritize eco-friendly farming practices for
            the long-term health of our environment. We produce the finest
            coconut products with rigorous standards. Supporting local farmers
            and the community through fair practices is essential to us. We
            operate with honesty and transparency, building trust with our
            customers.&quot;
          </div>
        </div>
      </div>
    </section>
  );
};
const ExportSection = () => {
  return (
    <section className="export__section">
      <div className="export__section-title-box">
        <h3 className="export__section-title">Exports</h3>
      </div>
      <div className="export__section-para-box">
        <p className="export__section-para">
          At Vel Farms, we are committed to delivering the finest coconut
          products to our customers worldwide. Our products, including coconut
          milk, virgin coconut oil, desiccated coconut, wood-pressed coconut
          oil, packed tender coconut (no preservatives), copra, and coir
          products, are exported to Dubai, Saudi Arabia, Kuwait, and Oman via
          ships. We ensure that each shipment is carefully packed and
          transported to maintain the freshness and quality of our products. By
          leveraging efficient maritime logistics, we guarantee timely and
          reliable delivery, allowing our customers to enjoy the pure and
          natural goodness of Vel Farms &apos; coconut products no matter where
          they are.
        </p>
      </div>
    </section>
  );
};
const ColabSection = () => {
  return (
    <section className="colab__section">
      <div className="colab__section-container">
        <div className="colab__section-container-1">
          <div className="colab__section-title-box">
            <h1 className="colab__section-title">
              Openness to New Opportunities
            </h1>
          </div>
          <p className="colab__section-para">
            Vel Farms is open to diversifying its product range, collaborating
            for export opportunities, and establishing overseas tie-ups to
            enhance its international presence. We aim to build long-term
            partnerships that foster mutual growth and benefit. Our focus is on
            innovation and sustainability, ensuring we meet the evolving needs
            of our global customers. Together, we can cultivate success and
            expand our reach. Let&apos;s grow our businesses and farms hand in
            hand for a prosperous future.
          </p>
        </div>
        <div className="colab__section-container-1">
          <div className="colab__section-title-box">
            <h1 className="colab__section-title">
              Farm Infrastructure and Capacity
            </h1>
          </div>
          <p className="colab__section-para">
            Vel Farms boasts an expansive command area spread across more than
            1,400 acres. Strategically located across five major river belts -
            Amaravathi, Aliyar, Thirumoorthy, Noyyal, and Porunthalar, the farms
            benefit from fertile soil and optimal climatic conditions, ideal for
            coconut cultivation. Total Coconut Tree Capacity: 120,000 trees
            Yielding Stage Trees: 90,000 trees
          </p>
        </div>
        <div className="colab__section-container-1">
          <div className="colab__section-title-box">
            <h1 className="colab__section-title">
              Comprehensive Infrastructure and Operations
            </h1>
          </div>
          <h2 className="colab__section-sub-2">Company Infrastructure</h2>
          <li className="colab__section-ul">Weighing Bridge</li>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">Capacity: </span>Integrated weighing
            bridge for accurate measurement of coconut and its products.
          </p>

          <li className="colab__section-ul">
            Storage Facilities and Labour Office
          </li>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">Godown Capacity: </span>Stocking
            capacity of up to 100 tons at a time, ensuring timely and efficient
            supply chain management.
          </p>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">Labour Office: </span>The labour
            quarters accommodate 60 people and are situated in Zamin Muthur,
            Pollachi.
          </p>
          <li className="colab__section-ul">Manpower</li>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">Capacity: </span>Integrated weighing
            bridge for accurate measurement of coconut and its products.
          </p>
          <li className="colab__section-ul">Customized Supply Solutions</li>
          <p className="colab__section-para margin-top-0">
            Vel Farms offers tailored packaging to meet specific customer
            requirements and efficient, organized bulk packaging to cater to
            larger orders and diverse market needs.
          </p>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">Loose(A-la-carte)Packing:</span>
            Tailored packaging to meet specific customer requirements.
          </p>
          <p className="colab__section-para margin-top-0">
            <span className="dark--green">
              Bulk Quality Segregated Packing:
            </span>
            Efficient and organized bulk packaging to cater to larger orders and
            diverse market needs
          </p>
        </div>
      </div>
      <div className="colab__section-img">
        <img
          src="/assets/about/handshake-1.webp"
          alt="farms-log"
          className="about__img"
        />
        <img
          src="/assets/about/handshake.webp"
          alt="farms-log"
          className="about__img"
        />
      </div>
    </section>
  );
};
export default About;
