import "./YourPets.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function YourPets() {
  let { userPets } = useContext(UserContext);

  return (
    <div className="YourPets">
      <h1>YOUR PETS</h1>
      <div className="yourPetsContainer">
        {userPets.map((pet, index) => (
          <Link to={`/pet-profile/${pet._id}`} key={index}>
            <div className="yourPetBar">
              {userPets[index].picture.picture.length ? (
                <img
                  src={userPets[index].picture.picture}
                  alt={`${userPets[index].petFirstName}`}
                  className="userPetPic"
                />
              ) : (
                <img
                  src="/M&M logo plain.png"
                  alt="M and M logo"
                  className="userPetPic"
                />
              )}
              <h2>{pet.petFirstName}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default YourPets;
