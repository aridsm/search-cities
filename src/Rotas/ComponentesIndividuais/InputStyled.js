import React from 'react'
import styles from '../Styles/InputStyled.module.css'

const InputStyled = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default InputStyled