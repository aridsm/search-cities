import React from 'react'
import { NavLink } from 'react-router-dom';
import {ReactComponent as SearchSvg} from '../assets/SearchSvg.svg';
import styles from './Styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='cities'>List of cities</NavLink>
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