import { data } from "autoprefixer";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, []);

  const getFetch = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=naruto&api_key=fa8e38cf0b9f357169b6389692856535`
    );

    const data = await resp.json();

    console.log({ data });
  };

  return {};
};
