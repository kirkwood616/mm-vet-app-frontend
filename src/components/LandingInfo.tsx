import { useState } from "react";
import "./LandingInfo.css";

function LandingInfo() {
  const [hide, setHide] = useState(false);
  return (
    <div
      className={hide ? "close" : "LandingInfo"}
      onClick={() => setHide(true)}
    >
      <div className="infoBackground">
        <h1>WELCOME!</h1>
        <br />
        <p>Password Authentication is not enabled at this time.</p>
        <br />
        <p>To view & test this app, use the following e-mail log-ins:</p>
        <br />
        <p className="login">bill@email.com</p>
        <p className="login">grantchirpus@email.com</p>
        <p className="login">sally@email.com</p>
        <p className="click">CLICK TO CLOSE WINDOW</p>
      </div>
    </div>
  );
}

export default LandingInfo;
