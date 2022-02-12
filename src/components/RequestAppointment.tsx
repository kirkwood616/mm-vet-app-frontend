import "./RequestAppointment.css";
import { Link } from "react-router-dom";
import RequestAptForm from "./RequestAppointmentForm";

function RequestAppointment() {
  return (
    <div className="RequestAppointment">
      <h1>REQUEST APPOINTMENT</h1>
      <div className="requestContainer">
        <h2>We would love to see you!</h2>
        <p>Request an appointment by filling out the form below.</p>
        <p>
          Our staff will contact you to either confirm or reschedule your
          requested appointment based on availability.
        </p>
        <p>
          If this is an emergency, please see our{" "}
          <Link to={"/emergency"}>Emergency</Link> section.
        </p>
        <RequestAptForm />
        <p className="noGuarantee">
          * We do not guarantee an appointment by submitting this form *
        </p>
      </div>
    </div>
  );
}

export default RequestAppointment;
