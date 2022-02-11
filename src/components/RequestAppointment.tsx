import "./RequestAppointment.css";
import { Link } from "react-router-dom";
import RequestAptForm from "./RequestAppointmentForm";

function RequestAppointment() {
  return (
    <div className="RequestAppointment">
      <h1>REQUEST APPOINTMENT</h1>
      <div className="requestContainer">
        <h3>
          We would love the see you! You can complete this form for general
          visit or request a prescription refill.
        </h3>

        <p>
          However, it is best to click the Request Appointment button to
          schedule an appointment or Login into{" "}
          <Link to={"/your-pets"}>Your Pet</Link> Portal for:
        </p>
        <ul>
          <li>Access your pet’s profile and medical records</li>
          <li>View upcoming services due</li>
          <li>View scheduled appointments</li>
        </ul>
        <br />
        <h4>
          Request an appointment time or request a prescription refill by
          filling out the form below.
        </h4>
        <RequestAptForm />
      </div>
    </div>
  );
}

export default RequestAppointment;
