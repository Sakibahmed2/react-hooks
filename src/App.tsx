import { useContext } from "react";
import "./App.css";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";
import GameResult from "./pages/hooksPages/GameResult";
import UsersContainer from "./components/UsersContainer";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  console.log(dark);

  return (
    <div
      className={`h-screen w-full flex justify-center items-center  ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <UsersContainer />
    </div>
  );
}

export default App;
