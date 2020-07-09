import { useState, useEffect } from "react";

import { IUseFetchState, IPath } from "./types";
import fakeData from "assets/fakeData";

function useFetch<T>(path: IPath): IUseFetchState<T> {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer: number;
    (async () => {
      setLoading(true);
      try {
        timer = setTimeout(() => {
          const res: any = fakeData[path];
          setResponse(res);
        }, 2000);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
}

export default useFetch;
