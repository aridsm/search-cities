import React from 'react'
import { GET_CONTINENTS } from '../Api'
import Selection from './ComponentesIndividuais/Selection'
import Titulo from './ComponentesIndividuais/Titulo'
//
const PagListaCidades = () => {

  const [continenteURL, setContinenteURL] = React.useState('')
  const [pais, setPais] = React.useState('')
  const [areaUrbana, setAreaUrbana] = React.useState('')
  return (
    <main>
      <Titulo />
      <Selection GET_API={GET_CONTINENTS} setOption={setContinenteURL} option={continenteURL}/>
      <Selection setOption={setPais} option={pais} href={continenteURL}/>
    </main>
  )
}

export default PagListaCidades