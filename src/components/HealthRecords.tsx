import "./HealthRecords.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams, Link } from "react-router-dom";

function HealthRecords() {
  let { userPets } = useContext(UserContext);
  let { id } = useParams();
  let currentPet = userPets.find((pet) => pet._id === id);

  return (
    <div className="HealthRecords">
      <h1>HEALTH RECORDS</h1>
      <div className="recordsContainer">
        <img
          src={currentPet?.picture.picture}
          alt={`${currentPet?.petFirstName}`}
          className="petPicture"
        />
        <h2>{currentPet?.petFirstName}</h2>
        <div className="header">VACCINATIONS</div>
        {/* {currentPet?.vaccinations} */}
        {currentPet?.vaccinations ? (
          <div className="body">
            {currentPet?.vaccinations.map((item, index) => (
              <div className="vaccineContainer" key={index}>
                <div className="title">{item.vaccineName}</div>
                <div className="info">
                  <p className="date">Vaccination Date</p>
                  <p>{item.vaccineDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="body">
            <p className="requestVaccinationText">
              Please{" "}
              <Link to={"/request-appointment"}>Request An Appointment</Link> to
              get {currentPet?.petFirstName} vaccinations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthRecords;
