<<<<<<< HEAD
// app/_layout.tsx

=======
// app/_layout.tsx (root layout)
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
<<<<<<< HEAD
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="detail/[kota]"
        options={{ title: "Detail Cuaca" }}
      />

      <Stack.Screen
        name="tambah-favorit"
        options={{
          presentation: "modal",
          title: "Tambah Favorit",
        }}
      />
    </Stack>
  );
}
=======
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detail/[kota]" options={{ title: "Detail Cuaca" }} />
      <Stack.Screen
        name="tambah-favorit"
        options={{ presentation: "modal", title: "Tambah Favorit" }}
      />
    </Stack>
  );
}
>>>>>>> 5fff38cefc0fa94e8da57b320deecdc7452ed64f
