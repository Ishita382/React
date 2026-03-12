import { Routes, Route } from "react-router-dom";

import "./App.css";
import ThemeSwitcher from "./pages/theme-switcher";
import Home from "./pages/home";
import MyComponent from "./pages/modal";
import MyTooltip from "./pages/tooltip";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme-switcher" element={<ThemeSwitcher />} />
      <Route path="/modal" element={<MyComponent />} />
      <Route path="/tooltip" element={<MyTooltip />} />
    </Routes>
  );
}

export default App;
