import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useState("boxo");

  function changeName() {
    setName(name === "boxo" ? "bobo" : "boxo");
  }

  return (
    <UserContext.Provider value={{ name, changeName }}>
      {children}
    </UserContext.Provider>
  );
}