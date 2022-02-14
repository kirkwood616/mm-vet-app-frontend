import "./YourPets.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function YourPets() {
  let { userPets } = useContext(UserContext);

  return (
    <div className="YourPets">
      <h1>YOUR PETS</h1>
      {userPets.map((pet, index) => (
        <Link to={`/pet-profile/${pet._id}`} key={index}>
          <div className="yourPetBar">
            <img
              src={userPets[index].picture.picture}
              alt={`${userPets[index].petFirstName}`}
              className="userPetPic"
            />
            <h2>{pet.petFirstName}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default YourPets;
