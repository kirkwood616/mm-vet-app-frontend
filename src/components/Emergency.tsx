import "./Emergency.css";
import { Link } from "react-router-dom";

function Emergency() {
  return (
    <div className="Emergency">
      <h1>EMERGENCY INFORMATION</h1>
      <div className="emergencyInfo">
        <img className="emergencyImage" src="./animal-photos/er.jpg" alt="" />
        <br />
        <p>
          If you have an emergency after our regular business hours please
          contact:
        </p>
        <p>
          <strong>Animal Poison Control Center</strong>
        </p>
        <li>(888) 426-4435</li>
        <li>
          <a
            href="https://www.aspca.org/pet-care/animal-poison-control"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASPCA Website
          </a>
        </li>
        <p>
          <strong>
            <a
              href="https://www.google.com/maps/search/emergency+animal+hospital+detroit/@42.4367417,-83.3964396,10z/data=!4m3!2m2!5m1!2e3"
              target="_blank"
              rel="noopener noreferrer"
            >
              24 Hour Emergency Animal Hospitals Near Detroit
            </a>
          </strong>
        </p>
      </div>
      <br />
      <Link to={"/"}>
        <button className="backToHomeMenu">Back to Home-Menu</button>
      </Link>
    </div>
  );
}

export default Emergency;
