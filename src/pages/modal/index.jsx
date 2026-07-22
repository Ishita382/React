import { useEffect, useRef, useState } from "react";
import "../../App.css";
import Modal from "./component";

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const prevActiveElementRef = useRef(null);

  const fetchData = async (page = 0) => {
    const res = await fetch(`/api/products?page=${page}`);
    const data = await res.json();
    setData((prev) => [...prev, ...data.data]);
    if (data.hasMore) {
      await new Promise((resolve, reject) => setTimeout(resolve, 210));
      fetchData(data.nextPage);
    }
  };

  console.log("data", data);

  useEffect(() => {
    // fetchData();
    if (isOpen) {
      prevActiveElementRef.current = document.activeElement;
      closeButtonRef.current.focus();
    } else {
      prevActiveElementRef.current?.focus();
    }
    console.log(document.activeElement);
  }, [isOpen]);

  // const handleCallApi = async () => {
  //   const res = await fetch("http://localhost:3001/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "New Product",
  //       price: 49.99,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      setActiveIndex((index + 1) % 2); // Move to next
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((index - 1 + 2) % 2); // Move to previous
    }
  };

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <button ref={prevActiveElementRef} onClick={() => setIsOpen(true)}>
        Open modal
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          Hi there
          <button ref={closeButtonRef} onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button  onClick={() => setIsOpen(false)}>
            Close
          </button>
        </Modal>
      )}
      {/* <button onClick={handleCallApi}>Call api</button> */}
      <button>Button 2</button>

      <label htmlFor="name">Name:</label>
      <input id="name" placeholder="Enter Name" />
      <br />
      <input type="radio" id="option1" />
      <label htmlFor="option1">Option 1</label>
      <input type="radio" id="option2" />
      <label htmlFor="option2">Option 2</label>
      <br />
      <div role="toolbar">
        <button
          tabIndex={activeIndex === 0 ? 0 : -1} // Only 0 is reachable via Tab
          onKeyDown={(e) => handleKeyDown(e, 0)}
        >
          Bold
        </button>
        <button
          tabIndex={activeIndex === 1 ? 0 : -1}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        >
          Italic
        </button>
      </div>
      <div
        role="button"
        onClick={handleClick}
        tabIndex={0}
        className="heyDiv"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        Hey
      </div>
    </div>
  );
}
