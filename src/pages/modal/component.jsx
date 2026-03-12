import { createPortal } from "react-dom";
import "../../App.css";

export default function Modal({ children, onClose }) {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
