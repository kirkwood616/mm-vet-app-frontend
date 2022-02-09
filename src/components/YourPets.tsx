import "./YourPets.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function YourPets() {
  let { userPets } = useContext(UserContext);
  // console.log(userPets);

  return (
    <div className="YourPets">
      <h1>YOUR PETS</h1>
      {userPets.map((pet, index) => (
        <Link to={`/pet-profile/${index}`}>
          <div className="yourPetBar" key={index}>
            <img
              src="https://www.freeiconspng.com/uploads/png-file-png-file-png-file-png-file-png-file-30.png"
              width="100"
              alt="paw icon"
            />
            <h2>{pet.petFirstName}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default YourPets;
