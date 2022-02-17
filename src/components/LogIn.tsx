import "./LogIn.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import LandingInfo from "./LandingInfo";

function LogIn() {
  let { handleLogIn } = useContext(UserContext);
  let { handleEmail } = useContext(UserContext);

  return (
    <div className="LogIn">
      <LandingInfo />
      <div className="logInForm">
        <h1>Log In</h1>
        <form method="get" className="form" onSubmit={handleLogIn}>
          <label htmlFor="email" className="formTitle">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="inputField"
            placeholder="example@email.com"
            onChange={(e) => handleEmail(e.target.value.toLowerCase())}
          />

          <label htmlFor="password" className="formTitle">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="inputField"
            placeholder="••••••••••••"
            autoComplete="on"
          />

          <input type="submit" value="Log In" className="logInButton" />
        </form>

        {/* <p>Don't have an account?</p>
        <p>
          <Link to="/">Create An Account</Link>
        </p> */}
      </div>
    </div>
  );
}

export default LogIn;
