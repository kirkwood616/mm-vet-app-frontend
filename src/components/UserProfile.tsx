function UserProfile() {
  return (
    <div className="UserProfile">
      {/* <h1>OWNER PROFILE</h1> */}
      {/* customer profile */}
      <h3>Welcome Name: </h3>
      <br />
      <h2>Your INFORMATION</h2>
      <p>Name:</p>
      <p>Address:</p>
      <p>Phone: </p>
      <p>Email: </p>
      <br />
      <h2>
        {" "}
        <a href="/pet-profile">Your Pets</a>
      </h2>
      <br />
      <h3>
        <a href="/update-contact-info">
          Update your contact information click!
        </a>
      </h3>
      <div className="update-contact-info">
        {/* set update info hidden till client click request the update */}
        {/* <form >
          <input type="text">Address</input>
          <input type="text">Phone</input> 
          <input type="text">Email</input>
        </form> */}
      </div>
    </div>
  );
}

export default UserProfile;
