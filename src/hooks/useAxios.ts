import axios from 'axios';
import { useEffect, useState } from 'react';
import { countryReqInterface } from '../pages/Country/reqTypes';
import { reqInterface } from '../pages/Home/reqTypes';

type ResponseType = reqInterface[] | countryReqInterface | null;

function useAxios(url: string) {
  const [response, setResponse] = useState<ResponseType>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;

        setResponse(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url]);

  return [response, loading];
}

export default useAxios;