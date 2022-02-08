import { FormEvent, ReactNode, useState } from "react";
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
    address: [],
    phone: "",
    email: "",
    pets: [],
  });

  function handleLogIn(e: FormEvent): void {
    e.preventDefault();
    if (email) {
      fetchUserByEmail(email).then((data) => setUser(data));
      if (user.email) setIsLoggedIn(true);
    } else {
      return;
    }
  }

  function handleEmail(input: string): void {
    setEmail(input);
  }

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
