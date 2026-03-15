import { useState } from "react";

export default function Rating() {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div
      style={{ display: "flex", gap: "12px" }}
      onMouseLeave={() => setHover(0)}
    >
      {Array.from({ length: 5 }).map((item, index) => {
        return (
          <span
            style={{
              fontSize: "30px",
              color: index + 1 > (hover || selected) ? "black" : "pink",
              backgroundColor: "white",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHover(index + 1)}
            onClick={() => setSelected(index + 1)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
