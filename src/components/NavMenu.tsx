import React, { useEffect, useRef, useState } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";

function NavMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

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
              <Link to={"/"}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavMenu;
