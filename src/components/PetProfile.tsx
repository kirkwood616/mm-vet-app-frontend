// import "./PetProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";

function PetProfile() {
  let { userPets } = useContext(UserContext);
  let { index } = useParams();

  return (
    <div className="PetProfile">
      <h1>{userPets[Number(index)].petFirstName}'s Profile</h1>
      <img
        src="https://www.freeiconspng.com/uploads/png-file-png-file-png-file-png-file-png-file-30.png"
        width="150"
        alt="paw icon"
      />
    </div>
  );
}

export default PetProfile;
