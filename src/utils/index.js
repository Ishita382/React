import { useEffect, useState } from "react";

const cache = {};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("cache", cache[url]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("cache[url]", cache[url]);
        if (cache[url]) {
          console.log("coming here");
          setData(cache[url]);
          return;
        }
        setIsLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        cache[url] = result;
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
