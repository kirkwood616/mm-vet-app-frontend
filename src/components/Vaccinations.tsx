import { Link } from "react-router-dom";
import "./Vaccinations.css";

function Vaccinations() {
  return (
    <div className="Vaccinations">
      <h1>Vaccinations</h1>
      <div className="Vaccinations icon">
        <img
          src="./icons/double_arrow.svg"
          alt="arrow-back"
          height={20}
          width={20}
        />
        <Link to={"/services"}>Back to Our Services</Link>
        <div className="Vaccinations image">
          <img
            src="./animal-photos/vaccinations.jpg"
            alt="vaccinations-services"
          />
        </div>
      </div>
      <div className="Vaccinations paragraph">
        <p>
          Young animals are like kids—it’s a never-ending job to keep them safe
          and happy. Vaccinating your pet is a relatively inexpensive but very
          important way to protect his or her health. In addition to preventing
          many life-threatening illnesses, vaccinations can prevent diseases
          prevalent in wildlife and those that can be passed to humans. It’s
          important to administer vaccinations when pets are puppies and kittens
          because their young immune systems are still developing and need
          protection to stay healthy.
        </p>
        <br />
        <p>
          While any medical treatment involves some degree of risk, in the case
          of vaccinations, the benefits far outweigh any potential side effects.
          Adverse reactions are rare and usually mild and short-term when they
          do occur.
        </p>
        <br />
        <div>
          <ul>
            Which vaccines should your pet have? “Core” vaccines are those
            recommended—and possibly mandated by law—for most pets. Core
            vaccines include:
          </ul>
          <li>Rabies (dogs and cats)</li>
          <li>
            DA2PPV – Distemper, Hepatitis, Adenovirus 2, Parvo and Parainfluenza
            (dogs)
          </li>
          <li>
            FVRCP – Feline Viral Rhinotracheitis, Calicivirus and Panleukopenia
            (cats)
          </li>
        </div>
        <br />
        <p>
          Other non-core, but highly suggested vaccinations for cats include FIV
          for feline immunodeficiency virus and FeLV to protect against feline
          leukemia. For dogs, bordetella and canine influenza vaccinations are
          recommended if they frequent dog parks, boarding kennels, or any place
          where they’re socializing with other canines.
        </p>
        <br />
        <p>
          It’s also important to note that even pets who live primarily indoors
          should be vaccinated, as they can still be exposed to a disease. Your
          M&M Veterinary Clinic veterinarian can advise you which vaccinations
          are required or recommended for your pet based on age, health, and
          lifestyle. For more information or to schedule an appointment, call us
          at(555)555-5555.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Vaccinations;
