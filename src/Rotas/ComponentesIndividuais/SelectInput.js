import React from 'react'
import styles from '../Styles/SelectInput.module.css'

const SelectInput = ({option, setOption, data, type}) => {

  function handleChange(e){
    setOption(e.target.value);
  }

  return (
    <div>
        <label htmlFor={type} className={styles.label}>{type}</label>
        <select value={option} onChange={handleChange} className={styles.select} id={type}>
          {
          data.map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
          )
          } 
        </select>
    </div>
  )
}

export default SelectInput