import styles from "./Search.module.css";
import { useInputValue, useDebounceValue } from "../../utils/hooks";
import React, { useEffect } from "react";

function Search({ onSetName }) {
  const [inputValue, setInputValue, handleChangeValue] = useInputValue("");
  const debouncedValue = useDebounceValue(inputValue, 500);

  useEffect(() => {
    if (debouncedValue.trim() !== "") {
      onSetName("поиск", (product) => {
        const productName = product.name.toLowerCase();
        const productDescription = product.description.toLowerCase();
        const inputValueLower = debouncedValue.toLowerCase();

        return (
          productName.includes(inputValueLower) ||
          productDescription.includes(inputValueLower)
        );
      });
    } else onSetName("поиск", null);
  }, [debouncedValue]);

  return (
    <div className={styles.search}>
      <input
        className={styles.search_input}
        value={inputValue}
        onChange={handleChangeValue}
        type="text"
        placeholder="Искать"
      />
    </div>
  );
}

export default React.memo(Search);
