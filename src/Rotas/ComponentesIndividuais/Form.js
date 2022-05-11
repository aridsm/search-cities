import React from 'react'
import Selection from './Selection'

const Form = () => {
  const [continenteURL, setContinenteURL] = React.useState('')
  const [paisURL, setPaisURL] = React.useState('')
  const [adminRegion, setAdminRegion] = React.useState('')
  const base = 'https://api.teleport.org/api'

  return (
    <form>
      <Selection option={continenteURL} setOption={setContinenteURL} url={`${base}/continents/`} />
      <Selection option={paisURL} setOption={setPaisURL} url={`${continenteURL}/countries/`} />
      <Selection option={adminRegion} setOption={setAdminRegion} url={`${paisURL}/admin1_divisions/`} />

    </form>
  )
}

export default Form