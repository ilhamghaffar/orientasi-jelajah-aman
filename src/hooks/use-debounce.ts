// src/hooks/use-debounce.ts
import { useEffect, useState } from "react";
<<<<<<< HEAD

export function useDebounce<T>(nilai: T, delay: number = 500): T {
    const [nilaiTertunda, setNilaiTertunda] = useState(nilai);

useEffect(() => {
    const timer = setTimeout(() => {
        setNilaiTertunda(nilai);
    }, delay);

    return () => clearTimeout(timer);
    }, [nilai, delay]);

    return nilaiTertunda;
}
=======
export function useDebounce<T>(nilai: T, delay: number = 500): T {
  const [nilaiTertunda, setNilaiTertunda] = useState(nilai);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNilaiTertunda(nilai);
    }, delay);
    return () => clearTimeout(timer);
  }, [nilai, delay]);
  return nilaiTertunda;
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
