import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";

function App() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}

export default App;
