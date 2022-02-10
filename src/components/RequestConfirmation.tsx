import "./RequestConfirmation.css";
import { Link } from "react-router-dom";

function RequestConfirmation() {
  return (
    <div className="RequestConfirmation">
      <h2>
        Thank you for requesting an appointment with M&M Veterinary Clinic.
      </h2>
      <p>
        We've received your request, Our office associate will contact you
        within 24-48 hours to confirm your appointment.
      </p>

      <p>
        <span>
          As a reminder this appointment request is for a general visit. If you
          have an emergency please see our{" "}
          <Link to={"/emergency"}>Emergency</Link> page.
        </span>
      </p>

      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default RequestConfirmation;
