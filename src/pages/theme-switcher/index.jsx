import { useContext } from "react";
import "../../App.css";
import { ThemeContext } from "./theme-provider";
import { Link } from "react-router-dom";

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="themeBody">
      <Link to="/">Go back</Link>
      <div>
        <button className="clickbtn">Click me</button>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </div>
  );
}
