import { createContext, FormEvent } from "react";
import MessageBoardPost from "../models/MessageBoardPost";
import Pet from "../models/Pet";
import Service from "../models/Service";
import User from "../models/User";

interface UserContextModel {
  user: User;
  userPets: Pet[];
  services: Service[];
  isLoggedIn: boolean;
  generalMessageBoard: MessageBoardPost[];
  handleLogIn: (e: FormEvent) => void;
  handleLogOut: () => void;
  handleEmail: (input: string) => void;
  handleUserPets: (user: User) => void;
  handleServices: () => void;
  handleGeneralMessageBoard: () => void;
  handleUpdateMessage: (id: string, postEdit: MessageBoardPost) => void;
  handleDeleteGeneralMessage: (id: string) => void;
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
  services: [],
  isLoggedIn: false,
  generalMessageBoard: [],
  handleLogIn: () => {},
  handleLogOut: () => {},
  handleEmail: () => {},
  handleUserPets: () => {},
  handleServices: () => {},
  handleGeneralMessageBoard: () => {},
  handleUpdateMessage: () => {},
  handleDeleteGeneralMessage: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
