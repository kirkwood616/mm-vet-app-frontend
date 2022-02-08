// import "./LogIn.css";
import { FormEvent, useState } from "react";
import Customer from "../models/Customer";
import { fetchCustomerByEmail } from "../services/VetApiService";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [customer, setCustomer] = useState<Customer>();

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    if (email) {
      fetchCustomerByEmail(email).then((data) => setCustomer(data));
    } else {
      return;
    }
  }

  function handleLogOut(): void {
    setEmail("");
    setCustomer(undefined);
  }

  console.log(customer);

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
