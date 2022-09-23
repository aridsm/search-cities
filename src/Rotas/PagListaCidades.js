import React, { useContext } from "react";
import { geoContext } from "../context/geoContext";
import Form from "./ComponentesIndividuais/Form";
import ListaCidades from "./ComponentesIndividuais/ListaCidades";
import Head from "./Utilities/Head";
//
const PagListaCidades = () => {
  const geoCtx = useContext(geoContext);
  return (
    <main>
      <Head title="Cities list" description="Search city from location" />
      <h1>Cities List</h1>
      <Form />
      {geoCtx.citiesList && geoCtx.citiesList._links["city:items"].length ? (
        <ListaCidades listCities={geoCtx.citiesList._links["city:items"]} />
      ) : (
        <p>No matches</p>
      )}
    </main>
  );
};

export default PagListaCidades;
