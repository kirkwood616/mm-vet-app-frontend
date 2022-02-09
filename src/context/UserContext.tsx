import { createContext, FormEvent } from "react";
import Pet from "../models/Pet";
import User from "../models/User";

interface UserContextModel {
  user: User;
  userPets: Pet[];
  handleLogIn: (e: FormEvent) => void;
  handleEmail: (input: string) => void;
  isLoggedIn: boolean;
  // handleLogOut: () => void;
}

const defaultValue: UserContextModel = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    address: [
      {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    ],
    phone: "",
    email: "",
    pets: [],
  },
  userPets: [],
  handleLogIn: () => {},
  handleEmail: () => {},
  isLoggedIn: false,
  // handleLogOut: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
