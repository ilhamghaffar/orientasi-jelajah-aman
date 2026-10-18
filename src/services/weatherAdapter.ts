// src/services/weatherAdapter.ts
<<<<<<< HEAD
import type { TingkatAQI } from "../types/cuaca";
=======
import { TingkatAQI } from "../types/cuaca";
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f

export function konversiTingkatAQI(indeksEropa: number): TingkatAQI {
  if (indeksEropa <= 20) return "BAIK";
  if (indeksEropa <= 40) return "SEDANG";
  if (indeksEropa <= 60) return "TIDAK_SEHAT";
<<<<<<< HEAD
=======

>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
  return "BERBAHAYA";
}
