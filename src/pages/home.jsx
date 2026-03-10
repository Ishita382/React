import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={"/theme-switcher"}>Theme Switcher</Link>
    </div>
  );
}
