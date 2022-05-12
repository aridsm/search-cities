import React from 'react'
import styles from '../Styles/UrbanAreaDataItem.module.css'
import UrbanAreaScore from './UrbanAreaScore'

const UrbanAreaDataItem = ({item, urbArea}) => {

  const [isButtonPressed, setIsButtonPressed] = React.useState(false)

  const style = {
    active: {
      maxHeight: '100rem'
    },
    inactive: {
      height: 'auto',
      maxHeight:'0'
    }
  }

  return (
    <>
      <article>
        <button className={styles.button} onClick={() => setIsButtonPressed(!isButtonPressed)}>
          <span>{item.label}</span>
          <UrbanAreaScore url={urbArea.href} name={item.label}/>
          <span className={styles.plusminus}>{isButtonPressed ? '-' : '+'}</span>
        </button>
        <ul className={styles.ul} style={isButtonPressed ? style.active : style.inactive}>
          {item.data.map(data => 
            <li key={data.id}>
              <span>{data.label.replaceAll('[','(').replaceAll(']',')')}</span>
              <span>{data.float_value || data.string_value || data.percent_value || data.currency_dollar_value || data.int_value}</span>
            </li>
          )}
        </ul>
      </article>
    </>
  )
}

export default UrbanAreaDataItem