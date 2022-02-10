import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-left">
        <h3>M&M Veterinary Clinic </h3>
        <span>
          {" "}
          <img src="M&M veterinary clinic.png" alt="logo" />
        </span>
      </div>

      <div className="footer-center">
        {/* need icon for address, hours, phone, email */}
        <i>Address:</i>
        <p>
          {" "}
          <span>
            M&M Veterinary Clinic: 555 Fifty Five St., Detroit, MI 48226
          </span>{" "}
        </p>
        <i>Hours:</i>
        <p> Open - Mon-Sat 8am-6pm</p>
        <i>Contact:</i>
        <p>+1.555-555-5555</p>
        <i>email</i>
        <p>
          {" "}
          <a href="mailto:">info@m&m.vetclinic.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
