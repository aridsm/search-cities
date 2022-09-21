import React from "react";
import styles from "../Styles/ListaCidades.module.css";
import Carregando from "../Utilities/Carregando";
import { Link } from "react-router-dom";

const ListaCidades = ({ listCities }) => {
  console.log(listCities);
  return (
    <nav className={styles.nav}>
      {listCities.map((item) => (
        <Link
          key={item.name}
          to={`${item.href.substring(item.href.indexOf("geonameid:") + 10)}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default ListaCidades;
