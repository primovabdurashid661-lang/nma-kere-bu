import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

function Profile() {
  const { name, changeName } = useContext(UserContext);

  return (
    <div className="rounded-lg border border-gray-300 p-4">
      <h2 className="mb-3 text-xl font-semibold text-gray-800">Profile: {name}</h2>
      <button
        onClick={changeName}
        className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 active:scale-95"
      >
        Ismni o'zgartirish
      </button>
    </div>
  );
}

export default Profile;