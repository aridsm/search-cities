import React from 'react'
import Selection from './Selection'
import styles from '../Styles/Form.module.css'

const Form = ({ adminRegion, setAdminRegion, base }) => {

  const [continenteURL, setContinenteURL] = React.useState(null)
  const [paisURL, setPaisURL] = React.useState(null)

  return (
    <form className={styles.form}>
      <Selection link={continenteURL} setLink={setContinenteURL} url={`${base}/continents/`} geoType='continent:items' label='continent' />
      {continenteURL && <Selection link={paisURL} setLink={setPaisURL} url={`${continenteURL}countries/`} geoType='country:items' label='countries' />}
      {paisURL && <Selection link={adminRegion} setLink={setAdminRegion} url={`${paisURL}admin1_divisions/`} geoType='a1:items' label='administrative region' />}
    </form>
  )
}

export default Form