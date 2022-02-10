import "./Header.css";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="Header">
      <div className="">
        <img
          className="headerLogo"
          src="M&M veterinary clinic.png"
          alt="M&M Veterinary Clinic Top Logo"
          height={150}
        />
      </div>
      <NavMenu />
    </div>
  );
}

export default Header;
