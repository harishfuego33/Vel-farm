import { NavLink } from "react-router-dom";
import NavFooter from "../components/navfooter";
import NavBar from "../components/navbar";
import AnimationLoader from "../hooks/useAnimationLoader";
import { useState } from "react";
const Product = () => {
  const [loading, isLoading] = useState(true);
  AnimationLoader(() => {
    isLoading(false);
  });
  if (loading === true) {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }
  return (
    <main className="product__main">
      <NavBar loading={loading} />
      <ProductSection loading={loading} />
      <ProductList />
      <NavFooter />
    </main>
  );
};
const ProductSection = ({ loading }) => {
  return (
    <section className={`product__section ${!loading ? "loaded" : ""}`}>
      <div className="product__heading-box">
        <h1 className="product__heading text-align-center">
          <span className="display-inline-block slide-to-down ">VEL</span>
          <span className="display-inline-block _green slide-bottom-up">
            PRODUCTS
          </span>
        </h1>
      </div>
      <div className="product__heading-box">
        <h3 className="product__section-sub">
          <span className="display-inline-block slide-bottom-up ">our</span>
          <span className="display-inline-block _green slide-to-down m-l-1">
            premium
          </span>
          <span className="display-inline-block slide-left-right m-l-1">
            coconut products
          </span>
        </h3>
      </div>
    </section>
  );
};
const ProductList = () => {
  const data = [
    {
      title: "Coconut Milk",
      description:
        "Vel Farms produces high-quality coconut milk known for its rich and creamy texture. It is perfect for culinary uses and enhances the flavor of various dishes. The milk is extracted from fresh coconuts to ensure purity and taste.",
      image: "/assets/product/product-1.webp",
    },
    {
      title: "Virgin Coconut Oil",
      description:
        " We take a consultative approach to working with our clients. We work closely with them to understand their needs and develop customized solutions that help them achieve their business goals. Our goal is to build long-term relationships with our clients and help them grow their businesses.",
      image: "/assets/product/product-2.webp",
    },
    {
      title: "Desiccated Coconut",
      description:
        "The desiccated coconut from Vel farms is finely grated and dried to perfection. It is ideal for baking and cooking, adding a natural sweetness and texture. This product retains the full flavor and nutrients of fresh coconuts.",
      image: "/assets/product/product-3.webp",
    },
    {
      title: "Wood Pressed Coconut Oil",
      description:
        "The wood-pressed coconut oil from Vel farms is made using traditional methods, ensuring maximum nutrient retention. This oil has a rich, natural taste and is ideal for cooking and cosmetic uses. It is produced without any chemicals or preservatives.",
      image: "/assets/product/product-4.webp",
    },
    {
      title: "Packed Tender Coconut   (No Preservatives)",
      description:
        "Vel Farms offers packed tender coconut water, which is naturally refreshing and hydrating. The water is extracted from young coconuts and packed without any preservatives. This ensures a pure and healthy beverage option.",
      image: "/assets/product/product-5.webp",
    },
    {
      title: "Coconut Copra",
      description:
        "Vel Farms produces high-quality copra from carefully dried coconut meat, ideal for oil extraction and culinary use. Our copra retains its nutritional value and rich flavor, processed under strict quality control standards. We are committed to delivering the best copra for your needs.",
      image: "/assets/product/product-6.webp",
    },
    {
      title: "Coir Products",
      description:
        "At Vel Farms, we produce high-quality coir products from coconut husks. Our range includes durable coir mats, ropes, and garden products. These eco-friendly items support soil health and plant growth, reflecting our commitment to sustainability and the full utilization of the coconut.",
      image: "/assets/product/product-7.webp",
    },
  ];
  return (
    <section className="product__list">
      {data.map((items, index) => (
        <ProductCard key={index} {...items} />
      ))}
    </section>
  );
};
const ProductCard = ({ title, description, image }) => {
  return (
    <div className="product__card">
      <div className="product__card-front">
        <div className="product__image-box">
          <img src={image} alt="farms-log" className="gallery-img" />
        </div>
        <div className="product__description-box">
          <h1 className="product__title">{title}</h1>
          <p className="product__description">{description}</p>
        </div>
      </div>
      <div className="product__card-back">
        <div className="logo-box">
          <img src="/assets/logo.png" alt="farms-log" className="logo" />
        </div>
        <p className="product__description-back">
          TO PURCHASE THE PRODUCT PLEASE SEND A MAIL TO RESPECT MAIL ID OR CALL
          US
        </p>
        <NavLink to={"/contact"}>
          <button className="product__description-button">CONTACT</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
