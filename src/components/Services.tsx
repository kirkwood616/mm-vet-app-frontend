import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="Services">
      <div className="container">
        <img src="" alt="" />
        <h1>Our Services</h1>
        <p>
          We understand that a pet is part of the family. Our goal is to provide
          each one with a long, healthy and happy life. The day your pet enters
          our hospital it becomes part of our family too. From new puppy and
          kittens to graying seniors, we are there every step of the way. Our
          comprehensive suite of veterinary services ensures that every aspect
          of their well-being is given the excellent care they deserve.
        </p>
        {/* <button>
        <Link to={"/"}>Back to Home-Menu</Link>
        </button> */}
        <br />
        <div className="cards-grid">
          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img
                  src="./animal-photos/well.jpg"
                  alt="pet-wellness-services"
                />
                <div className="cards-body">
                  <h1>Pet Wellness</h1>
                  <p>
                    Annual wellness exams evaluate your pets overall health,
                    detect problems before they become serious, and keep them on
                    track to live a long, healthy life.
                  </p>
                </div>
                <div className="cards-footer">
                  <Link to={"/pet-wellness"}>
                    <button className="readMore">Read more...</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img src="./animal-photos/dental.jpg" alt="dental-services" />
                <div className="cards-body">
                  <h1>Dentistry</h1>
                  <p>
                    While some people might laugh at the idea of brushing their
                    pet’s teeth or taking them for a dental cleaning, the fact
                    is that by age three, 80% of dogs and 70% of cats have some
                    evidence of periodontal disease. Periodic dental exams help
                    maintain proper oral hygiene and prevent future problems.
                  </p>
                </div>
                <div className="cards-footer">
                  <Link to={"/dentistry"}>
                    <button className="readMore">Read more...</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img
                  src="./animal-photos/diet.jpg"
                  alt="diet-nutrition-services"
                />
                <div className="cards-body">
                  <h1>Diet & Nutrition</h1>
                  <p>
                    Proper diet and nutrition can help your pet fight against
                    disease, maintain a proper weight, and promote the overall
                    well-being of your pet.
                  </p>
                </div>
                <div className="cards-footer">
                  <a href="/diet-nutrition">Read more...</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img
                  src="./animal-photos/vaccinations.jpg"
                  alt="vaccinations-services"
                />
                <div className="cards-body">
                  <h1>Vaccinations</h1>
                  <p>
                    Young animals are like kids—it’s a never-ending job to keep
                    them safe and happy. Vaccinating your pet is a relatively
                    inexpensive but very important way to protect his or her
                    health.
                  </p>
                </div>
                <div className="cards-footer">
                  <a href="/vaccinations">Read more...</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img
                  src="./animal-photos/spay-neuter.jpg"
                  alt="spay-neuter-services"
                />
                <div className="cards-body">
                  <h1>Spay/Neuter</h1>
                  <p>
                    Spaying or neutering your pet can help them live a longer,
                    healthier life, minimize behavior problems, and help control
                    the population of unwanted dogs and cats.
                  </p>
                </div>
                <div className="cards-footer">
                  <a href="/spay-neuter">Read more...</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-header card-image">
                <img src="./animal-photos/surgery.jpg" alt="sergery-services" />
                <div className="cards-body">
                  <h1>Surgery</h1>
                  <p>
                    Our clinic is equipped to perform a wide variety of soft
                    tissue and orthopedic surgical procedures. Some of the
                    common procedures include: spays and neuters, growth
                    removals, and foreign body removal.
                  </p>
                </div>
                <div className="cards-footer">
                  <a href="/surgery">Read more...</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-shadow">
                <div className="cards-header card-image">
                  <img src="./animal-photos/parasite-control-ser.jpg" alt="" />
                  <div className="cards-body">
                    <h1>Parasite Control (Fleas, Ticks & Heartworms)</h1>
                    <p>
                      Parasites such as fleas and ticks can be very damaging to
                      your pet’s health. Preventive measures should be taken
                      year-round to inhibit potential outbreaks.
                    </p>
                  </div>
                  <div className="cards-footer">
                    <a href="/parasite-control">Read more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-shadow">
                <div className="cards-header card-image">
                  <img
                    src="./animal-photos/microchipping.jpg"
                    alt="microchipping-services"
                  />
                  <div className="cards-body">
                    <h1>Microchipping</h1>
                    <p>
                      Microchip identification is the most reliable way to
                      reunite lost pets with their owners.
                    </p>
                  </div>
                  <div className="cards-footer">
                    <a href="/microchipping">Read more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-grid">
            <div className="cards">
              <div className="cards-shadow">
                <div className="cards-header card-image">
                  <img src="./animal-photos/catG.png" alt="grooming-services" />
                  <div className="cards-body">
                    <h1>Grooming</h1>
                    <p>
                      We offer the finest in all breed grooming services for
                      your pet. Our groomers are experienced, kind, and
                      hard-working! Let us pamper your pet and make them look
                      their best.
                    </p>
                  </div>
                  <div className="cards-footer">
                    <a href="/grooming">Read more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
