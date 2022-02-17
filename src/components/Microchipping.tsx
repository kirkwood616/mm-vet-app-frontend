import { Link } from "react-router-dom";
import "./Microchipping.css";

function Microchipping() {
  return (
    <div className="microchipping">
      <div className="container">
        <div className="microchipping icon">
          <Link to={"/services"}>
            <img
            src="./icons/arrowIcon.svg"
            alt="arrow-back"
            height={40}
            width={40}
          />
          Back to Our Services</Link>
        </div>
        <h1>Microchipping</h1>
        <br />
        <div className="microchippingImageContainer">
          <img
            src="./animal-photos/microchipping.jpg"
            alt="microchipping-services"
            className="microchippingImage"
          />
        </div>
        <div className="microchipping paragraph">
          <p>
            Microchip identification is the most reliable way to reunite lost
            pets with their owners.
          </p>
          <br />
          <h3>Overview</h3>
          <br />
          <p>
            Microchip identification helps return an estimated 8,000 lost cats,
            dogs, and other animals to their homes every day. Pet ID chips are
            the most reliable way to reunite pets with their owners and provide
            peace of mind.
          </p>
          <br />
          <h3>Why should I microchip my pet?</h3>
          <br />
          <p>
            Microchip identification is the most reliable way to find lost pets
            and return them home with their owners. The procedure is safe, easy,
            and inexpensive.
          </p>
          <br />
          <h3>When should I microchip my pet?</h3>
          <br />
          <p>
            Some owners feel that their pet doesn't need identification because
            they stay indoors, but in our experience, these are the most likely
            to become lost when they accidentally get outside. As separation
            from your cat or dog can happen all too easily, permanent
            identification by microchipping is critical. Every pet should have
            microchip identification as the procedure can be done at any age.
          </p>
          <br />
          <h3>How does microchipping work?</h3>
          <br />
          <p>
            The small microchip (the size of a grain of rice) is injected under
            the skin between the shoulder blades of your pet in a relatively
            harmless veterinary procedure. The chip is permanent, lasting the
            whole life of the pet. Your information has to be registered with
            your bar code number so that you can be contacted if your pet ever
            becomes lost.
          </p>
          <br />
          <p>
            If a pet is found, all animal care facilities (shelters, hospitals,
            etc.) will scan the pet for a microchip using a special microchip
            reader that is simply waved over the skin. Once a microchip is
            found, a special hotline is called, and the lost pet is reported.
            The pet owner is then called immediately and given the contact
            information about where to pick up their pet.
          </p>
          <br />
          <p>
            Looking for your pet?{" "}
            <a
              href="https://www.aaha.org/petmicrochiplookup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a> to access the Universal Pet Microchip Lookup.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Microchipping;
