import React from 'react'
import Form from './ComponentesIndividuais/Form'
import ListaCidades from './ComponentesIndividuais/ListaCidades'
//
const PagListaCidades = () => {

  const [adminRegion, setAdminRegion] = React.useState(null)
  const base = 'https://api.teleport.org/api'

  return (
    <main>
      <h1>Cities List</h1>
      <Form adminRegion={adminRegion} setAdminRegion={setAdminRegion} base={base} />
      {adminRegion && <ListaCidades url={`${adminRegion}cities/`} />}  
    </main>
  )
}

export default PagListaCidades