import styles from "./PriceFilter.module.css";

import { useInputValue, useDebounceValue } from "../../utils/hooks";
import React, { useEffect } from "react";

function PriceFilter({ onPriceFilterChange }) {
  const [
    inputFromValue,
    setInputFromValue,
    handleChangeFromValue
  ] = useInputValue();
  const [inputToValue, setInputToValue, handleChangeToValue] = useInputValue();
  const debouncedFromValue = useDebounceValue(inputFromValue, 500);
  const debouncedToValue = useDebounceValue(inputToValue, 500);

  useEffect(() => {
    onPriceFilterChange(
      "поиск",
      debouncedFromValue !== "" || debouncedToValue !== ""
        ? (prod) =>
            debouncedFromValue !== "" && debouncedToValue !== ""
              ? prod.price >= debouncedFromValue &&
                prod.price <= debouncedToValue
              : debouncedFromValue !== ""
              ? prod.price >= debouncedFromValue && prod.price <= 10000
              : prod.price >= 0 && prod.price <= debouncedToValue
        : null
    );
  }, [debouncedFromValue, debouncedToValue, onPriceFilterChange]);

  return (
    <div className={styles.priceFilter}>
      <div className={styles.filterName}>Цена</div>
      <div className={styles.priceRange}>
        <input
          className={styles.from_input}
          value={inputFromValue}
          onChange={handleChangeFromValue}
          placeholder="от"
          type="number"
          min="0"
          max="10000"
        />
        <div className={styles.line}></div>
        <input
          className={styles.to_input}
          value={inputToValue}
          onChange={handleChangeToValue}
          type="number"
          placeholder="до"
          min="0"
          max="10000"
        />
      </div>
    </div>
  );
}

export default React.memo(PriceFilter);
