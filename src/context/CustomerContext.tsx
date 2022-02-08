import { createContext, FormEvent } from "react";
import Customer from "../models/Customer";

interface CustomerContextModel {
  customer: Customer;
  handleLogIn: (e: FormEvent) => void;
  handleLogOut: () => void;
}

const defaultValue: CustomerContextModel = {
  customer: {
    _id: "",
    firstName: "",
    lastName: "",
    address: [],
    phone: "",
    email: "",
    pets: [],
  },
  handleLogIn: () => {},
  handleLogOut: () => {},
};

const CustomerContext = createContext(defaultValue);
export default CustomerContext;
