import React from 'react'
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoSvg} from '../assets/LogoSvg.svg';
import styles from './Styles/Header.module.css';
import SearchInput from './ComponentesIndividuais/SearchInput'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='cidades'>List of cities</NavLink>
      </nav>
      <div className={styles.logo}>
        <LogoSvg />
        <p>LifeQuality</p>
      </div>
      <SearchInput />
    </header>
  )
}

export default Header