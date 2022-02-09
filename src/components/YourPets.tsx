// import "./YourPets.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function YourPets() {
  let { userPets } = useContext(UserContext);
  console.log(userPets);

  return (
    <div className="YourPets">
      <h1>YOUR PETS</h1>
      <div className="pet-card">
        {/* <a href="/pet-profile">
          {" "}
          <img src="" alt="" height={300} width={300} />
          Pet Name
        </a> */}
        {userPets.map((pet) => (
          <p>{pet.petFirstName + " " + pet.petLastName}</p>
        ))}
      </div>
    </div>
  );
}

export default YourPets;
