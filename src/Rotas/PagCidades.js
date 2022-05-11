import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const PagCidades = () => {

  const param = useParams()
  const {data, error, loading, request} = useFetch()
  const base = 'https://api.teleport.org/api/'

  React.useEffect(() => {
    async function fetchData() {
      await request(base + 'cities/geonameid:' + param.id)
    }
    fetchData()
    console.log(data)
  }, [param, request])

  if(data)
  return (
    <main>
      <h1>{data.name}</h1>
      <p>Division: {data._links["city:admin1_division"].name}</p>
      <p>Country: {data._links["city:country"].name}</p>
      <p>Population: {data.population}</p>
      {data._links["city:urban_area"] ? <p>Belong to {data._links["city:urban_area"].name} urban area</p> : "This city doesn't belong to any urban area"}
    </main>
  )
}

export default PagCidades