import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Carregando from '../Utilities/Carregando'
import Erro from '../Utilities/Erro'
import SelectInput from './SelectInput'

const Selection = ({ option, setOption, url, geoType, label }) => {

  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      await request(url)
    }
    fetchData()
  }, [request, url])

  if (error) return <Erro />
  if (loading) return <Carregando />
  if (data)
    return (
      <>
        <SelectInput data={data._links[geoType]} option={option} setOption={setOption} label={label} />
      </>
    )
}

export default Selection