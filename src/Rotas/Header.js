import React from 'react'
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoSvg} from '../assets/LogoSvg.svg';
import styles from './Styles/Header.module.css';
import SearchInput from './ComponentesIndividuais/SearchInput'
import {ReactComponent as SvgSearch} from '../assets/SearchSvg.svg'
import useVisibility from '../Hooks/useVisibility'

const Header = () => {

  const ref = React.useRef()
  const {isVisible} = useVisibility(ref)

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
     <div ref={ref} className={styles.searchField}>
     {!isVisible &&
      <button className={styles.btnSearch} ariaLabel='abrir barra de pesquisa'>
        <SvgSearch />
      </button>}
     {isVisible && <SearchInput/>}
      </div>
    </header>
  )
}

export default Header