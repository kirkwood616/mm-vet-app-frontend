import { FormEvent, ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";
import {
  deleteMessageFromBoard,
  fetchGeneralPosts,
  fetchPet,
  fetchServices,
  fetchUserByEmail,
} from "../services/VetApiService";
import Pet from "../models/Pet";
import MessageBoardPost from "../models/MessageBoardPost";
import Service from "../models/Service";

interface Props {
  children: ReactNode;
}

export default function UserContextProvider({ children }: Props) {
  const initialUserState: User = {
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
  };
  const [generalMessageBoard, setGeneralMessageBoard] = useState<
    MessageBoardPost[]
  >([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User>(initialUserState);
  const [userPets, setUserPets] = useState<Pet[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  function handleGeneralMessageBoard(): void {
    setGeneralMessageBoard([]);
    fetchGeneralPosts().then((data) => setGeneralMessageBoard(data));
  }

  function handleUpdateMessage(id: string, postEdit: MessageBoardPost): void {
    let index: number = generalMessageBoard.findIndex((e) => e._id === id);

    if (generalMessageBoard.length && index + 1) {
      setGeneralMessageBoard((prev) => [
        ...prev.slice(0, index),
        Object.assign({}, prev[index], postEdit),
        ...prev.slice(index + 1),
      ]);
    }
  }

  function handleDeleteGeneralMessage(id: string): void {
    let index: number = generalMessageBoard.findIndex((e) => e._id === id);

    if (generalMessageBoard.length && index + 1) {
      setGeneralMessageBoard((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }
    deleteMessageFromBoard(id);
  }

  function handleEmail(input: string): void {
    setEmail(input);
  }

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    fetchUserByEmail(email).then((data) => setUser(data));
  }

  function handleLogOut(): void {
    setIsLoggedIn(false);
    setEmail("");
    setUserPets([]);
    setUser(initialUserState);
    setGeneralMessageBoard([]);
  }

  function handleUserPets(user: User): void {
    setUserPets([]);
    user.pets.forEach((pet) => {
      fetchPet(pet).then((data) => setUserPets((prev) => [...prev, data]));
    });
  }

  function handleServices(): void {
    if (services.length) {
      return;
    } else {
      fetchServices().then((data) => setServices(data));
    }
  }

  useEffect(() => {
    if (user.email) {
      setIsLoggedIn(true);
      handleUserPets(user);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        userPets,
        services,
        handleLogIn,
        handleLogOut,
        handleEmail,
        handleServices,
        handleUserPets,
        handleGeneralMessageBoard,
        handleUpdateMessage,
        handleDeleteGeneralMessage,
        generalMessageBoard,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
