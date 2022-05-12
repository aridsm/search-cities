import React from 'react'
import styles from '../Styles/UrbanAreaScore.module.css'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Utilities/Erro'
import Carregando from '../Utilities/Carregando'


const UrbanAreaScore = ({url, name}) => {
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      await request(url + 'scores')
    }
    fetchData()
  }, [request, url])

  if(error) return <Erro />
  if(loading) return <Carregando />
  if(data)
  return (
    <>
    {data.categories.filter(item => item.name === name).map(item =>
      <div className={styles.barscore} key={item.name}>
        <p className={styles.score}>{item.score_out_of_10.toFixed(1)}</p>
        <div className={styles.bar}>
          <span className={styles.txt}>score</span>
          <div className={styles.range} style={{width: item.score_out_of_10 * 10 + '%'}}></div>
        </div>
      </div>
      )}
    </>
  )
}

export default UrbanAreaScore