import { useCallback, useEffect, useState } from "react";

export function useInputValue(defValue = "") {
  const [input, setInput] = useState(defValue);
  const handler = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return [input, setInput, handler];
}

export function useDebounceValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
