import React from 'react'
import Selection from './Selection'

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '2rem',
  padding: '3rem 0',
  borderBottom: '1px dashed rgba(0,0,0,0.3)',
  marginBottom: '3rem'
}

const Form = ({adminRegion, setAdminRegion, base}) => {
  const [continenteURL, setContinenteURL] = React.useState(null)
  const [paisURL, setPaisURL] = React.useState(null)

  return (
    <form style={styles}>
      <Selection option={continenteURL} setOption={setContinenteURL} url={`${base}/continents/`} />
      {continenteURL && <Selection option={paisURL} setOption={setPaisURL} url={`${continenteURL}/countries/`} />}
      {paisURL && <Selection option={adminRegion} setOption={setAdminRegion} url={`${paisURL}/admin1_divisions/`} />}
    </form>
  )
}

export default Form