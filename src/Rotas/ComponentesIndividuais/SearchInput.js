import React from 'react'
import {ReactComponent as SearchSvg} from '../../assets/SearchSvg.svg';
import styles from '../Styles/SearchInput.module.css'

const SearchInput = () => {
  return (
  <form className={styles.form}>
    <label>Search for a city</label>
    <input type='search' name='search' id='search' placeholder='Ex: Cairo' autoComplete="off"/>
    <SearchSvg />
  </form>
  )
}

export default SearchInput