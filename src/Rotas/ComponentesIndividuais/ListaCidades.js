import React from 'react'
import useFetch from '../../Hooks/useFetch'
import styles from '../Styles/ListaCidades.module.css'
import Carregando from '../Utilities/Carregando'
import { Link } from 'react-router-dom'

const ListaCidades = ({url}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      await request(url)
    }
    fetchData()
    console.log(data)
  }, [url, request])

  if (error || (data && !data._links["city:items"].length)) return <p>There are no cities in this region/country</p>
  if (loading) return <Carregando />
  if(data)
  return (
    <nav className={styles.nav}>
      {data._links["city:items"].map(item => 
      <Link key={item.name} to={`${item.href.substring(item.href.indexOf('geonameid:') + 10)}`}>
        {item.name}
      </Link>
      )}
    </nav>
  )
}

export default ListaCidades