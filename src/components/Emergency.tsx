import "./Emergency.css";
import { Link } from "react-router-dom";

function Emergency() {
  return (
    <div className="Emergency">
      <h1>EMERGENCY INFORMATION</h1>
      <p>
        If you have an emergency after our regular business hours please
        contact:
      </p>
      <li>
        <a
          href="https://www.google.com/maps/search/emergency+animal+hospital+detroit/@42.437424,-83.3964379,10z/data=!3m1!4b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emergency animal hospital near Detroit
        </a>
      </li>

      <button>
        <Link to={"/"}>Back to Home-Menu</Link>
      </button>
    </div>
  );
}

export default Emergency;
