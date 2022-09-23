import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useGeoFetch = (urlToFetch) => {
  const { data, loading, request } = useFetch();

  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await request(urlToFetch);
    }
    fetchData();
  }, [urlToFetch, request]);

  const setNewValue = (value) => {
    setSelectedValue(value);
  };

  return {
    data,
    setNewValue,
    selectedValue,
    loading,
  };
};

export default useGeoFetch;
