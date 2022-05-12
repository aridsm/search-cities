import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Carregando from '../Utilities/Carregando'
import Erro from '../Utilities/Erro'
import UrbanAreaDataItem from './UrbanAreaDataItem'

const section = {
  marginTop: '5rem'
}

const h2 = {
  fontWeight: '900',
  marginBottom: '2rem'
}

const span = {
  color: 'var(--cor-4)'
}


const UrbanAreaDados = ({urbArea}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      await request(urbArea.href + 'details')
    }
    fetchData()
  }, [request, urbArea.href])

  if(error) return <Erro />
  if(loading) return <Carregando />
  if(data)
  return (
    <section style={section}>
      <h2 style={h2}>Data of <span style={span}>{urbArea.name}</span> urban area</h2>
      {data.categories.map(item => 
      <UrbanAreaDataItem key={item.id} urbArea={urbArea} item={item}/>
      )}
    </section>
  )
}

export default UrbanAreaDados