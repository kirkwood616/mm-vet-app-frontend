import "./SingleService.css";
import cleanData from "../functions/sanitize";
import Service from "../models/Service";
import { useContext } from "react";
import UserContext from "../context/UserContext";
// import { Link } from "react-router-dom";

function SingleService() {
  let { services } = useContext(UserContext);

  console.log(services);

  // let data = {
  //   serviceName: "Service",
  //   serviceRoute: "service",
  //   serviceImagePath: "well.jpg",
  //   serviceDescription: "Lorem Ipsum",
  //   serviceBody: "<p>Serve Info</p><p>More Info Here</p>",
  // };

  return (
    <div className="SingleService">
      <h1>{services[0].serviceName}</h1>
      <div className="serviceInfoContainer">
        <img
          src={`/animal-photos/${services[0].serviceImagePath}`}
          alt={`${services[0].serviceName}`}
          className="serviceImage"
        />
        <div
          className="serviceInfo"
          dangerouslySetInnerHTML={{
            __html: cleanData(String(services[0].serviceBody)),
          }}
        ></div>
      </div>
    </div>
  );
}

export default SingleService;
