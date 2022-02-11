import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <section className="AboutUs Mission image">
        <br />
        <h3>ABOUT US</h3>
        <br />
        <h1>WELCOME TO M&M VETERINARY CLINIC</h1>
        <br />
        <img
          id="welcome-img"
          src="./animal-photos/aboutUs.png"
          alt="cute cats and dog"
        />
        <br />
        <h2>Our Mission</h2>
        <br />
        <p>
          Our Mission is to provide quality veterinary service that is
          affordable to the surrounding community. We desire to provide the
          highest quality medical and surgical care to our patients. We strive
          to offer clients the best possible customer service in a welcoming
          environment.{" "}
        </p>
        <br />
        <p>
          M&M Veterinary Clinic veterinarians and technicians are committed to
          excellence. Our world-class staff combines cutting-edge veterinary
          technology with decades of experience to provide the highest level of
          care for your pet.
        </p>
        <br />
      </section>
      <section className="AboutUs Doctor">
        <br />
      <div className="doctorCardContainer">
        <h1>OUR DOCTOR</h1>
          <br />
          <div className="doctorCard">
          <h3 className="doctorCard title">Doctor ipsum</h3>
          <img
            className="doctorCard image"
            src="./animal-photos/DR.jpg"
            alt="Veterinarian"
          />
          <br />
          <p className="doctorCard desc">
            Eh? Doctor who? What's he talking about…? We're trying to defeat the
            Daleks, not start a jumble sale! We are always in trouble! Isn't it
            extraordinary—it follows us everywhere. I am the Doctor! The
            original, you might say! My ship…my TARDIS… As we learn about each
            other, so we learn about ourselves. Our lives are important—at least
            to us—as we see, so we learn…Our destiny is in the stars , so let's
            go and search for it. You don't understand so you find excuses.
            Alright? Of course I'm alright, my child. You know, I am so
            constantly outwitting the opposition, I tend to forget the delights
            and satisfaction of the gentle art of fisticuffs.
          </p>
          <br />
          </div>

          <div className="doctorCard">
          <h3 className="doctorCard title">Dr.Ipsum </h3>
          <img
            className="doctorCard image"
            src="./animal-photos/drIpsum.jpg"
            alt="Veterinarian"
          />
          <br />
          <p className="doctorCard desc">
            You may disguise your features but you can never disguise your
            intent. This thing is smaller on the inside than it is on the
            outside. There's always something to look at if you open your eyes!
            That's the trouble with regeneration. You quite never know what
            you're going to get. Like Alice, I try to believe three impossible
            things before breakfast. Sorry, must dash! That could blow a hole in
            the space-time continuum, the size of—actually, the exact size of
            Belgium. That's a bit undramatic, isn't it? 'Belgium'?
          </p>
          <br />
          </div>

          <div className="doctorCard">
          <h3 className="doctorCard title">Dr.Ipsum too</h3>
          <img
            className="doctorCard image"
            src="./animal-photos/drToo.jpg"
            alt="Veterinarian"
          />
          <br />
          <p className="doctorCard desc">
            Why are you pointing your screwdrivers like that? They're scientific
            instruments, not water pistols. Are you capable of speaking without
            flapping your hands about? 'Timey' what? 'Timey wimey'? I don't
            suppose we'll ever know if we actually succeeded. But at worst, we
            failed doing the right thing, as opposed to succeeding in doing the
            wrong. Go and be the Doctor that I could never be. Do you have to
            talk like children? What is it that makes you so ashamed of being a
            grown-up? Then, all things considered...it's time I grew up.
          </p>
          <br />
          </div>

          <div className="doctorCard">
          <h3 className="doctorCard title">Doctor Also Ipsum</h3>
          <img
            className="doctorCard image"
            src="./animal-photos/drAlso.jpg"
            alt="Veterinarian"
          />
          <br />
          <p className="doctorCard desc">
            You may be a doctor. But I'm the Doctor. The definite article, you
            might say. Are you listening to me? What?! Come out. And don't touch
            anything! You're a clumsy, ham fisted idiot! It seems you have a
            very large rat Brigadier—maybe you should employ the services of a
            very large cat? Have a jelly baby. You're standing on my scarf.
            Well, of course I'm being childish! There's no point being grown-up
            if you can't be childish sometimes. The trouble with computers, of
            course, is that they're very sophisticated idiots. They do exactly
            what you tell them at amazing speed. Even if you order them to kill
            you. So if you do happen to change your mind, it's very difficult to
            stop them from obeying the original order. But not impossible.
          </p>
          <br />
          </div>

          <div className="doctorCard">
          <h3 className="doctorCard title">Vet Tech Ipsum</h3>
          <img
            className="doctorCard image"
            src="./animal-photos/vetTech.png"
            alt="Veterinarian"
          />
          <p className="doctorCard desc">
            People assume that time is a strict progression of
            cause-and-effect... but actually, from a non-linear, non-subjective
            viewpoint, it's more like a big ball of wibbly-wobbly...
            timey-wimey... stuff. I don't want to go. There was a war. A Time
            War. The Last Great Time War. My people fought a race called the
            Daleks, for the sake of all creation. And they lost. We lost.
            Everyone lost. They're all gone now. My family. My friends. Even
            that sky. You can spend the rest of your life with me, but I can't
            spend the rest of mine with you. I have to live on. Alone. That's
            the curse of the Time Lords.
          </p>
          <br />
          </div>
        </div>
      </section>

      <section className="AboutUsContact">
        <br />
        <h1>VISIT US</h1>
        <br />
        <h2>M&M Veterinary Clinic: 555 Fifty Five St., Detroit, MI 48226</h2>
        <div className="AboutUsHourTable">
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
        <br />
        <h2>Contact: +1.555-555-5555</h2>
        <br />
        <h2>Email: info@m&m.vetclinic.com</h2>
      </section>
    </div>
  );
}

export default AboutUs;
