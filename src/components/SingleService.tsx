import "./SingleService.css";
import cleanData from "../functions/sanitize";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router-dom";
import BackToServices from "./BackToServices";

function SingleService() {
  let { route } = useParams();
  let { services } = useContext(UserContext);
  let service = services.find((service) => service.serviceRoute === route);
  console.log(route);

  return (
    <div className="SingleService">
      <h1>{service?.serviceName}</h1>
      <div className="serviceInfoContainer">
        <img
          src={`/animal-photos/${service?.serviceImagePath}`}
          alt={`${service?.serviceName}`}
          className="serviceImage"
        />
        <div
          className="serviceInfo"
          dangerouslySetInnerHTML={{
            __html: cleanData(String(service?.serviceBody)),
          }}
        ></div>
        <BackToServices />
      </div>
    </div>
  );
}

export default SingleService;
