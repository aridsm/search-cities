import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import styles from '../Rotas/Styles/PagCidades.module.css'
import {ReactComponent as PontosSvg} from '../assets/PontosSvg.svg'
import {ReactComponent as PersonSvg} from '../assets/personSvg.svg'
import UrbanAreaDados from './ComponentesIndividuais/UrbanAreaDados'

const PagCidades = () => {

  const param = useParams()
  const {data, error, loading, request} = useFetch()
  const base = 'https://api.teleport.org/api/'

  React.useEffect(() => {
    async function fetchData() {
      await request(base + 'cities/geonameid:' + param.id)
    }
    fetchData()
    console.log(data)
  }, [param, request])

  if(data)
  return (
    <main>
      <h1 className={styles.titulo}>{data.name}</h1>
      <p className={styles.division}><span>Division</span>: {data._links["city:admin1_division"].name}</p>
      <p className={styles.country}><span>Country</span>: {data._links["city:country"].name}</p>
      <p className={styles.pop}><PersonSvg className={styles.personSvg} />Population: <span>{data.population}</span></p>
      {
      data._links["city:urban_area"]
      ?
      <>
      <p className={styles.belongs}>Belong to <span>{data._links["city:urban_area"].name}</span> urban area</p>
      <UrbanAreaDados />
      </>
      : "This city doesn't belong to any urban area"
      }
      <PontosSvg className={styles.pontosSvg}/>
    </main>
  )
}

export default PagCidades