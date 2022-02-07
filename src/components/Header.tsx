// import "./Header.css";

import HomeMenu from "./HomeMenu";

function Header() {
  return (
    <div className="Header">
      {/* <h1>HEADER</h1> */}
      <div className="">
        <img
          className="headerLogo"
          src="M&M veterinary clinic.png"
          alt="M&M Veterinary Clinic Top Logo"
          height={150}
        />
        <HomeMenu />
      </div>
    </div>
  );
}

export default Header;
