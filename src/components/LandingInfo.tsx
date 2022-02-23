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
        <h2>Welcome!</h2>
        <p>Password Authentication is not enabled at this time.</p>
        <p>To view & test this app, use the following e-mail log-ins:</p>
        <p className="login">bill@email.com</p>
        <p className="login">grantchirpus@email.com</p>
        <p className="login">sally@email.com</p>
      </div>
    </div>
  );
}

export default LandingInfo;
