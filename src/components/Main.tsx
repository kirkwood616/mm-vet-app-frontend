// import "./Main.css";
import Footer from "./Footer";
import HomeMenu from "./HomeMenu";
import LogIn from "./LogIn";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Main() {
  let { isLoggedIn } = useContext(UserContext);

  return (
    <div className="Main">
      {isLoggedIn ? <HomeMenu /> : <LogIn />}
      <Footer />
    </div>
  );
}

export default Main;
