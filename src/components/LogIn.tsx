// import "./LogIn.css";
import { FormEvent, useEffect, useState } from "react";
import Customer from "../models/Customer";
import { fetchCustomerByEmail } from "../services/VetApiService";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [customer, setCustomer] = useState<Customer>();

  function handleLogIn(e: FormEvent) {
    e.preventDefault();
    setEmail(emailInput);
    console.log(customer);
  }

  // API CALL => SEARCH FOR USER BY E-MAIL
  useEffect(() => {
    if (email) {
      fetchCustomerByEmail(email).then((data) => setCustomer(data));
    } else {
      return;
    }
  }, [email]);

  // console.log(emailInput);
  // console.log(customer);

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
                onChange={(e) => setEmailInput(e.target.value.toLowerCase())}
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
