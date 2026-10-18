<<<<<<< HEAD
﻿export interface DataCuaca {
  kota: string;
  suhu: number;
  kelembapan: number;
  catatan?: string;
}

export type TingkatAQI = "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
  indeksAQI?: number;
  kondisiCuaca: string;
  kecepatanAngin: number;
=======
export interface DataCuaca {
    kota: string;
    suhu: number;
    kelembapan: number;
    catatan?: string;
}
export type TingkatAQI = "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";
export interface WeatherCardProps {
    kota: string;
    suhu: number;
    tingkatAQI: TingkatAQI;
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
}

export interface LaporanUdara {
  kota: string;
  indeksAQI: number;
  tingkat: TingkatAQI;
  diperbaruiPada?: string;
}
<<<<<<< HEAD
=======

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
}

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
  indeksAQI?: number; // baru: angka asli dari API, opsional
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
