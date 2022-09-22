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

  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedAdmRegion, setSelectedAdmRegion] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await requestContinent("https://api.teleport.org/api/continents/");
    }
    fetchData();
  }, [requestContinent]);

  useEffect(() => {
    async function fetchData() {
      await requestCountries(selectedContinent + "countries");
    }
    fetchData();
  }, [requestCountries, selectedContinent]);

  useEffect(() => {
    async function fetchData() {
      await requestAdmRegions(selectedCountry + "admin1_divisions");
    }
    fetchData();
  }, [requestAdmRegions, selectedCountry]);

  useEffect(() => {
    async function fetchData() {
      await requestCities(selectedAdmRegion + "cities");
    }
    fetchData();
  }, [requestCities, selectedAdmRegion]);

  const setNewContinentValue = (value) => {
    setSelectedContinent(value);
  };
  const setNewCountryValue = (value) => {
    setSelectedCountry(value);
  };
  const setNewAdmRegiontValue = (value) => {
    setSelectedAdmRegion(value);
  };

  const values = {
    continentsList,
    countriesList,
    admRegionsList,
    citiesList,
    setNewContinentValue,
    setNewCountryValue,
    setNewAdmRegiontValue,
  };

  return <geoContext.Provider value={values}>{children}</geoContext.Provider>;
};

export default GeoContextProvider;
