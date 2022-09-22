import React, { useContext } from "react";
import Selection from "./Selection";
import styles from "../Styles/Form.module.css";
import { geoContext } from "../../context/geoContext";

const Form = () => {
  const geoCtx = useContext(geoContext);
  console.log("renderizando de novo");
  return (
    <form className={styles.form}>
      {geoCtx.continentsList && (
        <Selection
          label="Continent"
          listItens={geoCtx.continentsList._links["continent:items"]}
          setValue={geoCtx.setNewContinentValue}
        />
      )}

      {geoCtx.countriesList && (
        <Selection
          label="Country"
          listItens={geoCtx.countriesList._links["country:items"]}
          setValue={geoCtx.setNewCountryValue}
        />
      )}

      {geoCtx.admRegionsList && (
        <Selection
          label="Administrative Region"
          listItens={geoCtx.admRegionsList._links["a1:items"]}
          setValue={geoCtx.setNewAdmRegiontValue}
        />
      )}
    </form>
  );
};

export default Form;
