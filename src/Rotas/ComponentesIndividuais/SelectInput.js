import React from 'react'
import styles from '../Styles/SelectInput.module.css'
import InputStyled from './InputStyled'

const SelectInput = ({ option, setOption, data, label }) => {

  const value = React.useRef()

  React.useEffect(() => {
    setOption(value.current.value);
  }, [setOption])

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <div>
      <label htmlFor={label} className={styles.label}>{label}</label>
      <InputStyled>
        <select value={option?.option} onChange={handleChange} id={label} ref={value}>
          {data.length ?
            data.map(item =>
              <option key={item.name} value={item.href}>{item.name}</option>
            )
            :
            <option value=''>No matches</option>
          }
        </select>
      </InputStyled>
    </div>
  )
}

export default SelectInput