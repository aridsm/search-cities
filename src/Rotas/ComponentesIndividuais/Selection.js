import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Carregando from '../Utilities/Carregando'
import Erro from '../Utilities/Erro'
import SelectInput from './SelectInput'

const Selection = ({ option, setOption, url }) => {

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
        {data._links["continent:items"] && <SelectInput data={data._links["continent:items"]} option={option} setOption={setOption} type='continent' />}

        {data._links["country:items"] && <SelectInput data={data._links["country:items"]} option={option} setOption={setOption} type='country' />}

        {data._links["a1:items"] ? <SelectInput data={data._links["a1:items"]} option={option} setOption={setOption} type='administrative region' />
          : ''
        }
      </>
    )
}

export default Selection