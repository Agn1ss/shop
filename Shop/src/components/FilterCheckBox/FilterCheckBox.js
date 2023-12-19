import React from "react";
import styles from "./FilterCheckBox.module.css";

function FilterCheckBox({ boxName, onToggle, id, isChecked }) {
  return (
    <div className={styles.filterCheckBox}>
      <input
        type="checkbox"
        checked={isChecked}
        id={id}
        onChange={() => onToggle(id)}
      />
      <span className={styles.boxName}>{boxName}</span>
    </div>
  );
}

export default React.memo(FilterCheckBox);
