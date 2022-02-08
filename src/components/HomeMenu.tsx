// import "./HomeMenu.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function HomeMenu() {
  let { user } = useContext(UserContext);

  return (
    <div className="HomeMenu">
      <h1>Welcome {user.firstName}</h1>
    </div>
  );
}

export default HomeMenu;
