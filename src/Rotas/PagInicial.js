import React from 'react';
import {ReactComponent as PontosSvg} from '../assets/PontosSvg.svg';
import styles from './Styles/PagInicial.module.css'
import SearchInput from './ComponentesIndividuais/SearchInput';

const PagInicial = () => {
  return (
    <main className={styles.main}>
      <h1>What <span>city</span> are you looking for?</h1>
      <SearchInput />
      <PontosSvg className={styles.svgPontos}/>
    </main>
  )
}

export default PagInicial