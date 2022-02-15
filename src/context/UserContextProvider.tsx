import { FormEvent, ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";
import {
  fetchGeneralPosts,
  fetchPet,
  fetchUserByEmail,
} from "../services/VetApiService";
import Pet from "../models/Pet";
import MessageBoardPost from "../models/MessageBoardPost";

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

  function handleGeneralMessageBoard(): void {
    setGeneralMessageBoard([]);
    fetchGeneralPosts().then((data) => setGeneralMessageBoard(data));
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
        handleLogIn,
        handleLogOut,
        handleEmail,
        handleUserPets,
        handleGeneralMessageBoard,
        generalMessageBoard,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
