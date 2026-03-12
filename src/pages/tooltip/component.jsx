import { useState } from "react";
import "../../App.css";

export default function Tooltip({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  //   const []

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="tooltipContainer"
    >
      {children}
      {isVisible && <div className="tooltipContent">Tooltip here</div>}
    </div>
  );
}
