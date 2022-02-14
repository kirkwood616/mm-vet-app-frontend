import { Link } from "react-router-dom";
import "./PetWellness.css";
// import "./Services.css"

function PetWellness() {
  return (
    <div className="PetWellness">
      <div className="container">
        <h1>Pet Wellness</h1>
        <img
          className="PetWellness icon"
          src="./icons/double_arrow.svg"
          alt="arrow-back"
          height={20}
          width={20}
        /> <Link to={"/services"}>Back to Our Services</Link>
       
        <div className="PetWellness image">
          <img src="./animal-photos/well.jpg" alt="pet-wellness-services" />
        </div>

        <div className="PetWellness paragraph">
          <br />
          <h2>Overview</h2>
          <br />
          <p>
            Annual wellness exams evaluate your pets overall health, detect
            problems before they become serious, and keep them on track to live
            a long, healthy life.
          </p>
          <br />

          <span>
            Your pet can benefit greatly from regular wellness exams or
            checkups. No matter the age, wellness exams provide an excellent
            opportunity for us to conduct a thorough physical exam and develop a
            health profile for your pet. This could help us identify problems
            early and any other issues that may affect your pet’s health and
            quality of life. Preventing an illness is a much more desirable
            option than treating an illness.
          </span>
          <br />

          <p>
            <span>
              A wellness exam includes an evaluation of all of your pet’s major
              organ systems. We’ll use the wellness visit to ask you questions
              about your pet’s behavior, appetite, exercise habits and regular
              activities at home.
            </span>
          </p>
          <br />

          <p>
            <span>
              A wellness exam is also your chance to have us address your
              questions or concerns about your pet. We welcome your questions.
              No question is too small or too silly, and it is our pleasure to
              address your concerns. We strive to help you understand your pet’s
              health care and be involved in decision making.
            </span>
          </p>
          <br />

          <p>
            Finally, wellness exams help us establish a relationship with you
            and your pet. Through your pet’s physical exams, other wellness
            procedures and our consultations with you, we get to know your pet
            and learn about his or her lifestyle, personality, health risks,
            home environment and other important information. We encourage you
            to use wellness exams to take an active role in your pet’s health
            care. Your pet’s health is always our number one priority, which is
            why for most pets we recommend annual wellness exams to ensure that
            your animal companion remains in good health. If your pet is a
            senior–over seven for dogs, over nine for cats–we strongly suggest
            twice-yearly exams and blood screenings. That’s because pets age
            more rapidly than humans, meaning disease and illness develop faster
            as well.
          </p>
          <br />

          <ul>
            M&M Veterinary Clinic’s veterinarian-performed physical exams
            comprehensively assess every aspect of your pet’s health. Wellness
            exams typically include:
            <br />
            <li>Ear exam</li>
            <li>Eye exam</li>
            <li>Rectal exam</li>
            <li>Dental exam</li>
            <li>Skeletal exam</li>
            <li>Reproductive system exam</li>
            <li>Internal health evaluation</li>
            <li>Neurological evaluation</li>
            <li>Cardiovascular evaluation</li>
            <li>Nutrition consultation</li>
            <li>Behavior counseling</li>
          </ul>
          <br />

          <p>
            Taking care of your precious pet’s health starts with a thorough
            veterinary exam. To schedule an appointment for your pet, call us at
            (555)555-5555.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default PetWellness;
