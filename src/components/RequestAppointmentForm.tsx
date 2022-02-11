import "./RequestAptForm.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function RequestAptForm() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);

  return (
    <div className="RequestAptForm">
      <form action="submit" className="formContainer">
        <label htmlFor="name">
          <p>Name:</p>
        </label>
        <input
          readOnly
          type="text"
          name="name"
          id="name"
          defaultValue={`${user.firstName} ${user.lastName}`}
        />
        <label htmlFor="pet-name">
          <p>Pet Name:</p>
        </label>
        {/* <input type="text" name="pet-name" id="pet-name" /> */}
        <select name="pet-name" id="pet-name" defaultValue={"select"} required>
          <option value={"select"} disabled>
            --- Select Pet ---
          </option>
          {userPets.map((pet, index) => (
            <option value={pet.petFirstName} key={index}>
              {pet.petFirstName}
            </option>
          ))}
        </select>
        <label htmlFor="calendar">
          <p>Date:</p>
        </label>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          data-role="calendarpicker"
          id="calendar"
          required
        ></input>
        <label htmlFor="time">
          <p>Time:</p>
        </label>
        <input
          type="time"
          placeholder="HH:MM AM/PM"
          id="time"
          min={"08:00"}
          max={"18:00"}
          required
        />
        <label htmlFor="note">
          <p>Reason For Request:</p>
        </label>
        <textarea name="note" id="note" required></textarea>
        <Link to={"/request-confirmation"}>
          <button>Send Request</button>
        </Link>
      </form>
    </div>
  );
}

export default RequestAptForm;
