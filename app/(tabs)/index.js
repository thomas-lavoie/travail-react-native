import { View, Text, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import { useAuth } from "../contexts/authContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Image } from "expo-image";
import { Audio } from "expo-av";

const HomePage = () => {
  const { user, accentColor, picture, audio } = useAuth();
  const theme = useTheme();

  async function playRecording() {
    if (!audio) return;

    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audio });
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

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
        <Text style={{ fontSize: 20, color: accentColor }}>
          {user.username}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text>
          {picture ? (
            <Image
              style={{ flex: 1, width: 250, height: 250, borderRadius: 9999 }}
              source={picture.uri}
              contentFit="cover"
            />
          ) : (
            <Image
              style={{ flex: 1, width: 250, height: 250, borderRadius: 9999 }}
              source={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              contentFit="cover"
            />
          )}
        </Text>
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
        <Pressable onPress={playRecording}>
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
