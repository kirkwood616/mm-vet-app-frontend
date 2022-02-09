import { FormEvent, ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";
import { fetchUserByEmail } from "../services/VetApiService";

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

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    fetchUserByEmail(email).then((data) => setUser(data));
  }

  function handleEmail(input: string): void {
    setEmail(input);
  }

  useEffect(() => {
    if (user.email) setIsLoggedIn(true);
  }, [user]);

  // function handleLogOut(): void {
  //   setEmail("");
  //   setUser(undefined);
  // }
  return (
    <UserContext.Provider
      value={{ user, handleLogIn, handleEmail, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
