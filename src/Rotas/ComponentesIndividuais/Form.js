import React, { useContext } from "react";
import Selection from "./Selection";
import styles from "../Styles/Form.module.css";
import { geoContext } from "../../context/geoContext";
import Carregando from "../Utilities/Carregando";
import Erro from "../Utilities/Erro";

const Form = () => {
  const geoCtx = useContext(geoContext);

  return (
    <form className={styles.form}>
      {geoCtx.loadingContinents ? (
        <Carregando />
      ) : geoCtx.continentsList ? (
        <Selection
          label="Continent"
          listItens={geoCtx.continentsList._links["continent:items"]}
          setValue={geoCtx.setNewContinentValue}
        />
      ) : null}

      {geoCtx.loadingCountries ? (
        <Carregando />
      ) : geoCtx.countriesList ? (
        <Selection
          label="Country"
          listItens={geoCtx.countriesList._links["country:items"]}
          setValue={geoCtx.setNewCountryValue}
        />
      ) : null}

      {geoCtx.loadingAdmRegions ? (
        <Carregando />
      ) : geoCtx.admRegionsList ? (
        <Selection
          label="Administrative Region"
          listItens={geoCtx.admRegionsList._links["a1:items"]}
          setValue={geoCtx.setNewAdmRegionValue}
        />
      ) : null}
    </form>
  );
};

export default Form;
