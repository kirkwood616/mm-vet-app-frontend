import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>ABOUT US</h1>
      <div className="aboutUsInfoContainer">
        <h2>WELCOME TO M&M VETERINARY CLINIC</h2>

        <img
          className="aboutUsImage"
          src="./animal-photos/aboutUs.png"
          alt="cute cats and dog"
        />

        <h2>Our Mission</h2>

        <p>
          Our Mission is to provide quality veterinary service that is
          affordable to the surrounding community. We desire to provide the
          highest quality medical and surgical care to our patients. We strive
          to offer clients the best possible customer service in a welcoming
          environment.{" "}
        </p>

        <p>
          M&M Veterinary Clinic veterinarians and technicians are committed to
          excellence. Our world-class staff combines cutting-edge veterinary
          technology with decades of experience to provide the highest level of
          care for your pet.
        </p>

        <div className="aboutUsDoctor">
          <div className="doctorCard">
            <img
              className="doctorCardImage"
              src="./animal-photos/DR.jpg"
              alt="Veterinarian"
            />

            <div className="doctorCardContent">
              <h3 className="doctorCardTitle">Doctor Ipsum</h3>
              <p className="doctorCardDescription">
                Eh? Doctor who? What's he talking about…? We're trying to defeat
                the Daleks, not start a jumble sale! We are always in trouble!
                Isn't it extraordinary—it follows us everywhere. I am the
                Doctor! The original, you might say! My ship…my TARDIS… As we
                learn about each other, so we learn about ourselves. Our lives
                are important—at least to us—as we see, so we learn…Our destiny
                is in the stars , so let's go and search for it. You don't
                understand so you find excuses. Alright? Of course I'm alright,
                my child. You know, I am so constantly outwitting the
                opposition, I tend to forget the delights and satisfaction of
                the gentle art of fisticuffs.
              </p>
            </div>
          </div>

          <div className="doctorCard">
            <img
              className="doctorCardImage"
              src="./animal-photos/drIpsum.jpg"
              alt="Veterinarian"
            />

            <h3 className="doctorCardTitle">Dr.Ipsum </h3>
            <p className="doctorCardDescription">
              You may disguise your features but you can never disguise your
              intent. This thing is smaller on the inside than it is on the
              outside. There's always something to look at if you open your
              eyes! That's the trouble with regeneration. You quite never know
              what you're going to get. Like Alice, I try to believe three
              impossible things before breakfast. Sorry, must dash! That could
              blow a hole in the space-time continuum, the size of—actually, the
              exact size of Belgium. That's a bit undramatic, isn't it?
              'Belgium'?
            </p>
          </div>

          <div className="doctorCard">
            <img
              className="doctorCardImage"
              src="./animal-photos/drToo.jpg"
              alt="Veterinarian"
            />

            <h3 className="doctorCardTitle">Dr.Ipsum too</h3>
            <p className="doctorCardDescription">
              Why are you pointing your screwdrivers like that? They're
              scientific instruments, not water pistols. Are you capable of
              speaking without flapping your hands about? 'Timey' what? 'Timey
              wimey'? I don't suppose we'll ever know if we actually succeeded.
              But at worst, we failed doing the right thing, as opposed to
              succeeding in doing the wrong. Go and be the Doctor that I could
              never be. Do you have to talk like children? What is it that makes
              you so ashamed of being a grown-up? Then, all things
              considered...it's time I grew up.
            </p>
          </div>

          <div className="doctorCard">
            <img
              className="doctorCardImage"
              src="./animal-photos/also.jpg"
              alt="Veterinarian"
            />

            <h3 className="doctorCardTitle">Doctor Also Ipsum</h3>
            <p className="doctorCardDescription">
              You may be a doctor. But I'm the Doctor. The definite article, you
              might say. Are you listening to me? What?! Come out. And don't
              touch anything! You're a clumsy, ham fisted idiot! It seems you
              have a very large rat Brigadier—maybe you should employ the
              services of a very large cat? Have a jelly baby. You're standing
              on my scarf. Well, of course I'm being childish! There's no point
              being grown-up if you can't be childish sometimes. The trouble
              with computers, of course, is that they're very sophisticated
              idiots. They do exactly what you tell them at amazing speed. Even
              if you order them to kill you. So if you do happen to change your
              mind, it's very difficult to stop them from obeying the original
              order. But not impossible.
            </p>
          </div>

          <div className="doctorCard">
            <img
              className="doctorCardImage"
              src="./animal-photos/vetTech.png"
              alt="Veterinarian"
            />

            <h3 className="doctorCardTitle">Vet Tech Ipsum</h3>
            <p className="doctorCardDescription">
              People assume that time is a strict progression of
              cause-and-effect... but actually, from a non-linear,
              non-subjective viewpoint, it's more like a big ball of
              wibbly-wobbly... timey-wimey... stuff. I don't want to go. There
              was a war. A Time War. The Last Great Time War. My people fought a
              race called the Daleks, for the sake of all creation. And they
              lost. We lost. Everyone lost. They're all gone now. My family. My
              friends. Even that sky. You can spend the rest of your life with
              me, but I can't spend the rest of mine with you. I have to live
              on. Alone. That's the curse of the Time Lords.
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <div className="aboutUsInfo">
            <img src="/icons/map.svg" alt="Map Icon" className="icon" />
            <h4>
              555 Fifty Five St. <br /> Detroit, MI 48226
            </h4>
          </div>
          <div className="aboutUsInfo">
            <img src="/icons/mobile.svg" alt="Phone Icon" className="icon" />
            <h4>PHONE</h4>
            <h4>+1.555-555-5555</h4>
          </div>
          <div className="aboutUsInfo">
            <img src="/icons/mail.svg" alt="Mail Icon" className="icon" />
            <h4>E-MAIL</h4>
            <a href="mailto:info@m&m.vetclinic.com">
              <h4>info@m&m.vetclinic.com</h4>
            </a>
          </div>
        </div>
        <div className="aboutUsInfo hours">
          <img src="/icons/time.svg" alt="Clock Icon" className="icon" />
          <h4>HOURS</h4>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Monday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>8:00am-6:00pm</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutUs;
