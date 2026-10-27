
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  const { name } = useContext(UserContext);

  return (
    <header>
      <h2>Header: {name}</h2>
    </header>
  );
}

export default Header;
