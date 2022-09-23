import React, { useContext } from "react";
import Selection from "./Selection";
import styles from "../Styles/Form.module.css";
import { geoContext } from "../../context/geoContext";
import Carregando from "../Utilities/Carregando";
import Erro from "../Utilities/Erro";

const Form = () => {
  const geoCtx = useContext(geoContext);

  console.log(geoCtx);

  return (
    <form className={styles.form}>
      {geoCtx.continentsList ? (
        <Selection
          label="Continent"
          listItens={geoCtx.continentsList._links["continent:items"]}
          setValue={geoCtx.setNewContinentValue}
        />
      ) : geoCtx.loadingContinents ? (
        <p>carregando</p>
      ) : null}

      {geoCtx.countriesList ? (
        <Selection
          label="Country"
          listItens={geoCtx.countriesList._links["country:items"]}
          setValue={geoCtx.setNewCountryValue}
        />
      ) : geoCtx.loadingCountries ? (
        <p>carregando</p>
      ) : null}
      {geoCtx.admRegionsList ? (
        <Selection
          label="Administrative Region"
          listItens={geoCtx.admRegionsList._links["a1:items"]}
          setValue={geoCtx.setNewAdmRegiontValue}
        />
      ) : geoCtx.loadingAdmRegions ? (
        <p>carregando</p>
      ) : null}
    </form>
  );
};

export default Form;
