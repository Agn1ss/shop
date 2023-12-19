import React from "react";
import styles from "./SortRadioButton.module.css";

function SortRadioButton({ name, onSortClick, value, disabled }) {
  return (
    <button
      className={styles.sortRadioButton}
      disabled={disabled}
      onClick={onSortClick}
      value={value}
    >
      {name}
    </button>
  );
}

export default React.memo(SortRadioButton);
