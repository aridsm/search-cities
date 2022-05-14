import React from 'react'
import Selection from './Selection'
import styles from '../Styles/Form.module.css'

const Form = ({adminRegion, setAdminRegion, base}) => {
  const [continenteURL, setContinenteURL] = React.useState(null)
  const [paisURL, setPaisURL] = React.useState(null)

  return (
    <form className={styles.form}>
      <Selection option={continenteURL} setOption={setContinenteURL} url={`${base}/continents/`} />
      {continenteURL && <Selection option={paisURL} setOption={setPaisURL} url={`${continenteURL}/countries/`} />}
      {paisURL && <Selection option={adminRegion} setOption={setAdminRegion} url={`${paisURL}/admin1_divisions/`} />}
    </form>
  )
}

export default Form