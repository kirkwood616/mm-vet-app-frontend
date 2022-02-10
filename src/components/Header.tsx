import "./Header.css";
import NavMenu from "./NavMenu";

function Header() {
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
