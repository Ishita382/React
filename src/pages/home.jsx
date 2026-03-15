import { Link } from "react-router-dom";
import {
  useDebounce,
  useFetch,
  useLocalStorage,
  useMediaQuery,
  usePrevious,
} from "../utils/hooks";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/action";

export default function Home() {
  const count = useSelector((state) => state.count);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const state = useSelector((state) => state);
  // console.log(state, "state");

  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");
  const isMobile = useMediaQuery("(max-width: 768px");
  const previous = usePrevious(count);
  const [inputVal, setInputVal] = useState("");
  const [value, handleSetValue] = useLocalStorage({
    key: "name",
    initialValue: "Ishita",
  });

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const debouncedSearch = useDebounce(handleChange, 1000);
  const handleLogin = () => {
    localStorage.setItem("user", "Ishita");
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("user", "Ishita");
    if (data) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <Link to={"/theme-switcher"}>Theme Switcher</Link>
      <Link to={"/modal"}>Modal</Link>
      <Link to={"/tooltip"}>Tooltip</Link>
      <Link to={"/rating"}>Rating</Link>
      <div onClick={() => handleSetValue("Arora")}>Set</div>
      <input onChange={debouncedSearch} />
      Current: {count}
      Prev: {previous}
      <button onClick={() => dispatch(increment())}>+</button>
      <button
        style={{ position: "fixed", bottom: "0px", right: "0px" }}
        onClick={() => {
          if (isLoggedIn) handleLogout();
          else handleLogin();
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
