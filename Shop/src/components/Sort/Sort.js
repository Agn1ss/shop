import styles from "./Sort.module.css";
import React from "react";
import { SORT_TYPES } from "../../utils/data";
import SortRadioButton from "../SortRadioButton/SortRadioButton";
import { useCallback, useEffect, useState, useMemo } from "react";

function Sort({ onSortTypeChange }) {
  const [sortType, setSortType] = useState("popular");

  useEffect(() => {
    onSortTypeChange(() => SORT_TYPES[sortType].fn);
  });

  const handleSortClick = useCallback((ev) => {
    setSortType(ev.target.value);
  }, []);

  return (
    <div className={styles.sort}>
      {Object.entries(SORT_TYPES).map(([type, value]) => (
        <SortRadioButton
          key={type}
          name={value.name}
          disabled={sortType === type}
          value={type}
          onSortClick={handleSortClick}
        />
      ))}
    </div>
  );
}

export default React.memo(Sort);
