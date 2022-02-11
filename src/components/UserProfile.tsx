import "./UserProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function UserProfile() {
  let { user } = useContext(UserContext);

  return (
    <div className="UserProfile">
      <h1>Your Information</h1>
      <div className="infoContainer">
        <p>
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {user.address.map(
            (item) => `${item.street} / ${item.city}, ${item.state} ${item.zip}`
          )}
        </p>
        <p>
          <strong>Phone: </strong>
          {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <br />
        <h3>
          {" "}
          <Link to="/your-pets">Your Pets</Link>
        </h3>
      </div>
      <br />
      <h3>Update your contact information</h3>
      <div className="update-contact-info">
        {/* set update info hidden till client click request the update */}
        {/* <form >
          <input type="text">Address</input>
          <input type="text">Phone</input> 
          <input type="text">Email</input>
        </form> */}
      </div>
    </div>
  );
}

export default UserProfile;
