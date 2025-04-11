import { useState } from "react";
import { Pressable, View } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";
import { useAuth, User } from "./contexts/authContext";
import { Link, router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Login() {
  const auth = useAuth();
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: theme.colors.background,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <MaterialIcons name="school" size={24} color="black" />
        <Text style={{ fontSize: 20 }}>Collège ABC</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 400,
            gap: 10,
            flexDirection: "column",
          }}
        >
          <View>
            <TextInput
              label="Nom *"
              mode="outlined"
              value={username}
              error={!!usernameError | !!error}
              onChangeText={(text) => setUsername(text)}
            />
            {usernameError ? (
              <Text style={{ color: theme.colors.error, marginLeft: 4 }}>
                {usernameError}
              </Text>
            ) : (
              ""
            )}
          </View>
          <View>
            <TextInput
              label="Mot de passe *"
              mode="outlined"
              value={password}
              secureTextEntry
              error={!!passwordError | !!error}
              onChangeText={(text) => setPassword(text)}
            />
            {passwordError ? (
              <Text style={{ color: theme.colors.error, margin: 4 }}>
                {passwordError}
              </Text>
            ) : (
              ""
            )}
          </View>
          {error ? (
            <Text style={{ color: theme.colors.error, margin: 4 }}>
              {error}
            </Text>
          ) : (
            ""
          )}
          <Link
            href="/forgotPassword"
            style={{ textAlign: "right", fontSize: 16, marginVertical: 10 }}
          >
            Mot de passe oublié?
          </Link>
          <Pressable
            style={{
              backgroundColor: theme.colors.primary,
              padding: 16,
              borderRadius: 8,
              alignItems: "center",
            }}
            onPress={() => {
              setUsernameError(username.trim() ? "" : "Requis");
              setPasswordError(password.trim() ? "" : "Requis");

              if (!username.trim() || !password.trim()) {
                return;
              }

              if (username !== "Thomas" || password !== "password") {
                setError("Information invalide");
                return;
              }

              auth.setUser(new User(username, password, "", ""));
              router.replace("/(tabs)");
            }}
            // Pour faciliter le dévelopement
            onLongPress={() => {
              auth.setUser(new User("User random", "Son password", "", ""));
              router.replace("/(tabs)");
            }}
          >
            <Text style={{ color: "white" }}>Se connecter</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: theme.colors.background,
          borderRadius: 8,
        }}
      >
        <Text style={{ textAlign: "center" }}>Thomas Lavoie</Text>
      </View>
    </View>
  );
}
