// import "./LoggedInMenu.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function LoggedInMenu() {
  let { handleLogOut } = useContext(UserContext);
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/user-profile"}>Your Profile</Link>
      </li>
      <li>
        <Link to={"/your-pets"}>Your Pets</Link>
      </li>
      <li>
        <Link to={"/request-appointment"}>Request Appointment</Link>
      </li>
      <li>
        <Link to={"/emergency"}>Emergency</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/about-us"}>About Us</Link>
      </li>
      <li>
        <Link to={"/"} onClick={handleLogOut}>
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default LoggedInMenu;
