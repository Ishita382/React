import { Routes, Route } from "react-router-dom";

import "./App.css";
import ThemeSwitcher from "./pages/theme-switcher";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme-switcher" element={<ThemeSwitcher />} />
    </Routes>
  );
}

export default App;
