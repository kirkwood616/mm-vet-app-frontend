import "./Main.css";
import HomeMenu from "./HomeMenu";
import LogIn from "./LogIn";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Main() {
  let { isLoggedIn } = useContext(UserContext);

  return <div className="Main">{isLoggedIn ? <HomeMenu /> : <LogIn />}</div>;
}

export default Main;
