import "./PetProfile.css";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPetAge } from "../functions/functions";

function PetProfile() {
  let { userPets } = useContext(UserContext);
  let { id } = useParams();
  let i = userPets.findIndex((pet) => pet._id === id);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="PetProfile">
      <h1>{userPets[i].petFirstName}'s Profile</h1>
      <div className="petProfileInfo">
        <div className="imageContainer">
          <img
            src={userPets[i].picture.picture}
            alt="paw icon"
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <p className={isActive ? "isActive upload" : "hidden upload"}>
          {/* <Link to={`/pet-profile/image-upload/${id}`}> */}
          <span
            className="uploadLink"
            onClick={() => navigate(`/pet-profile/image-upload/${id}`)}
          >
            Upload Image
          </span>
          {/* </Link> */}
        </p>
        <table>
          <tbody>
            <tr>
              <th className="first">Name</th>
              <td>
                {userPets[i].petFirstName} {userPets[i].petLastName}
              </td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{getPetAge(userPets[i])}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{userPets[i].dateOfBirth}</td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>{userPets[i].sex}</td>
            </tr>
            <tr>
              <th>{userPets[i].sex === "Male" ? "Neutered" : "Spayed"}</th>
              <td>{userPets[i].isFixed === true ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Species</th>
              <td>{userPets[i].species}</td>
            </tr>
            <tr>
              <th>Breed</th>
              <td>{userPets[i].breed}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{userPets[i].color}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{userPets[i].weight} lbs.</td>
            </tr>
            <tr>
              <th>Diet</th>
              <td>{userPets[i].diet}</td>
            </tr>
            <tr>
              <th>Microchip</th>
              <td>{userPets[i].isMicroChipped ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Health Records</th>
              <td className="last">
                <Link to={"/health-records"}>Health Records</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PetProfile;
