import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <h3>M&M Veterinary Clinic </h3>
      {/* <img src="M&M veterinary clinic.png" alt="logo" /> */}

      <div className="vetInfo">
        <div className="info">
          <img src="/icons/map.svg" alt="Map Icon" className="icon" />
          <div className="infoText">
            <p>555 Fifty Five St.</p>
            <p>Detroit, MI 48226</p>
          </div>
        </div>

        <div className="info">
          <img src="/icons/time.svg" alt="Clock Icon" className="icon" />
          <div className="infoText">
            <p>Mon-Sat: 8:00am - 6:00pm</p>
          </div>
        </div>

        <div className="info">
          <img src="/icons/mobile.svg" alt="Phone Icon" className="icon" />
          <div className="infoText">
            <p>+1.555-555-5555</p>
          </div>
        </div>

        <div className="info">
          <img src="/icons/mail.svg" alt="Mail Icon" className="icon" />
          <div className="infoText">
            <p>
              <a href="mailto:">info@mm-vetclinic.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
