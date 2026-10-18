// src/app/(tabs)/riwayat.tsx
<<<<<<< HEAD
import { useCallback, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ambilSemuaFavorit, hapusFavorit } from "../../services/favoritStorage";
import type { KotaFavorit } from "../../types/favorit";
=======
import { useState, useCallback } from "react";
import { View, Text, Button, Alert, Platform } from "react-native";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ambilSemuaFavorit, hapusFavorit } from "../../services/favoritStorage";
import { KotaFavorit } from "../../types/favorit";

>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f

export default function TabRiwayat() {
  const [daftarFavorit, setDaftarFavorit] = useState<KotaFavorit[]>([]);

  useFocusEffect(
    useCallback(() => {
<<<<<<< HEAD
      // Mengambil data setiap kali tab ini dibuka/fokus
      ambilSemuaFavorit()
        .then(setDaftarFavorit)
        .catch((error) => console.error("Gagal memuat favorit:", error));
    }, [])
  );

  async function hapusFavoritTersimpan(id: number) {
    try {
      await hapusFavorit(id);
      // Update UI langsung setelah berhasil dihapus dari storage
      setDaftarFavorit((prev) => prev.filter((k) => k.id !== id));
    } catch (error) {
      console.error("Gagal menghapus favorit:", error);
    }
  }

  function konfirmasiHapus(kota: KotaFavorit) {
    const pesan = `Yakin hapus ${kota.nama}?`;

    if (Platform.OS === "web") {
      if (globalThis.confirm(pesan)) {
        void hapusFavoritTersimpan(kota.id);
=======
      ambilSemuaFavorit().then(setDaftarFavorit);
    }, [])
  );

  async function hapus(id: number) {
    await hapusFavorit(id);
    setDaftarFavorit((prev) => prev.filter((k) => k.id !== id));
  }

  // FITUR 1: konfirmasi sebelum menghapus
  function konfirmasiHapus(kota: KotaFavorit) {
    const pesan = `Yakin hapus ${kota.nama}?`;

    // Web: Alert.alert tidak didukung, pakai confirm bawaan browser
    if (Platform.OS === "web") {
      if (window.confirm(pesan)) {
        hapus(kota.id);
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
      }
      return;
    }

<<<<<<< HEAD
    Alert.alert(pesan, undefined, [
=======
    // Android / iOS
    Alert.alert("Konfirmasi", pesan, [
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
      { text: "Batal", style: "cancel" },
      {
        text: "Hapus",
        style: "destructive",
<<<<<<< HEAD
        onPress: () => void hapusFavoritTersimpan(kota.id),
=======
        onPress: () => hapus(kota.id),
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
      },
    ]);
  }

<<<<<<< HEAD
  // Komponen untuk me-render setiap item (baris) pada daftar
  const renderItem = ({ item }: { item: KotaFavorit }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.namaKota}>{item.nama}</Text>
      <Button title="Hapus" color="red" onPress={() => konfirmasiHapus(item)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Kota Favorit</Text>
      <Text style={styles.jumlahFavorit}>Tersimpan {daftarFavorit.length} kota</Text>

      <FlatList
        data={daftarFavorit}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 12 }}
        ListEmptyComponent={
          <Text style={styles.teksKosong}>Belum ada kota favorit</Text>
        }
      />
    </SafeAreaView>
  );
}

// Memisahkan style ke StyleSheet agar lebih rapi dan mudah dibaca
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  jumlahFavorit: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  namaKota: {
    fontSize: 16,
  },
  teksKosong: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    fontStyle: "italic",
  },
});
=======
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Kota Favorit</Text>

      {/* FITUR 2: jumlah favorit */}
      <Text>Tersimpan {daftarFavorit.length} kota</Text>

      {daftarFavorit.length === 0 && <Text>Belum ada kota favorit</Text>}
      {daftarFavorit.map((kota) => (
        <View
          key={kota.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{kota.nama}</Text>
          <Button title="Hapus" onPress={() => konfirmasiHapus(kota)} />
        </View>
      ))}
    </SafeAreaView>
  );
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
