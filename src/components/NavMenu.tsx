import React, { useContext, useEffect, useRef, useState } from "react";
import "./NavMenu.css";
import UserContext from "../context/UserContext";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

function NavMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  let { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const pageClickEvent = (e: any): void => {
      if (dropdownRef.current !== null) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="NavMenu">
      <div className="navContainer">
        <button onClick={onClick} className="menuTrigger">
          <span>Menu</span>
          <img src="hamburger_icon.svg" alt="" />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          {isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
        </nav>
      </div>
    </div>
  );
}

export default NavMenu;
