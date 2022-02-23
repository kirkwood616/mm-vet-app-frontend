import "./Services.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import cleanData from "../functions/sanitize";

function Services() {
  let { services } = useContext(UserContext);
  let sortedServices = [...services].sort((a, b) =>
    a.serviceId > b.serviceId ? 1 : -1
  );

  return (
    <div className="Services">
      <br />
      <div className="servicesHeader">
        <h1>Our Services</h1>
        <p>
          We understand that a pet is part of the family. Our goal is to provide
          each one with a long, healthy and happy life. The day your pet enters
          our hospital it becomes part of our family too.
        </p>
        <p>
          From new puppy and kittens to graying seniors, we are there every step
          of the way. Our comprehensive suite of veterinary services ensures
          that every aspect of their well-being is given the excellent care they
          deserve.
        </p>
        <br />
      </div>

      <div className="cardsContainer">
        {sortedServices.map((service, index) => (
          <div className="card" key={index}>
            <div className="cardHeader cardImage">
              <img
                src={`/animal-photos/${service.serviceImagePath}`}
                alt={`${service.serviceName}`}
              />
            </div>
            <h2>{service.serviceName}</h2>
            <div
              className="cardBody"
              dangerouslySetInnerHTML={{
                __html: cleanData(String(service.serviceDescription)),
              }}
            ></div>
            <div className="cardFooter">
              <Link to={`/services/${service.serviceRoute}`}>
                <button className="readMore">Read More...</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
