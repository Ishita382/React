import { Routes, Route } from "react-router-dom";

import "./App.css";
import ThemeSwitcher from "./pages/theme-switcher";
import Home from "./pages/home";
import MyComponent from "./pages/modal";
import MyTooltip from "./pages/tooltip";
import Rating from "./pages/rating";
import AuthGuard from "./pages/auth-guard";
import HOC from "./pages/hoc";
import ResisableSplitPane from "./pages/split-pane";
import OtpInput from "./pages/otp-input";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/theme-switcher"
        element={
          <AuthGuard>
            <ThemeSwitcher />
          </AuthGuard>
        }
      />
      <Route path="/modal" element={<MyComponent />} />
      <Route path="/tooltip" element={<MyTooltip />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/hoc" element={<HOC />} />
      <Route path="/split-pane" element={<ResisableSplitPane />} />
      <Route path="/otp-input" element={<OtpInput />} />
    </Routes>
  );
}

export default App;
