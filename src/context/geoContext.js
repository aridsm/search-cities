import React, { createContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

export const geoContext = createContext();

const GeoContextProvider = ({ children }) => {
  const {
    data: continentsList,
    loading: loadingContinents,
    request: requestContinent,
  } = useFetch();

  const {
    data: countriesList,
    loading: loadingCountries,
    request: requestCountries,
  } = useFetch();

  const {
    data: admRegionsList,
    loading: loadingAdmRegions,
    request: requestAdmRegions,
  } = useFetch();

  const {
    data: citiesList,
    loading: loadingCities,
    request: requestCities,
  } = useFetch();

  useEffect(() => {
    async function fetchData() {
      await requestContinent("https://api.teleport.org/api/continents/");
    }
    fetchData();
  }, [requestContinent]);

  const fetchCountriesHandler = (urlSelected) => {
    async function fetchData() {
      await requestCountries(urlSelected + "countries");
    }
    fetchData();
  };

  const fetchAdmRegionsHandler = (urlSelected) => {
    async function fetchData() {
      await requestAdmRegions(urlSelected + "admin1_divisions");
    }
    fetchData();
  };

  const fetchCitiesHandler = (urlSelected) => {
    async function fetchData() {
      await requestCities(urlSelected + "cities");
    }
    fetchData();
  };

  const values = {
    continentsList,
    countriesList,
    admRegionsList,
    citiesList,
    fetchCountriesHandler,
    fetchAdmRegionsHandler,
    fetchCitiesHandler,
  };

  return <geoContext.Provider value={values}>{children}</geoContext.Provider>;
};

export default GeoContextProvider;
