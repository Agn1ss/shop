// Фильтр по цене ( range )

import styles from "./App.module.css";
import generateProducts from "../../utils/generate-products";
import { useCallback, useEffect, useState, useMemo } from "react";
import Product from "../Product/Product";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import PriceFilter from "../PriceFilter/PriceFilter";
import Filter from "../Filter/Filter";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const [sortFn, setSortFn] = useState(() => () => 0);

  const handleFilterChange = useCallback((key, fn) => {
    setFilters((filters) => {
      if (fn) {
        return [...filters.filter((x) => x.key !== key), { key, fn }];
      } else {
        return filters.filter((x) => x.key !== key);
      }
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((prod) =>
      filters.every((filter) => filter.fn(prod))
    );
  }, [filters]);

  const sortedProducts = useMemo(() => {
    return filteredProducts.sort(sortFn);
  }, [filteredProducts, sortFn]);

  const renderProducts = useCallback(() => {
    if (sortedProducts.length) {
      return sortedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ));
    }

    return <div className={styles.no_results}>Результатов не найдено...</div>;
  }, [sortedProducts]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const generatedProducts = generateProducts(20);
      setProducts(generatedProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }
  return (
    <div className={styles.app}>
      <div className={styles.menu}>
        <Sort onSortTypeChange={setSortFn} />
        <Search onSetName={handleFilterChange} />
      </div>
      <div className={styles.filters_and_product_box}>
        <div className={styles.filters}>
          <Filter
            name="Цвет"
            type="color"
            products={products}
            onUniqueProductTypesChange={handleFilterChange}
          />
          <Filter
            name="Категория"
            type="category"
            products={products}
            onUniqueProductTypesChange={handleFilterChange}
          />
          <PriceFilter onPriceFilterChange={handleFilterChange} />
        </div>
        <div className={styles.product_list}>{renderProducts()}</div>
      </div>
    </div>
  );
}
