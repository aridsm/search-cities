import React, { memo, useEffect, useRef } from "react";
import Carregando from "../Utilities/Carregando";
import Erro from "../Utilities/Erro";
import InputStyled from "./InputStyled";
import styles from "../Styles/SelectInput.module.css";

const Selection = ({ listItens, label, setValue }) => {
  const refSelect = useRef();

  useEffect(() => {
    setValue(refSelect.current.value);
  }, [setValue, label]);

  const fetchNewItensListHandler = () => {
    setValue(refSelect.current.value);
  };

  return (
    <>
      <div>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
        <InputStyled>
          <select
            id={label}
            ref={refSelect}
            onChange={fetchNewItensListHandler}
          >
            {listItens.length ? (
              listItens.map((item) => (
                <option key={item.name} value={item.href}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="">No matches</option>
            )}
          </select>
        </InputStyled>
      </div>
    </>
  );
};

export default memo(Selection);
