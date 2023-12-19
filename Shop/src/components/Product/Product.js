import { COLORS } from "../../utils/data";
import React from "react";
import styles from "./Product.module.css";

function Product({ product }) {
  const {
    name,
    imageUrl,
    id,
    description,
    color,
    category,
    price,
    rating
  } = product;

  return (
    <div className={styles.product}>
      <div className={styles.name}>{name}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.color} style={{ backgroundColor: COLORS[color] }}>
        {color}
      </div>

      <img src={imageUrl} alt="не удалось найти картинку" />

      <div className={styles.description}>{description}</div>
      <div>
        <span>{`${rating}⭐`}</span>
      </div>
      <div className={styles.price}>
        <span>{`Цена: ${price}`}</span>
      </div>
    </div>
  );
}

export default React.memo(Product);
