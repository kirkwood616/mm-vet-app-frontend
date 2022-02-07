// import "./HomeMenu.css";

function HomeMenu() {
  return (
    <div className="HomeMenu">
      <h1>HOME MENU</h1>
      {/* top nav for mobile/ tablet */}
      <div className="mobile-container">
      <ul className="dropDownMenu">
        <li> <a href="">Home</a></li>
        <li> <a href="">About Us</a></li>
        <li> <a href="">Services</a></li>
        <li> <a href="">Emergency</a></li>
        <li> <a href="">Owner Profile</a></li>
        <li> <a href="">Pet Profile</a></li>
        <li> <a href="">Request Appointment</a></li>
      </ul>
      </div>
    </div>
  );
}

export default HomeMenu;
