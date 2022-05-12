import React from 'react'
import useFetch from '../../Hooks/useFetch'
import styles from '../Styles/UrbanAreaDados.module.css'
import Carregando from '../Utilities/Carregando'
import Erro from '../Utilities/Erro'
import UrbanAreaScore from './UrbanAreaScore'


const UrbanAreaDados = ({urbArea}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      await request(urbArea.href + 'details')
    }
    fetchData()
    console.log(data)
  }, [request, urbArea.href])

  if(error) return <Erro />
  if(loading) return <Carregando />
  if(data)
  return (
    <section className={styles.section}>
      <h2>Data of <span>{urbArea.name}</span> urban area</h2>
      {data.categories.map(item => 
        <article key={item.id}>
          <button className={styles.button}>
            <span>{item.label}</span>
            <UrbanAreaScore url={urbArea.href} name={item.label}/>
            <span className={styles.plusminus}>-</span>
          </button>
          <ul className={styles.ul}>
            {item.data.map(data => 
              <li key={data.id}>
                <span>{data.label}</span>
                <span>{data.float_value || data.string_value || data.percent_value || data.currency_dollar_value || data.int_value}</span>
              </li>
            )}
          </ul>
        </article>
      )}
    </section>
  )
}

export default UrbanAreaDados