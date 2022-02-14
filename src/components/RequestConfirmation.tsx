import "./RequestConfirmation.css";
import { Link } from "react-router-dom";

function RequestConfirmation() {
  function requestAlert() {
    window.confirm("Are You Sure You Want to Submit This Request?");
  }
  return (
    <div className="RequestConfirmation">
      <div className="confirmContainer">
        <h2>Thank you for requesting an appointment.</h2>
        <p>
          We've received your request. Our staff will contact you within 24-48
          hours to confirm your appointment.
        </p>

        <p>
          As a reminder, this appointment request is for a general visit. If you
          have an emergency please see our{" "}
          <Link to={"/emergency"}>Emergency</Link> page.
        </p>

        <p className="italic">
          We do not guarantee an appointment by submitting a request.
        </p>
        <Link to={"/"}>
          <button onClick={() => requestAlert}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default RequestConfirmation;
