import { Link } from "react-router-dom";
import {
  useDebounce,
  useFetch,
  useLocalStorage,
  useMediaQuery,
  usePrevious,
} from "../utils/hooks";
import { useRef, useState } from "react";

export default function Home() {
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");
  const isMobile = useMediaQuery("(max-width: 768px");
  const [counter, setCounter] = useState(0);
  const previous = usePrevious(counter);
  const [inputVal, setInputVal] = useState("");
  const [value, handleSetValue] = useLocalStorage({
    key: "name",
    initialValue: "Ishita",
  });
  console.log("data", data);

  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("value", value);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };
  console.log("isMobile", isMobile);
  const debouncedSearch = useDebounce(handleChange, 1000);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/theme-switcher"}>Theme Switcher</Link>
      <Link to={"/modal"}>Modal</Link>
      <Link to={"/tooltip"}>Tooltip</Link>
      <Link to={"/rating"}>Rating</Link>
      <div onClick={() => handleSetValue("Arora")}>Set</div>
      <input onChange={debouncedSearch} />
      Current: {counter}
      Prev: {previous}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
