import { Link } from "react-router-dom";
import "./SpayNeuter.css";

function SpayNeuter() {
  return (
    <div className="spayNeuter">
      <div className="container">
        <div className="ppayNeuter icon">
          <img
            src="./icons/arrowIcon.svg"
            alt="arrow-back"
            height={40}
            width={40}
          />
          <Link to={"/services"}>Back to Our Services</Link>
        </div>
        <h1>Spay/Neuter</h1>
        <br />
        <div className="spayNeuterImageContainer">
          <img
            src="./animal-photos/spay-neuter.jpg"
            alt="spay-neuter-services"
            className="spayNeuterImage"
          />
        </div>
        <div className="spayNeuter paragraph">
          <p>
            Spaying or neutering your pet can help them live a longer, healthier
            life, minimize behavior problems, and help control the population of
            unwanted dogs and cats.
          </p>
          <br />
          <h3>Overview</h3>
          <br />
          <p>
            According to the American Veterinary Medical Association, nearly
            12,500 puppies are born in the United States each hour. Spaying
            females or castrating males eliminates unwanted litters, which
            contribute to thousands of euthanasia procedures and millions of
            stray animals. Additionally, these procedures can minimize behavior
            problems and help your pet live a longer, healthier life by reducing
            the likelihood of certain cancers and tumors.
          </p>
          <br />
          <h3>When should I have my pet spayed or neutered?</h3>
          <br />
          <p>
            In general, we recommend spaying or castrating small dogs and cats
            between 4-6 months of age. With large breed dogs, we often recommend
            delaying the surgery until they are 6-12 months of age.
          </p>
          <br />
          <h3>Why should I have my pet spayed or neutered?</h3>
          <br />
          <p>
            There are many benefits that come with spaying your female companion
            animal. They include helping to control the stray dog and cat
            population, eliminating the sometimes 'messy' heat cycles that
            attract male dogs, and preventing diseases in your pet such as
            pyometra (infection in the uterus) and mammary cancer. Additionally,
            research has shown that spayed pets live longer than pets that have
            not been spayed.
          </p>
          <br />
          <p>
            There are also many benefits that come with castrating your male
            companion animal. These benefits include helping to control the
            stray dog and cat population, eliminating undesirable and
            embarrassing behavior, and preventing diseases in your pet such as
            prostate disease and testicular cancer.
          </p>
          <br />
          <h3>How is a spay or neutering surgery performed?</h3>
          <br />
          <p>
            Spaying, also called an "ovariohysterectomy," is a surgical
            procedure in which both ovaries and uterus are completely removed
            from your female pet while they are under general anesthesia.
            Castrating refers to the surgical procedure in which both testicles
            are removed while your male pet is under general anesthesia.
          </p>
          <br />
          <p>
            Before the operation, we will assess your pet to minimize risk.
            While your pet is under anesthesia we take individual care for the
            safety of each pet. Our certified technicians and doctors are
            trained in advanced monitoring to ensure your pet's comfort.
          </p>
          <br />
          <p>
            Your pet’s safety and comfort are our primary concerns when
            performing a spay or castration. We routinely use a IV catheter and
            fluids on canine spays and castrations, as well as feline spays.
            This is important for maintaining blood pressure and perfusion to
            the kidneys and other organs as well as allowing immediate IV access
            in the event of an emergency.
          </p>
          <br />
          <p>
            We use advanced pain management techniques in conjunction with
            anesthesia to make sure your pet is as comfortable as possible
            during the procedure and after they are discharged. Our spay and
            castration patients receive 2 or 3 different injectable pain
            medications during the procedure and usually go home with oral pain
            medication. We also perform local anesthetic blocks at the surgical
            site. Proper pain management makes the procedure as comfortable as
            possible and allows for faster recovery.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SpayNeuter;
