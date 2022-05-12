import React from 'react'
import styles from './Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Projected by <a href='https://github.com/aridsm'> Ariane Morelato</a></div>
      <div>Data from <a href='https://developers.teleport.org/api/'>Teleport API</a></div>
    </footer>
  )
}

export default Footer