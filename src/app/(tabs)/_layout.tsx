<<<<<<< HEAD
// app/(tabs)/_layout.tsx
=======
// src/app/(tabs)/_layout.tsx
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
<<<<<<< HEAD
      <Tabs.Screen
        name="index"
        options={{ title: "Beranda" }}
      />

      <Tabs.Screen
        name="riwayat"
        options={{ title: "Riwayat" }}
      />

      <Tabs.Screen
        name="pengaturan"
        options={{ title: "Pengaturan" }}
      />

      <Tabs.Screen
        name="tentang"
        options={{ title: "Tentang" }}
      />
    </Tabs>
  );
}
=======
      <Tabs.Screen name="index" options={{ title: "Beranda" }} />
      <Tabs.Screen name="riwayat" options={{ title: "Riwayat" }} />
      <Tabs.Screen name="pengaturan" options={{ title: "Pengaturan" }} />
      <Tabs.Screen name="tentang" options={{ title: "Tentang" }} />
    </Tabs>
  );
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
