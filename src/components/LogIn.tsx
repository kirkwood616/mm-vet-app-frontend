// import "./LogIn.css";
import { FormEvent, useState } from "react";
import User from "../models/User";
import { fetchUserByEmail } from "../services/VetApiService";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User>();

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    if (email) {
      fetchUserByEmail(email).then((data) => setUser(data));
    } else {
      return;
    }
  }

  function handleLogOut(): void {
    setEmail("");
    setUser(undefined);
  }

  console.log(user);

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
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
            <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
