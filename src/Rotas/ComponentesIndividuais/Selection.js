import React from 'react'
import useFetch from '../../Hooks/useFetch'

const Selection = ({ option, setOption, url }) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    console.log(url)
  },[url])

  React.useEffect(() => {
    async function fetchData(){
        await request(url)
    }
    fetchData()
    console.log(data)
  }, [request, url])

  function handleChange(e){
    setOption(e.target.value);
  }

  if(loading) return <p>carregando</p>
  if(data)
  return (
    <>
      <select value={option} onChange={handleChange}>
        {data._links["continent:items"]
        &&
        data._links["continent:items"].map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
        )}
        {data._links["country:items"]
        &&
        data._links["country:items"].map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
        )}
        {data._links["a1:items"]
        &&
        data._links["a1:items"].map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
        )}
      </select>
    </>
  )
}

export default Selection