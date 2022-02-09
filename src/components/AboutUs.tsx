// import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>ABOUT US</h1>
      <h2>WELCOME TO M&M VETERINARY CLINIC</h2>
      <img src="./animal-photos/aboutUs.png" alt="cute cats and dog" height={450} width={600} />
      <p>Discription for vet</p>
      <br />
      <h2>OUR DOCTOR</h2>
      <p>Discription of doctor</p>
      <div></div>
      <div></div>
      <h1>VISIT US</h1>
      <h2>Address: M&M Vet Clinic: 555 Fifty Five St., Detroit, MI 48226</h2>
      <div className="overflow-x: auto">
        <table>
          <tr>
            <th>
              <h2>Hours</h2>
            </th>
          </tr>
          <tr>
            <td>Monday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td> 8:00am-6:00pm</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td> Closed</td>
          </tr>
        </table>
      </div>
      <h2>Contact:+1.555-555-5555</h2>
      <h2>Email:info@m&m.vetclinic.com</h2>
    </div>
  );
}

export default AboutUs;
