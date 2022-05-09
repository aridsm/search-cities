import React from 'react'
import styles from './Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Projeto feito por <a href='/'> Ariane Morelato</a></div>
      <div>Dados de: <a href='/'>Teleport API</a></div>
    </footer>
  )
}

export default Footer