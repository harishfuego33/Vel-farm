import axios from "axios";
import { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import Navfooter from "../components/navfooter";
import UseNotification from "../hooks/usenotification";
import NavBar from "../components/navbar";
import Loader from "../components/loader";

const Contact = () => {
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
  if (loading === false) setTimeout(() => isLoading(false), 1000);
  return (
    <main className="contact__main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <ContactSection />;
          <Navfooter />
        </>
      )}
    </main>
  );
};
const ContactSection = () => {
  const style = { height: "2.5rem", width: "2.5rem" };
  const [fullName, setFullName] = useState("");
  const [mailId, setMailId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { NotificationComponent, triggerNotification } =
    UseNotification("top-right");
  const handleSubmit = async (e) => {
    setDisabled(true);
    triggerNotification({
      type: "info",
      message: "Mail sending please wait",
      duration: 6000,
      animation: "fade-in",
    });
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}/contact`,
        {
          fullName,
          mailId,
          subject,
          description,
        }
      );
      if (response.data) {
        setDisabled(false);
        triggerNotification({
          type: "success",
          message: "Email sent successfully",
          duration: 6000,
          animation: "fade-in",
        });
        setMailId("");
        setSubject("");
        setDescription("");
        setFullName("");
      } else {
        setDisabled(false);
        triggerNotification({
          type: "failed",
          message: "Email sent failed",
          duration: 6000,
        });
      }
    } catch (error) {
      setDisabled(false);
      triggerNotification({
        type: "error",
        message: "mailer failed to start",
        duration: 6000,
        animation: "fade-in",
      });
    }
  };

  return (
    <section className="contact__section">
      {NotificationComponent}
      <div className="contact__img-box">
        <div className="contact__title">
          <h1 className="contact-h1">CONTACT US</h1>
        </div>
        <a
          href="https://www.google.com/maps/place/Vel+Farms/@10.7048482,77.2475136,780m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9cb67cae4dd49:0x78ea3a13793335f1!8m2!3d10.7048447!4d77.2492482!16s%2Fg%2F11ks2s3vh_?entry=ttu"
          target="_blank"
          className="location-link"
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

      <div className="contact">
        <div className="contact__details">
          <div className="contact__address-box">
            <h1 className="contact__get-in">GET IN TOUCH</h1>
            <p className="contact__quotes">
              &quot;Together, we grow strong like a coconut tree, thriving with
              unity and purpose.&quot;
            </p>
            <span className="hr"></span>
            <p className="contact__address">
              <span className="dark--green">Address: </span> NO 3/254 AMICHIA
              GOUNDANUR REDIYARUR POLLACHI Coimbatore TN 642007 INDIA
            </p>
            <p className="contact__address">
              <span className="dark--green">Call us: </span> 9865987603
            </p>
          </div>
          <div className="contact__mail">
            <h1 className="contact__mail-us">MAIL US</h1>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__first-name">
                <p className="contact__input-info">FULL NAME</p>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="contact__input-field"
                  required
                />
              </div>
              <div className="contact__first-name">
                <p className="contact__input-info">E-MAIL ID</p>
                <input
                  type="email"
                  className="contact__input-field"
                  value={mailId}
                  onChange={(e) => setMailId(e.target.value)}
                  required
                />
              </div>
              <div className="contact__first-name">
                <p className="contact__input-info">SUBJECT</p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="contact__input-field"
                  required
                />
              </div>
              <div className="contact__first-name">
                <p className="contact__input-info">DESCRIPTION</p>
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="contact__input-field description-custom"
                  required
                />
              </div>
              <button
                className={`contact__mail-btn ${disabled ? "disable" : ""}`}
                disabled={disabled}
              >
                MAIL
              </button>
            </form>
          </div>
        </div>
        <div className="contact__map">
          <iframe
            className="contact__map-img"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.603234970942!2d77.2492482!3d10.704844699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cb67cae4dd49%3A0x78ea3a13793335f1!2sVel%20Farms!5e1!3m2!1sen!2sin!4v1719210551960!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
