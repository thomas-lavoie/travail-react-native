import { View, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import { useAuth } from "../contexts/authContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

const HomePage = () => {
  const { user, setUser, accentColor } = useAuth();
  const theme = useTheme();

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
        <Text style={{ fontSize: 20 }}>{user.username}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text>Hello world</Text>
      </View>
      <View
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: theme.colors.background,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Pressable onPress={() => console.log("Play audio")}>
          <MaterialIcons name="play-arrow" size={24} color={accentColor} />
        </Pressable>
        <Pressable onPress={() => router.push("/settings")}>
          <MaterialIcons name="settings" size={24} color={accentColor} />
        </Pressable>
      </View>
    </View>
  );
};
export default HomePage;
