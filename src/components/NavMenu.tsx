import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="HomeMenu">
      {/* top nav for mobile/ tablet */}
      <ul className="dropDownMenu">
        <li>
          {" "}
          <a href="">Home</a>
        </li>
        <li>
          {" "}
          <a href="">About Us</a>
        </li>
        <li>
          {" "}
          <a href="">Services</a>
        </li>
        <li>
          {" "}
          <a href="">Emergency</a>
        </li>
        <li>
          {" "}
          <a href="">Owner Profile</a>
        </li>
        <li>
          {" "}
          <a href="">Pet Profile</a>
        </li>
        <li>
          {" "}
          <a href="">Request Appointment</a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
