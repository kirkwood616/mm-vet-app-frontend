// import "./LogIn.css";

function LogIn() {
  return (
    <div className="LogIn">
      <h1>LOGIN</h1>
      <div className="">
        <div className="">
          <img src="" alt="Logo" />
          <h2>Sign In</h2>
          <form action="" method="post" className="form">

            <div className="form_field">
              <input type="email" placeholder="info@email.com" />
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
