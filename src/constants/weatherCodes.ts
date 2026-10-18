// src/constants/weatherCodes.ts
const kamusKodeCuaca: Record<number, string> = {
<<<<<<< HEAD
    0: "Cerah",
    1: "Cerah Berawan",
    2: "Berawan Sebagian",
    3: "Mendung",
    45: "Berkabut",
    48: "Kabut Beku",
    51: "Gerimis Ringan",
    53: "Gerimis Sedang",
    55: "Gerimis Lebat",
    61: "Hujan Ringan",
    63: "Hujan Sedang",
    65: "Hujan Lebat",
    71: "Salju Ringan",
    80: "Hujan Lokal Ringan",
    81: "Hujan Lokal Sedang",
    82: "Hujan Lokal Lebat",
    95: "Badai Petir",
};
export function labelKodeCuaca(kode: number): string {
    return kamusKodeCuaca[kode] ?? "Tidak diketahui";
}
=======
  0: "Cerah",
  1: "Cerah Berawan",
  2: "Berawan Sebagian",
  3: "Mendung",
  45: "Berkabut",
  48: "Kabut Beku",
  51: "Gerimis Ringan",
  53: "Gerimis Sedang",
  55: "Gerimis Lebat",
  61: "Hujan Ringan",
  63: "Hujan Sedang",
  65: "Hujan Lebat",
  71: "Salju Ringan",
  80: "Hujan Lokal Ringan",
  81: "Hujan Lokal Sedang",
  82: "Hujan Lokal Lebat",
  95: "Badai Petir",
};

export function labelKodeCuaca(kode: number): string {
  return kamusKodeCuaca[kode] ?? "Tidak diketahui";
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
