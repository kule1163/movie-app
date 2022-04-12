import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {MovieType} from "./utils/movieTypes"

function useFetch(/* query, */ url:string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([] as any[]);

    interface Res{
        data: {
            results: any[]
        }
    }

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res:Res = await axios.get(
          `${url}`
      );
  
      
      await setList((prev) => [...prev, ...res.data.results/* .map(item => item) */]);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [/* query,  */url]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, url]);

  return { loading, error, list };
}

export default useFetch;