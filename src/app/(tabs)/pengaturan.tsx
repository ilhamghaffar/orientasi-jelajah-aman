<<<<<<< HEAD
// src/app/(tabs)/pengaturan.tsx
import { useState } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { hapusSemuaCache } from "../../services/cacheRepository";

export default function TabPengaturan() {
  const [pesan, setPesan] = useState<string | null>(null);

  async function hapusDataTersimpan() {
    try {
      await hapusSemuaCache();
      setPesan("Data cuaca tersimpan sudah dihapus.");
    } catch {
      setPesan("Data cuaca tersimpan gagal dihapus.");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Jelajah Aman</Text>
      <Text>Versi 1.0.0</Text>
      <Button title="Hapus Data Cuaca Tersimpan" onPress={hapusDataTersimpan} />
      {pesan && <Text accessibilityLabel={pesan}>{pesan}</Text>}
    </SafeAreaView>
  );
}
=======
// app/(tabs)/pengaturan.tsx
import { View, Text } from "react-native";

export default function TabPengaturan() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Jelajah Aman</Text>
      <Text>Versi 1.0.0</Text>
    </View>
  );
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
