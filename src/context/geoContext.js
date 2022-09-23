import React, { createContext } from "react";
import useGeoFetch from "../Hooks/useGeoFetch";

export const geoContext = createContext();

const GeoContextProvider = ({ children }) => {
  const {
    data: continentsList,
    setNewValue: setNewContinentValue,
    selectedValue: selectedContinent,
    loading: loadingContinents,
  } = useGeoFetch("https://api.teleport.org/api/continents/");

  const {
    data: countriesList,
    setNewValue: setNewCountryValue,
    selectedValue: selectedCountry,
    loading: loadingCountries,
  } = useGeoFetch(selectedContinent + "countries");

  const {
    data: admRegionsList,
    setNewValue: setNewAdmRegiontValue,
    selectedValue: selectedAdmRegion,
    loading: loadingAdmRegions,
  } = useGeoFetch(selectedCountry + "admin1_divisions");

  const { data: citiesList, loading: loadingCities } = useGeoFetch(
    selectedAdmRegion + "cities"
  );

  const values = {
    continentsList,
    countriesList,
    admRegionsList,
    citiesList,
    setNewContinentValue,
    setNewCountryValue,
    setNewAdmRegiontValue,
    loadingContinents,
    loadingCountries,
    loadingAdmRegions,
  };

  return <geoContext.Provider value={values}>{children}</geoContext.Provider>;
};

export default GeoContextProvider;
