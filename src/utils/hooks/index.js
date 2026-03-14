import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export const useLocalStorage = ({ key, initialValue }) => {
  const [value, setValue] = useState(JSON.stringify(initialValue));

  const handleSetValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, handleSetValue];
};

export const useDebounce = (func, delay) => {
  const timer = useRef(null);

  return (...args) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
