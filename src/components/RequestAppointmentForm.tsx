import "./RequestAptForm.css";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import {
  getFormattedDateFromInput,
  getFormattedTimeFromInput,
} from "../functions/functions";
import AppointmentRequest from "../models/AppointmentRequest";
import { sendAppointmentRequest } from "../services/VetApiService";
import { useNavigate } from "react-router-dom";
import cleanData from "../functions/sanitize";

function RequestAptForm() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);
  const navigate = useNavigate();
  const name = `${user.firstName} ${user.lastName}`;
  const [petName, setPetName] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [requestTime, setRequestTime] = useState("");
  const [requestReason, setRequestReason] = useState("");

  function handleRequestSubmit(e: FormEvent) {
    e.preventDefault();
    let newRequest: AppointmentRequest = {
      userName: name,
      userPet: petName,
      requestDate: String(getFormattedDateFromInput(requestDate)),
      requestTime: String(getFormattedTimeFromInput(requestTime)),
      requestReason: cleanData(requestReason),
    };
    sendAppointmentRequest(newRequest);
    setPetName("");
    setRequestDate("");
    setRequestTime("");
    setRequestReason("");
    navigate("/request-confirmation");
  }

  return (
    <div className="RequestAptForm">
      <form
        action="submit"
        className="formContainer"
        onSubmit={handleRequestSubmit}
      >
        <label htmlFor="name">
          <span className="formFieldTitle">Name:</span>
        </label>
        <input
          readOnly
          type="text"
          name="name"
          id="name"
          defaultValue={`${user.firstName} ${user.lastName}`}
        />
        <label htmlFor="pet-name">
          <span className="formFieldTitle">Pet Name:</span>
        </label>
        {/* <input type="text" name="pet-name" id="pet-name" /> */}
        <select
          name="pet-name"
          id="pet-name"
          defaultValue={"select"}
          required
          onChange={(e) => setPetName(e.target.value)}
        >
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
          <span className="formFieldTitle">Date:</span>
        </label>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          data-role="calendarpicker"
          id="calendar"
          required
          onChange={(e) => setRequestDate(e.target.value)}
        ></input>
        <label htmlFor="time">
          <span className="formFieldTitle">Time:</span>
        </label>
        <input
          type="time"
          placeholder="HH:MM AM/PM"
          id="time"
          min={"08:00"}
          max={"18:00"}
          required
          onChange={(e) => setRequestTime(e.target.value)}
        />
        <label htmlFor="note">
          <span className="formFieldTitle">Reason For Request:</span>
        </label>
        <textarea
          name="note"
          id="note"
          required
          onChange={(e) => setRequestReason(e.target.value)}
        ></textarea>
        <button onClick={() => window.confirm("Are You Sure?")}>
          Send Request
        </button>
      </form>
    </div>
  );
}

export default RequestAptForm;
