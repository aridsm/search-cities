import React from "react";
import Form from "./ComponentesIndividuais/Form";
import ListaCidades from "./ComponentesIndividuais/ListaCidades";
import Head from "./Utilities/Head";
//
const PagListaCidades = () => {
  return (
    <main>
      <Head title="Cities list" description="Search city from location" />
      <h1>Cities List</h1>
      <Form />
      <ListaCidades />
    </main>
  );
};

export default PagListaCidades;
