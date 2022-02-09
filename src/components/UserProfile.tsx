import "./UserProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function UserProfile() {
  let { user } = useContext(UserContext);

  return (
    <div className="UserProfile">
      {/* <h1>OWNER PROFILE</h1> */}
      {/* customer profile */}
      <h2>Your Information</h2>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>
        Address:{" "}
        {user.address.map(
          (item) => `${item.street} | ${item.city}, ${item.state} ${item.zip}`
        )}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
      <br />
      <h2>
        {" "}
        <Link to="/your-pets">Your Pets</Link>
      </h2>
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
