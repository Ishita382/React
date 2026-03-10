import { useContext } from "react";
import "../../App.css";
import { ThemeContext } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme", theme);

  return (
    <div className="themeBody">
      <button className="clickbtn">Click me</button>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
