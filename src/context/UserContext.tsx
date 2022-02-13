import { createContext, FormEvent } from "react";
import Pet from "../models/Pet";
import User from "../models/User";

interface UserContextModel {
  user: User;
  userPets: Pet[];
  isLoggedIn: boolean;
  handleLogIn: (e: FormEvent) => void;
  handleLogOut: () => void;
  handleEmail: (input: string) => void;
  handleUserPets: (user: User) => void;
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
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
  handleEmail: () => {},
  handleUserPets: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
