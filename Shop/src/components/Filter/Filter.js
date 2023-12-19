import React, { useState, useCallback, useEffect } from "react";
import getSelectedNames from "../../utils/functions";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import styles from "./Filter.module.css";

function Filter({ type, name, products, onUniqueProductTypesChange }) {
  const [uniqueProductTypes, setUniqueProductTypes] = useState(() => {
    const uniqueProductTypesSet = new Set(
      products.map((product) => product[type])
    );
    return Array.from(uniqueProductTypesSet).map((productType, index) => ({
      name: productType,
      id: index,
      solved: false
    }));
  });

  const handleCheckboxToggle = useCallback((curId) => {
    setUniqueProductTypes((newTypes) =>
      newTypes.map((type) => {
        return curId === type.id ? { ...type, solved: !type.solved } : type;
      })
    );
  }, []);

  useEffect(() => {
    const uniqueProductTypesName = getSelectedNames(uniqueProductTypes);
    onUniqueProductTypesChange(
      name,
      uniqueProductTypesName.length
        ? (prod) => uniqueProductTypesName.includes(prod[type])
        : null
    );
  }, [uniqueProductTypes]);

  return (
    <div className={styles.filter}>
      <div className={styles.filter_type}>{name}</div>
      <div className={styles.filter_list}>
        {uniqueProductTypes.map((productType) => (
          <FilterCheckBox
            key={productType.name}
            id={productType.id}
            boxName={productType.name}
            isSolved={productType.solved}
            onToggle={handleCheckboxToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Filter);
