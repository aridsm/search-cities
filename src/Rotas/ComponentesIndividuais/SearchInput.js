import React from "react";
import { ReactComponent as SearchSvg } from "../../assets/SearchSvg.svg";
import { ReactComponent as CloseSvg } from "../../assets/closeSvg.svg";
import styles from "../Styles/SearchInput.module.css";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import useVisibility from "../../Hooks/useVisibility";
import Carregando from "../Utilities/Carregando";
import InputStyled from "./InputStyled";

const ResultsCities = ({ data }) => {
  return (
    <ul className={styles.results}>
      {data._embedded["city:search-results"].map((item) => (
        <li key={item.matching_full_name}>
          <Link
            to={`/cidades/${item._links["city:item"].href.substring(
              item._links["city:item"].href.indexOf("geonameid:") + 10
            )}`}
          >
            {item.matching_full_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SearchInput = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const { data, request, loading } = useFetch();
  const ref = React.useRef();
  const input = React.useRef();
  const { isVisible } = useVisibility(ref);

  const fetchData = async (value) => {
    await request(
      `https://api.teleport.org/api/cities/?search=${value}&limit=10`
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    fetchData(e.target.value);
  };

  const cleanSearchDataHandler = () => {
    setSearchValue("");
    input.current.value = "";
    input.current.focus();
  };

  return (
    <>
      <div ref={ref} className={styles.formContainer}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search for a city</label>
          <InputStyled>
            <input
              ref={input}
              type="search"
              name="search"
              id="search"
              placeholder="e.g., Cairo"
              autoComplete="off"
              onInput={handleChange}
            />
          </InputStyled>
          {!isVisible ? (
            <SearchSvg className={styles.searchSvg} />
          ) : (
            <button
              className={styles.btnClose}
              onClick={cleanSearchDataHandler}
            >
              <CloseSvg />
            </button>
          )}
        </form>
        {data && searchValue.length && isVisible ? (
          <ResultsCities data={data} />
        ) : loading ? (
          <ul className={styles.results}>
            <Carregando />
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchInput;
