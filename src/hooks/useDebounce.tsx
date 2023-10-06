import { useEffect, useState } from "react";

export const useDebounce = (
  value: string | undefined,
  delay: number,
  callback?: () => void
) => {
  const [debounceValue, setDebounceValue] = useState<string | undefined>(value);

  useEffect(() => {
    const handleTime = setTimeout(() => {
      if (callback) callback();
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handleTime);
  }, [value]);
  return debounceValue;
};
