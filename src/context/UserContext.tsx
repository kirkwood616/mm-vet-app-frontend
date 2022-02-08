import { createContext, FormEvent } from "react";
import User from "../models/User";

interface UserContextModel {
  user: User;
  handleLogIn: (e: FormEvent) => void;
  handleEmail: (input: string) => void;
  // handleLogOut: () => void;
}

const defaultValue: UserContextModel = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    address: [],
    phone: "",
    email: "",
    pets: [],
  },
  handleLogIn: () => {},
  handleEmail: () => {},
  // handleLogOut: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
