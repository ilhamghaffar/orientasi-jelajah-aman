<<<<<<< HEAD
=======
// src/types/geocoding.ts
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
export interface HasilGeocoding {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
<<<<<<< HEAD
  admin1?: string;
}

export interface GeocodingResponse {
  results?: HasilGeocoding[];
=======
  admin1?: string; // nama provinsi/wilayah, tidak selalu ada
}
export interface GeocodingResponse {
  results?: HasilGeocoding[]; // opsional -- tidak ada saat pencarian kosong
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
}
