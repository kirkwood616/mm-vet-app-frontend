import "./UserProfile.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function UserProfile() {
  let { user } = useContext(UserContext);
  let { userPets } = useContext(UserContext);

  return (
    <div className="UserProfile">
      <h1>Your Information</h1>
      <div className="infoContainer">
        <table>
          <tbody>
            <tr>
              <th className="first">Name</th>
            </tr>
            <tr>
              <td>
                {user.firstName} {user.lastName}
              </td>
            </tr>
            <tr>
              <th>Address</th>
            </tr>
            <tr>
              <td>
                {user.address.map((item, index) => (
                  <p key={index}>
                    <span>{item.street}</span>
                    <span>
                      {item.city}, {item.state} {item.zip}
                    </span>
                  </p>
                ))}
              </td>
            </tr>
            <tr>
              <th>Phone</th>
            </tr>
            <tr>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>E-Mail</th>
            </tr>
            <tr>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Your Pets</th>
            </tr>
            <tr>
              <td>
                {userPets.map((pet, index) => (
                  <span key={index}>
                    <Link to={`/pet-profile/${pet._id}`}>
                      {pet.petFirstName}
                    </Link>
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
}

export default UserProfile;
