<<<<<<< HEAD
import type { GeocodingResponse, HasilGeocoding } from "../types/geocoding";

const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function cariKota(nama: string): Promise<HasilGeocoding[]> {
  const params = new URLSearchParams({
    name: nama,
    count: "5",
    language: "id",
    format: "json",
  });
  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Gagal memuat data (status ${response.status})`);
  }

=======
// src/services/geocodingService.ts
import { GeocodingResponse, HasilGeocoding } from "../types/geocoding";
const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
export async function cariKota(nama: string): Promise<HasilGeocoding[]> {
  const url =
    `${BASE_URL}?name=${encodeURIComponent(nama)}&count=5&language=id&format=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Gagal memuat data (status ${response.status})`);
  }
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
  const data: GeocodingResponse = await response.json();
  return data.results ?? [];
}
