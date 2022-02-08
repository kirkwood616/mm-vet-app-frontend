import { createContext, FormEvent } from "react";
import User from "../models/User";

interface UserContextModel {
  user: User;
  handleLogIn: (e: FormEvent) => void;
  handleLogOut: () => void;
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
  handleLogOut: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
