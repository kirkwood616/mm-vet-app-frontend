// import "./Main.css";
import Footer from "./Footer";
import Header from "./Header";
import HomeMenu from "./HomeMenu";
import LogIn from "./LogIn";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

function Main() {
  let { isLoggedIn } = useContext(UserContext);
  // console.log(isLoggedIn);

  return (
    <div className="Main">
      <h1>MAIN</h1>
      {/* <Header /> */}
      {isLoggedIn ? <HomeMenu /> : <LogIn />}
      {/* <HomeMenu /> */}
      <Footer />
    </div>
  );
}

export default Main;
