import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="Services">
      <img src="" alt="" />
      <h1>Our Services</h1>
      <p>
        We understand that a pet is part of the family. Our goal is to provide
        each one with a long, healthy and happy life. The day your pet enters
        our hospital it becomes part of our family too. From new puppy and
        kittens to graying seniors, we are there every step of the way. Our
        comprehensive suite of veterinary services ensures that every aspect of
        their well-being is given the excellent care they deserve.
      </p>
      <br />
      {/* <button>
        <Link to={"/"}>Back to Home-Menu</Link>
      </button> */}
      <br />
      <div className="Services-cards">
        <div className="Services-cards item pet-wellness">
          <h1>Pet Wellness</h1>
          <img src="./animal-photos/well.jpg" alt="pet-wellness-services" />
          <p>
            Annual wellness exams evaluate your pets overall health, detect
            problems before they become serious, and keep them on track to live
            a long, healthy life.
          </p>
          <a href="/pet-wellness">Read more</a>
          <br />
         </div>
    </div>
    </div>
  );
}

export default Services;
