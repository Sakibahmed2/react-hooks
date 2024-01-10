import { useContext } from "react";
import "./App.css";
import Select from "./components/Select";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  console.log(dark);

  return (
    <div
      className={`h-screen w-full flex justify-center items-center  ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <Select>
        <Select.SelectOption value="option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="option3">Option 3</Select.SelectOption>
        <Select.SelectOption value="option4">Option 4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
