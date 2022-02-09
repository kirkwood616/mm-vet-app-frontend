import { FormEvent, ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";
import { fetchPet, fetchUserByEmail } from "../services/VetApiService";
import Pet from "../models/Pet";

interface Props {
  children: ReactNode;
}

export default function UserContextProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User>({
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
  });
  const [userPets, setUserPets] = useState<Pet[]>([]);

  function handleUserPets(user: User): void {
    user.pets.forEach((pet) => {
      fetchPet(pet).then((data) => setUserPets((prev) => [...prev, data]));
    });
  }

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    fetchUserByEmail(email).then((data) => setUser(data));
  }

  function handleEmail(input: string): void {
    setEmail(input);
  }

  useEffect(() => {
    if (user.email) {
      setIsLoggedIn(true);
      handleUserPets(user);
    }
  }, [user]);

  // function handleLogOut(): void {
  //   setEmail("");
  //   setUser(undefined);
  // }
  return (
    <UserContext.Provider
      value={{ user, userPets, handleLogIn, handleEmail, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
