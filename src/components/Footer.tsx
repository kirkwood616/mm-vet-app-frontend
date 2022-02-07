// import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <h1>FOOTER</h1>
      <div className="footer-left">
        <h3>
          M&M Vet Clinic{" "}
          <span>
            {" "}
            <img src="" alt="" />
            Logo
          </span>
        </h3>
      </div>

      <div className="footer-center">
        {/* need icon for address, hours, phone, email */}
        <i>Address:</i>
        <p>
          {" "}
          <span>
            M&M Vet Clinic: 555 Fifty Five St., Detroit, MI 48226
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

      <div className="footer-right">
        <h3><span>
          <a href="">About Us</a>
          </span>
          <p>
            Lorem ipsom, Nap all day cat dog hate mouse eat string barf pillow no baths hate
            everything but kitty poochy. Sleep on keyboard toy mouse squeak roll
            over. Mesmerizing birds. Poop on grasses licks paws destroy couch
            intently sniff hand. The dog smells bad gnaw the corn cob.

          </p>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
