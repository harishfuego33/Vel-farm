import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
const Contact = () => {
  return (
    <main className="contact__main">
      <ContactSection />;
    </main>
  );
};
const ContactSection = () => {
  const style = { height: "2.5rem", width: "2.5rem" };
  const [fullName, setFullName] = useState("");
  const [mailId, setMailId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  return (
    <section className="contact__section">
      <div className="contact__img-box">
        <div className="contact__title">
          <h1 className="greet__welcome">CONTACT</h1>
        </div>
        <a
          href="https://www.google.com/maps/place/Vel+Farms/@10.7048482,77.2475136,780m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9cb67cae4dd49:0x78ea3a13793335f1!8m2!3d10.7048447!4d77.2492482!16s%2Fg%2F11ks2s3vh_?entry=ttu"
          target="_blank"
          className="locator-link"
        >
          <div className="location-box">
            <div className="location-place">
              <SlLocationPin color="white" style={style} />
              <span className="location-name">Pollachi</span>
            </div>
            <p className="location-info">
              Vel Farms, headquartered in Pollachi, Tamil Nadu, has been a
              leader in the coconut industry since 2004.
            </p>
          </div>
        </a>
      </div>
      <div className="contact__details">
        <h1>MAIL US </h1>
        <form action="#" className="contact__form">
          <div className="contact__first-name">
            <p className="full-name">FULL NAME</p>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="contact__input-field"
              required
            />
          </div>
          <div className="contact__first-name">
            <p className="form__email">E-MAIL ID</p>
            <input
              type="email"
              placeholder="e.g.JaneAppleseed@gmail.com"
              className="contact__input-field"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              required
            />
          </div>
          <div className="contact__first-name">
            <p className="form__email">SUBJECT</p>
            <input
              type="email"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="contact__input-field"
              required
            />
          </div>
          <div className="contact__description">
            <p className="form__email">DESCRIPTION</p>
            <input
              type="email"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="contact__input-field"
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
