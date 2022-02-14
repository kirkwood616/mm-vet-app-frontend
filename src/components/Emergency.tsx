import "./Emergency.css";
import { Link } from "react-router-dom";

function Emergency() {
  return (
    <div className="Emergency">
      <h1>EMERGENCY INFORMATION</h1>
      <div className="Emergency info">
        <img className="Emergency info" src="./animal-photos/er.jpg" alt="" />
        <p>
          If you have an emergency after our regular business hours please
          contact:
        </p>
        <li>
          Animal Poison Control Center at (888)426-4435 |(888) 426-4435.{" "}
          <a
            href="https://www.aspca.org/pet-care/animal-poison-control"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASPCA Click here
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/search/emergency+animal+hospital+detroit/@42.4367417,-83.3964396,10z/data=!4m3!2m2!5m1!2e3"
            target="_blank"
            rel="noopener noreferrer"
          >
            24 Hour Emergency Animal Hospitals Near Detroit
          </a>
        </li>
      </div>
      <br />
      <Link to={"/"}>
        <button className="backToHomeMenu">Back to Home-Menu</button>
      </Link>
    </div>
  );
}

export default Emergency;
