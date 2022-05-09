import React from 'react';
import {ReactComponent as SearchSvg} from '../assets/SearchSvg.svg';
import styles from './Styles/PagInicial.module.css'

const PagInicial = () => {
  return (
    <main className={styles.main}>
      <h1>Por qual <span>cidade</span> você está procurando?</h1>
      <form className={styles.form}>
        <label>Procure por uma cidade</label>
        <input type='search' name='search' id='search' placeholder='Ex: Cairo'/>
        <SearchSvg />
      </form>
    </main>
  )
}

export default PagInicial