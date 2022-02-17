import { Link } from "react-router-dom";
import "./Surgery.css";

function Surgery() {
  return (
    <div className="surgery">
      <div className="container">
        <div className="surgery icon">
          <Link to={"/services"}>
            <img
            src="./icons/arrowIcon.svg"
            alt="arrow-back"
            height={40}
            width={40}
          />
          Back to Our Services</Link>
        </div>
        <h1>Surgery</h1>
        <br />
        <div className="surgeryImageContainer">
          <img
            src="./animal-photos/surgery.jpg"
            alt="sergery-services"
            className="surgeryImage"
          />
        </div>

        <div className="surgery paragraph">
          <p>
            Our clinic is equipped to perform a wide variety of soft tissue and
            orthopedic surgical procedures. Some of the common procedures
            include: spays and neuters, growth removals, and foreign body
            removal. Orthopedic procedures commonly performed include: fracture
            repair with plates, pins, or external fixators, cruciate ligament
            repair, luxating patellas, and FHO surgeries for hip dysplasia.
          </p>
          <br />
          <p>
            Surgery is often the most effective way to treat many serious
            injuries and disorders, and M&M Veterinary Clinic is proud to offer
            state-of-the-art facilities and equipment. Our hospital provides a
            full range of surgical services ranging from standard spaying and
            neutering to advanced, highly specialized procedures.
          </p>
          <br />
          <ul>
            Surgery specialties
            <li>Soft-tissue</li>
            <li>Orthopedic</li>
            <li>Neurological</li>
            <li>Dental</li>
            <li>Ophthalmic</li>
            <li>Foreign body removal</li>
          </ul>
          <br />
          <p>
            Patient safety and comfort is our main priority. M&M Veterinary
            Clinic’s experienced veterinary anesthesiologists provide skilled
            pain management during and after all surgical procedures, ensuring
            your pet recovers quickly and with minimum discomfort.
          </p>
          <p>
            Our veterinary team will walk you through the entire process, giving
            you the tools to make informed decisions regarding your pet’s
            treatment options. We understand surgery is a stressful time for any
            owner, and we’re available every step of the way to answer questions
            and put your mind at ease.
          </p>
          <p>
            If you are considering veterinary surgery for your pet, please
            contact us at (555)555-5555 to schedule a consultation with your M&M
            Veterinary Clinic veterinarian.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Surgery;
