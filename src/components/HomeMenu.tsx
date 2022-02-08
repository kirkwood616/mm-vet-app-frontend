import "./HomeMenu.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function HomeMenu() {
  let { user } = useContext(UserContext);

  return (
    <div className="HomeMenu">
      <h1>
        Welcome {user.firstName} {user.lastName}
      </h1>
      <div className="menuContainer">
        <Link to="/user-profile">
          <div className="menuItem">Your Profile</div>
        </Link>
        <Link to="/your-pets">
          <div className="menuItem">Your Pets</div>
        </Link>
        <Link to="/request-appointment">
          <div className="menuItem">Request Appointment</div>
        </Link>
        <Link to="/emergency">
          <div className="menuItem">Emergency</div>
        </Link>
        <Link to="/services">
          <div className="menuItem">Services</div>
        </Link>
        <Link to="/about-us">
          <div className="menuItem">About Us</div>
        </Link>
      </div>
    </div>
  );
}

export default HomeMenu;
