import { useEffect, useState } from 'react';

import { Apartement } from '../models/Apartement';
import axios from 'axios';

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<Apartement[] | Apartement>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `http://192.168.1.5:8080/${endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
