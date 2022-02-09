import "./PetProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PetProfile() {
  let { userPets } = useContext(UserContext);
  let { index } = useParams();
  let i = Number(index);

  return (
    <div className="PetProfile">
      <h1>{userPets[i].petFirstName}'s Profile</h1>
      <img
        src="https://www.freeiconspng.com/uploads/png-file-png-file-png-file-png-file-png-file-30.png"
        width="150"
        alt="paw icon"
      />
      <div className="petProfileInfo">
        <p>
          <strong>Name:</strong> {userPets[i].petFirstName}{" "}
          {userPets[i].petLastName}
        </p>
        <p>
          <strong>Species:</strong> {userPets[i].species}
        </p>
        <p>
          <strong>Breed:</strong> {userPets[i].breed}
        </p>
        <p>
          <strong>Color:</strong> {userPets[i].color}
        </p>
        <p>
          <strong>Sex:</strong> {userPets[i].sex}
        </p>
        <p>
          <strong>{userPets[i].sex === "Male" ? "Neutered" : "Spayed"}:</strong>{" "}
          {userPets[i].isFixed === true ? "Yes" : "No"}
        </p>
        <p>
          <strong>Date of Birth:</strong> {userPets[i].dateOfBirth}
        </p>
        <p>
          <strong>Weight:</strong> {userPets[i].weight} lbs.
        </p>
        <p>
          <strong>Diet:</strong> {userPets[i].diet}
        </p>
        <p>
          <strong>Health Records:</strong>{" "}
          <Link to={"/health-records"}>Health Records</Link>
        </p>
      </div>
    </div>
  );
}

export default PetProfile;
