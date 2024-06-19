import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import UserProfile from "../src/components/Auth";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
