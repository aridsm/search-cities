import React from 'react'
import useFetch from '../../Hooks/useFetch'

const Selection = ({ GET_API, option, setOption, href}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      if (GET_API) {
        const {url} = GET_API()
        await request(url)
      } else {
        await request(href)
      }
    }
    fetchData()
    console.log(data)
  }, [GET_API, request, href])

  function handleChange(e){
    setOption(e.target.value);
  }

  if(data)
  return (
    <>
      <select value={option} onChange={handleChange}>
        {/*data._links["continent:items"].map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
        )*/}
      </select>
    </>
  )
}

export default Selection