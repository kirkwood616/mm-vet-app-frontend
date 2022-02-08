import Pet from "./Pet";

interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  address: Object[];
  phone: string;
  email: string;
  pets: Pet[];
}

export default User;
