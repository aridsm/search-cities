import React, { memo, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Carregando from '../Utilities/Carregando'
import Erro from '../Utilities/Erro'
import InputStyled from './InputStyled'
import styles from '../Styles/SelectInput.module.css'

const Selection = ({ link, setLink, url, geoType, label }) => {

  const { data, error, loading, request } = useFetch();
  
  useEffect(() => {
    
    async function fetchData() {
      await request(url)
    }
    fetchData()
  }, [request, url]);

  let dataItems;

  if (data) {
    dataItems = data._links[geoType];
  }

  useEffect(() => {
    if (dataItems && dataItems.length){
      setLink(dataItems[0].href)
    }
  }, [dataItems, setLink])

  const handleChangeURL = (target) => {
    setLink(target.value)
  }
  if (error) return <Erro/>
  if (loading) return <Carregando/>
  if (dataItems && link)
  return (
    <>
    <div>
    <label htmlFor={label} className={styles.label}>{label}</label>
    <InputStyled>
    <select value={link} onChange={({target}) => handleChangeURL(target)} id={label}>
        {dataItems.length ?
          dataItems.map(item =>
            <option key={item.name} value={item.href}>{item.name}</option>
          )
          :
          <option value=''>No matches</option>
        }
      </select>
    </InputStyled>
  </div> 
    </>
  )
}

export default memo(Selection)