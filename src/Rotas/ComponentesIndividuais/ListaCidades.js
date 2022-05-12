import React from 'react'
import useFetch from '../../Hooks/useFetch'
import styles from '../Styles/ListaCidades.module.css'
import Erro from '../Utilities/Erro'
import Carregando from '../Utilities/Carregando'
import { Link } from 'react-router-dom'

const ListaCidades = ({url}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      await request(url)
      console.log(data)
    }
    fetchData()
  }, [url, request])

  if (error) return <Erro />
  if (loading) return <Carregando />
  if(data)
  return (
    <nav className={styles.nav}>
      {data._links["city:items"].map(item => 
      <Link key={item.name} to={`${item.href.substring(item.href.indexOf('geonameid:') + 10)}`}>{item.name}</Link>
      )}
    </nav>
  )
}

export default ListaCidades