import "./RequestAptForm.css";
import { Link } from "react-router-dom";

function RequestAptForm() {
  return (
    <div className="RequestAptForm">
      <form action="submit" className="formContainer">
        <label htmlFor="name">
          <p>Name:</p>
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="pet-name">
          <p>Pet Name:</p>
        </label>
        {/* enter pet name or select dropdown  */}
        <input type="text" name="pet-name" id="pet-name" />
        {/* dropDownPet */}
        <select name="pet-name" id="pet-name">
          {}
        </select>
        <br />
        <label htmlFor="calendar">
          <p>Date:</p>
        </label>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          data-role="calendarpicker"
        ></input>
        <label htmlFor="time">
          <p>Time:</p>
        </label>
        <input type="time" placeholder="HH:MM AM/PM" />
        <label htmlFor="note">
          <p>Reason For Request:</p>
        </label>
        <textarea name="note" id="note"></textarea>
        <br />
        <Link to={"/request-confirmation"}>
          <button>Request Appointment</button>
        </Link>
      </form>
    </div>
  );
}

export default RequestAptForm;
