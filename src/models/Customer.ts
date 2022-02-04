import Pet from "./Pet";

interface Customer {
  _id?: string;
  firstName: string;
  lastName: string;
  address: Object[];
  phone: string;
  email: string;
  pets: Pet[];
}

export default Customer;
