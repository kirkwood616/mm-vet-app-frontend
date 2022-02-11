import { Link } from "react-router-dom";
import "./Diet_Nutrition.css";

function Diet_Nutrition() {
  return (
    <div className="Diet_Nutrition">
      <h1>Diet & Nutrition</h1>
      <div className="Diet_Nutrition icon">
        <img
          src="./icons/double_arrow.svg"
          alt="arrow-back"
          height={20}
          width={20}
        />
        <Link to={"/services"}>Back to Our Services</Link>
        <div className="Diet_Nutrition image">
          <img src="./animal-photos/diet.jpg" alt="diet-nutrition-services" />
        </div>
      </div>
      <div className="Diet_Nutrition paragraph">
        <p>
          Proper diet and nutrition can help your pet fight against disease,
          maintain a proper weight, and promote the overall well-being of your
          pet.
        </p>
        <br />
        <h3>Overview</h3>
        <br />
        <p>
          Maintaining a healthy body weight is a very important aspect of a
          pet’s overall physical health. Good nutrition can help provide your
          pet with a happier, safer, and longer life. There are many nutritional
          supplements that can help fight against disease, maintain a proper
          weight, and promote the overall well-being of any animal.
        </p>
        <br />
        <h3>Why is maintaining a healthy weight important?</h3>
        <br />
        <p>
          Obesity is a common problem among pets, as it can be easy to overfeed
          a pet that knows how to beg. Being overweight is a serious problem for
          animals, and can cause health problems as they get older. With proper
          diet and exercise, all pets should be able to meet their dietary needs
          and be within a healthy weight range. The best way to make sure your
          pet’s needs are being met is to consult with us about a specific diet
          for your pet and their lifestyle. Our staff will help your pet battle
          unhealthy weight gain and counsel you on the best nutritional options
          available.
        </p>
        <br />
        <h3>When is a diet change needed?</h3>
        <br />
        <p>
          Pets should be fed a balanced wellness diet based on a number of
          factors, including their life stage, their breed or size, activity
          level, and any health issues they have. Diet changes are recommended
          when they enter a new life stage. For example, transitioning is
          recommended from puppy or kitten to adult, or from adult to senior,
          which is usually around age seven. Diet changes may also be
          recommended if your pet develops any issues that could be treated with
          a prescription diet, such as obesity or a food allergy.
        </p>
        <br />
        <h3>How diet & nutrition can help your pet</h3>
        <br />
        <div>
          {" "}
          <ul>
            {" "}
            We will help you make the right dietary changes for your pet so that
            they can stay on track living their happy and healthy lives. A
            healthy diet and good nutrition can reduce or even eliminate the
            following problems:
          </ul>
          <li>pet allergies</li>
          <li>itching and scratching</li>
          <li>dull coat</li>
          <li>arthritis</li>
          <li>joint and hip problems</li>
          <li>intestinal disorders</li>
          <br />
          <p>
            Skin and coat supplements are a great way to keep your pet looking
            and feeling their best. Arthritis and joint supplements can be
            helpful for many pets as they age.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Diet_Nutrition;
