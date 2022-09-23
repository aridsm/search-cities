import React, { useContext } from "react";
import styles from "../Styles/ListaCidades.module.css";
import Carregando from "../Utilities/Carregando";
import { Link } from "react-router-dom";
import { geoContext } from "../../context/geoContext";

const ListaCidades = () => {
  const geoCtx = useContext(geoContext);

  return (
    <nav className={styles.nav}>
      {geoCtx.loadingCities ? (
        <Carregando />
      ) : geoCtx.citiesList && geoCtx.citiesList._links["city:items"].length ? (
        geoCtx.citiesList._links["city:items"].map((item) => (
          <Link
            key={item.name}
            to={`${item.href.substring(item.href.indexOf("geonameid:") + 10)}`}
          >
            {item.name}
          </Link>
        ))
      ) : (
        <p>No matches</p>
      )}
    </nav>
  );
};

export default ListaCidades;
