import React from 'react'
import {ReactComponent as SearchSvg} from '../assets/SearchSvg.svg';
import styles from './Styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>

      </nav>
      <div>
        <p>LifeQuality</p>
      </div>

      <form>
        <label>Procure por uma cidade</label>
        <input type='search' name='search' id='search' placeholder='Ex: Cairo'/>
        <SearchSvg />
      </form>
    </header>
  )
}

export default Header