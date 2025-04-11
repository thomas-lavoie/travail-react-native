import { Stack } from "expo-router";
import { AuthProvider } from "./contexts/authContext";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const theme = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <StatusBar
          style="dark"
          translucent={false}
          backgroundColor={theme.colors.background}
        />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerTitle: "Connexion" }} />
          <Stack.Screen
            name="forgotPassword"
            options={{ headerTitle: "Mot de passe oublié" }}
          />
          <Stack.Screen name="settings" options={{ headerTitle: "Réglages" }} />
        </Stack>
      </PaperProvider>
    </AuthProvider>
  );
};
export default RootLayout;
