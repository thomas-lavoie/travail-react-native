import { Stack } from "expo-router";
import { AuthProvider } from "./contexts/authContext";
const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerTitle: "Connexion" }} />
        <Stack.Screen
          name="forgotPassword"
          options={{ headerTitle: "Mot de passe oublié" }}
        />
        <Stack.Screen name="settings" options={{ headerTitle: "Réglages" }} />
      </Stack>
    </AuthProvider>
  );
};
export default RootLayout;
