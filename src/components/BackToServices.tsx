import { Link } from "react-router-dom";
import "./BackToServices.css";

function BackToServices() {
  return (
    <div className="BackToServices">
      <div className="petWellness icon">
        <Link to={"/services"}>
          <img
            src="/icons/arrowIcon.svg"
            alt="arrow-back"
            height={40}
            width={40}
          />{" "}
          Back to Our Services
        </Link>
      </div>
    </div>
  );
}

export default BackToServices;
