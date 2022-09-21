import React, { useContext, useEffect } from "react";
import Selection from "./Selection";
import styles from "../Styles/Form.module.css";
import { geoContext } from "../../context/geoContext";

const Form = () => {
  const geoCtx = useContext(geoContext);

  console.log(geoCtx.admRegionsList);

  return (
    <form className={styles.form}>
      {geoCtx.continentsList && (
        <Selection
          label="Continent"
          listItens={geoCtx.continentsList._links["continent:items"]}
          fetchItens={geoCtx.fetchCountriesHandler}
        />
      )}

      {geoCtx.countriesList && (
        <Selection
          label="Country"
          listItens={geoCtx.countriesList._links["country:items"]}
          fetchItens={geoCtx.fetchAdmRegionsHandler}
        />
      )}

      {geoCtx.admRegionsList && (
        <Selection
          label="Administrative Region"
          listItens={geoCtx.admRegionsList._links["a1:items"]}
          fetchItens={geoCtx.fetchCitiesHandler}
        />
      )}
    </form>
  );
};

export default Form;
