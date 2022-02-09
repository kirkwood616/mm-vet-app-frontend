// import Pet from "./Pet";

interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  address: [
    {
      street: string;
      city: string;
      state: string;
      zip: string;
    }
  ];
  phone: string;
  email: string;
  pets: string[];
}

export default User;
