import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="Services">
      <br />
      <div className="servicesHeader">
        <h1>Our Services</h1>
        <br />
        <p>
          We understand that a pet is part of the family. Our goal is to provide
          each one with a long, healthy and happy life. The day your pet enters
          our hospital it becomes part of our family too. 
          </p>
          <br />
          <p>
          From new puppy and kittens to graying seniors, we are there every step of the way. 
          Our comprehensive suite of veterinary services ensures that every aspect
          of their well-being is given the excellent care they deserve.
        </p>
        <br />
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/well.jpg" alt="pet-wellness-services" />
          </div>
          <div className="card-body">
            <h1>Pet Wellness</h1>
            <br />
            <p>
              Annual wellness exams evaluate your pets overall health, detect
              problems before they become serious, and keep them on track to
              live a long, healthy life.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/pet-wellness"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/dental.jpg" alt="dental-services" />
          </div>
          <div className="card-body">
            <h1>Dentistry</h1>
            <br />
            <p>
              Why pet's dental care is very important, the fact is that by
              age three, 80% of dogs and 70% of cats have some evidence of
              periodontal disease. Periodic dental exams help maintain proper
              oral hygiene and prevent future problems.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/dentistry"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/diet.jpg" alt="diet-nutrition-services" />
          </div>
          <div className="card-body">
            <h1>Diet & Nutrition</h1>
            <br />
            <p>
              Proper diet and nutrition can help your pet fight against disease,
              maintain a proper weight, and promote the overall well-being of
              your pet.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/diet-nutrition"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img
              src="./animal-photos/vaccinations.jpg"
              alt="vaccinations-services"
            />
          </div>
          <div className="card-body">
            <h1>Vaccinations</h1>
            <br />
            <p>
              Young animals are like kids—it’s a never-ending job to keep them
              safe and happy. Vaccinating your pet is a relatively inexpensive
              but very important way to protect his or her health.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/vaccinations"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img
              src="./animal-photos/spay-neuter.jpg"
              alt="spay-neuter-services"
            />
          </div>
          <div className="card-body">
            <h1>Spay/Neuter</h1>
            <br />
            <p>
              Spaying or neutering your pet can help them live a longer,
              healthier life, minimize behavior problems, and help control the
              population of unwanted dogs and cats.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/spay-neuter"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/surgery.jpg" alt="sergery-services" />
          </div>
          <div className="card-body">
            <h1>Surgery</h1>
            <br />
            <p>
              Our clinic is equipped to perform a wide variety of soft tissue
              and orthopedic surgical procedures. Some of the common procedures
              include: spays and neuters, growth removals, and foreign body
              removal.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/surgery"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/parasite-control-ser.jpg" alt="" />
          </div>
          <div className="card-body">
            <h1>Parasite Control</h1>
            <br />
            <p>
              Parasites such as fleas and ticks can be very damaging to your
              pet’s health. Preventive measures should be taken year-round to
              inhibit potential outbreaks.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/parasite-control"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img
              src="./animal-photos/microchipping.jpg"
              alt="microchipping-services"
            />
          </div>
          <div className="card-body">
            <h1>Microchipping</h1>
            <br />
            <p>
              Microchip identification is the most reliable way to reunite lost
              pets with their owners.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/microchipping"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header card-image">
            <img src="./animal-photos/catG.png" alt="grooming-services" />
          </div>
          <div className="card-body">
            <h1>Grooming</h1>
            <br />
            <p>
              We offer the finest in all breed grooming services for your pet.
              Our groomers are experienced, kind, and hard-working! Let us
              pamper your pet and make them look their best.
            </p>
          </div>
          <div className="card-footer">
            <Link to={"/grooming"}>
              <button className="readMore">Read more...</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
