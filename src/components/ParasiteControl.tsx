import { Link } from "react-router-dom";
import "./ParasiteControl.css";

function ParasiteControl() {
  return (
    <div className="Parasite_Control">
      <div className="container">
        <h1>Parasite Control (Fleas, Ticks & Heartworms)</h1>
        <div className="Parasite_Control icon">
          <img
            src="./icons/double_arrow.svg"
            alt="arrow-back"
            height={20}
            width={20}
          />
          <Link to={"/services"}>Back to Our Services</Link>
        </div>
        <div className="Parasite_Control image">
          <img
            src="./animal-photos/parasite-control-ser.jpg"
            alt="Parasite-Control-Services"
          />
        </div>

        <div className="Parasite_Control paragraph">
          <p>
            Parasites such as fleas and ticks can be very damaging to your pet’s
            health. Preventive measures should be taken year-round to inhibit
            potential outbreaks.
          </p>
          <br />
          <h3>Overview</h3>
          <br />
          <p>
            The idea of your pet being infested with parasites is a disturbing
            thought, but it’s also a medical issue that can have serious
            consequences. Parasites can diminish quality of life and even cause
            life-threatening health issues.
          </p>
          <br />
          <p>
            Common internal parasites include heartworms, roundworms, hookworms,
            whipworms and tapeworms. The most frequent external parasites
            include fleas and ticks. Your pet should be free from parasites,
            both internal and external.
          </p>
          <br />
          <h3>Why are parasites dangerous?</h3>
          <h4>Fleas:</h4>
          <p>
            Fleas are small, wingless, brown, fast moving insects you can see in
            your pet’s fur. Some animals are allergic to the saliva of fleas,
            which can cause inflammation and more discomfort. If ingested while
            your pet is grooming themselves, fleas can transmit an intestinal
            parasite called tapeworm. Flea infestations can lead to anemia and
            fleas are also capable of transmitting serious diseases.
          </p>
          <br />
          <h4>Ticks:</h4>
          <p>
            Ticks are members of the spider family and live in cracks and
            crevices in the home or outside in vegetation such as grassy
            meadows, woods, brush, and weeds. Some tick bites only cause mild
            irritation or swelling at the site, but other tick bites can infect
            your pet with serious illnesses. If left untreated, these diseases,
            such as lyme, can lead to more severe health problems or even be
            fatal.
          </p>
          <p>
            Note: If you see a tick and cannot remove it, we will gladly help
            you. Call us immediately to limit the impact of the tick's
            attachment. It’s much safer to have one of our trained professionals
            remove the tick for you. Make an appointment with us immediately to
            limit the impact of the tick.
          </p>
          <br />
          <h4>Heartworm Disease:</h4>
          <p>
            Heartworms are transmitted when an infected mosquito bites your pet.
            Heartworms are parasites that live in the heart and its surrounding
            blood vessels. The adult heartworm produces offspring called
            microfilariae, which circulate in the pet’s blood. Unrecognized and
            untreated heartworm infections can be fatal.
          </p>
          <br />
          <h3>When should I seek treatment for parasites?</h3>
          <br />
          <img
            src="./animal-photos/treatment.jpg"
            alt="treatment-for-parasites-service"
          />
          <br />
          <h4>Fleas:</h4>
          <p>
            If your pet is showing signs of fleas such as continuous scratching,
            gnawing or licking, schedule an appointment immediately.
            Additionally, flea dirt, the byproduct of fleas that looks like
            coffee grounds or pepper, can usually be seen by looking at your
            pet’s abdomen or by combing your pet’s coat with a fine-tooth comb.
          </p>
          <br />
          <h4>Ticks</h4>
          <p>
            If you see a tick on your pet, do not try and burn it off with a
            match. This does not work and could harm your pet. It’s much safer
            to have one of our trained professionals remove the tick for you.
            Make an appointment with us immediately to limit the impact of the
            tick.
          </p>
          <br />
          <h4>Heartworm Disease:</h4>
          <p>
            The best treatment for heartworms is prevention. One of the most
            common and effective prevention methods is a monthly oral
            medication.
          </p>
          <p>
            The parasite is transmitted through mosquito bites and usually the
            pet shows no signs for months. Later symptoms include difficulty
            breathing, coughing, weight loss, tiring easily and listlessness. In
            many cases pets do not show outward signs until advanced stages of
            the disease. An annual blood test is recommended to screen for
            heartworms. This disease can be treated if found early, but it can
            be costly.
          </p>
          <br />
          <h3>How can I prevent parasites?</h3>
          <br />
          <p>
            Our veterinary team is happy to help you choose the correct
            preventive regimen based on your pet’s risk factors and health
            status. It is important to discuss with us yearly which pest control
            products are ideal for your household based on the everyday life of
            your pet.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ParasiteControl;
