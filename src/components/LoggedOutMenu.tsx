// import "./LoggedOutMenu.css";
import { Link } from "react-router-dom";

function LoggedOutMenu() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Log In</Link>
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
    </ul>
  );
}

export default LoggedOutMenu;
