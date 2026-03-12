import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/theme-switcher"}>Theme Switcher</Link>
      <Link to={"/modal"}>Modal</Link>
    </div>
  );
}
