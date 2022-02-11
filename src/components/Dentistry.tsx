import { Link } from "react-router-dom";
import "./Dentistry.css";

function Dentistry() {
  return (
    <div className="Dentistry">
      <h1>Dentistry</h1>
      <div className="Dentistry icon">
        <img
          src="./icons/double_arrow.svg"
          alt="arrow-back"
          height={20}
          width={20}
        />
        <Link to={"/services"}>Back to Our Services</Link>
        <div className="Dentistry image">
          <img src="./animal-photos/dental.jpg" alt="dental-services" />
        </div>
      </div>
      <div className="Dentistry paragraph">
        <div className="Services-cards item dentistry">
          <p>
            Imagine if you never brushed your teeth or had them cleaned. Pretty
            frightening, right? As you can imagine, things would eventually
            start to go very, very bad inside your mouth: teeth would rot and
            decay, gums would become inflamed and infected. Bacteria from those
            rotting teeth would eventually travel into your bloodstream and
            could cause other serious health problems. And we haven’t even
            mentioned the daily, debilitating pain. It’s the same scenario for
            your dog or cat. While some people might laugh at the idea of
            brushing their pet’s teeth or taking them for a dental cleaning, the
            fact is that by age three, 80% of dogs and 70% of cats have some
            evidence of periodontal disease. Periodic dental exams help maintain
            proper oral hygiene and prevent future problems.
          </p>
          <br />
          <div>
            <ul>
              M&M Veterinary Clinic offers complete pet oral health services,
              including:
            </ul>
            <li>Dental exams</li>
            <li>Annual dental cleanings</li>
            <li>Dental X-rays</li>
            <li>Extractions</li>
            <li>Oral surgery</li>
          </div>
          <br />
          <p>
            Following American Veterinary Medical Association guidelines, M&M
            Veterinary Clinic only does cleanings and dental work on
            anesthetized pets. To ensure your pet is healthy enough to undergo
            anesthesia, we do require a routine blood test before the procedure.
          </p>
          <br />
          <p>Preventive Dental Care</p>
          <br />
          <p>
            Brushing your pet’s teeth several times per week is the best way to
            prevent plaque and tartar build-up. Interested in learning how to
            brush your pet’s teeth? Just ask and our veterinarians will be happy
            to help you get started. If you have a pet that won’t tolerate
            brushing, our veterinarians can also recommend products that will
            help keep your pet’s mouth healthy in between cleanings. To make an
            appointment for a dental exam or cleaning, call us at (555)555-5555.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Dentistry;