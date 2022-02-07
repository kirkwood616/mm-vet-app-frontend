// import "./RequestConfirmation.css";

function RequestConfirmation() {
  return (
    <div className="RequestConfirmation">
      {/* <h1>REQUEST CONFIRMATION</h1> */}
      <h2>Thank you for requesting an appointment with M&M Veterinary Clinic.</h2>
      <p>
        We've received your request, Our office associate will contact you
        within 24-48 hours to confirm your appointment.
      </p>

      <p>
        <span>
          as the reminder this appointment request is for general visit if you
          have an emergency please contact <a href="/emergency">Emergency</a>
        </span>
      </p>

      <button>
        <a href="/homepage"> Back to homepage </a>
      </button>
    </div>
  );
}

export default RequestConfirmation;
