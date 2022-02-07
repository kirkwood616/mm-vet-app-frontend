// import "./RequestAppointment.css";

function RequestAppointment() {
  return (
    <div className="RequestAppointment">
      <h1>REQUEST APPOINTMENT</h1>
      <form action="" className="form-container">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="pet-name">Pet Name:</label>
        {/* enter pet name or select dropdown  */}
        <input type="text" name="pet-name" id="pet-name" />
        {/* dropDownPet */}
        <select name="pet-name" id="pet-name">
          {}
        </select>
        <br />
        <label htmlFor="calendar">Date:</label>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          data-role="calendarpicker"
        ></input>
        <label htmlFor="time">Time:</label>
        <input type="time" placeholder="HH:MM AM/PM" />
        <label htmlFor="note">Reason for Visit</label>
        <textarea name="note" id="note"></textarea>
        <br />
        <button type="submit">Submit your Request</button>
      </form>
    </div>
  );
}

export default RequestAppointment;
