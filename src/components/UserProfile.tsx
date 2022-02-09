import { useContext } from "react";
import UserContext from "../context/UserContext";

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
        <a href="/pet-profile">Your Pets</a>
      </h2>
      <br />
      <h3>
        <a href="/update-contact-info">
          Update your contact information click!
        </a>
      </h3>
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
