import axios from "axios";
import { useEffect, useState } from "react";

function UseFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      let resp = await axios.get(url);
      let data = await resp?.data?.recipes;

      setApiData(data)
      setIsLoading(false);

    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);



  return {isLoading,apiData,serverError};
}

export default UseFetch;
