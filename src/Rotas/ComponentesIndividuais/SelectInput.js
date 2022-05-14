import React from 'react'
import styles from '../Styles/SelectInput.module.css'

const SelectInput = ({option, setOption, data, type}) => {

  const value = React.useRef()

  React.useEffect(() => {
    setOption(value.current.value);
  }, [setOption])

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <div>
        <label htmlFor={type} className={styles.label}>{type}</label>
        <select value={option} onChange={handleChange} className={styles.select} id={type} ref={value}>
          {data.length ?
          data.map(item => 
          <option key={item.name} value={item.href}>{item.name}</option>
          )
          :
          <option value=''>No matches</option>
          }

        </select>
    </div>
  )
}

export default SelectInput