import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)

  const request = React.useCallback(async (url) => {
    let json;
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(url);
      json = await response.json();
    } catch (err) {
      json = null;
      setError(true);
    } finally {
      setLoading(null);
      setData(json)
    }
  }, [])


  return { error, data, loading, request }
}

export default useFetch