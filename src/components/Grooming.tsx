import { Link } from "react-router-dom";
import "./Grooming.css";

function Grooming() {
  return (
    <div className="Grooming">
      <div className="container">
        <h1>Grooming</h1>
        <div className="Grooming icon">
          <img
            src="./icons/double_arrow.svg"
            alt="arrow-back"
            height={20}
            width={20}
          />
          <Link to={"/services"}>Back to Our Services</Link>
        </div>
        <div className="groomingImageContainer">
          <img
            src="./animal-photos/dogG.png"
            alt="grooming-services"
            className="groomingImage"
          />
        </div>
        <div className="Grooming paragraph">
          <p>
            We offer the finest in all breed grooming services for your pet. Our
            groomers are experienced, kind, and hard-working!
          </p>
          <br />
          <p>
            Let us pamper your pet and make them look their best. We are happy
            to employ professional groomers in our hospital because we believe
            that it offers many conveniences to you as a client.
          </p>
          <br />
          <p>
            Two main points would be that you can have your pet’s preventive
            healthcare updated the same day as grooming and most importantly,
            sometimes the groomer is the one to first notice ear infections,
            cysts, tumors, and skin conditions which can be early signs of other
            more serious medical conditions.
          </p>
          <br />
          {/* <img className="Grooming image" src="./animal-photos/catG.png" alt="grooming-services" /> */}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Grooming;
