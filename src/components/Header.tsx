import { useContext } from "react";
import UserContext from "../context/UserContext";
import "./Header.css";
import NavMenu from "./NavMenu";

function Header() {
  let { isLoggedIn } = useContext(UserContext);
  return (
    <div className="Header">
      <img
        className="headerLogo"
        src="M&M veterinary clinic.png"
        alt="M and M Veterinary Clinic Top Logo"
      />
      <NavMenu />
    </div>
  );
}

export default Header;
