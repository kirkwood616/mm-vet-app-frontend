import "./LogIn.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function LogIn() {
  let { user, isLoggedIn } = useContext(UserContext);
  let { handleLogIn } = useContext(UserContext);
  let { handleEmail } = useContext(UserContext);

  console.log(user);
  console.log(isLoggedIn);

  return (
    <div className="LogIn">
      <h1>LOGIN</h1>
      <div className="">
        <div className="">
          <img src="" alt="Logo" />
          <h2>Sign In</h2>
          <form method="get" className="form" onSubmit={handleLogIn}>
            <div className="form_field">
              <input
                type="email"
                placeholder="info@email.com"
                onChange={(e) => handleEmail(e.target.value.toLowerCase())}
              />
            </div>

            <div className="form_field">
              <input type="password" placeholder="••••••••••••" />
            </div>

            <div className="form_field">
              <input type="submit" value="Sign In" />
            </div>
          </form>

          <p>
            Don't have an account?
            <Link to="/">Create An Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
