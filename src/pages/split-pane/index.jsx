import { useRef, useState } from "react";

export default function ResisableSplitPane() {
  const [width, setWidth] = useState(300);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    setWidth(e.clientX);
  };

  return (
    <div
      style={{ height: "100vh", display: "flex" }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div style={{ width: width }}>Left Pane</div>
      <div
        style={{
          width: "5px",
          height: "100%",
          backgroundColor: "black",
          cursor: "col-resize",
        }}
        onMouseDown={handleMouseDown}
      />
      <div style={{ flex: 1 }}>Right Pane</div>
    </div>
  );
}
