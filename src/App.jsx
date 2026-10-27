import { UserProvider } from "./context/userContext.jsx";
import Header from "./layout/Header.jsx";
import Profile from "./pages/profil.jsx";

function App() {
  return (
    <UserProvider>
      <div className="mx-auto my-12 max-w-xl p-5 font-sans">
        <h1 className="mb-5 text-3xl font-bold text-gray-900">UserContext vazifasi</h1>
        <Header />
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;