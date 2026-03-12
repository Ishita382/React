import { useState } from "react";
import "../../App.css";
import Modal from "./component";

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          Hi there
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
