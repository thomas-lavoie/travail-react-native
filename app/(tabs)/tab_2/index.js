import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { useAuth } from "../../contexts/authContext";
import { Text } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Audio } from "expo-av";

const index = () => {
  const { accentColor, audio, setAudio } = useAuth();

  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const [recording, setRecording] = useState(undefined);

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
    } catch (error) {
      console.error(error);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setAudio(uri);
  }

  async function playRecording() {
    if (!audio) return;

    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audio });
      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  }

  function deleteRecording() {
    setAudio(null);
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <Pressable
        style={{
          backgroundColor: recording ? "red" : accentColor,
          padding: 16,
          borderRadius: 8,
        }}
        onPress={() => {
          recording ? stopRecording() : startRecording();
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {recording ? "Arreter" : "Commencer"} l'enregistrement
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Pressable onPress={playRecording}>
          <MaterialIcons name="volume-up" size={28} color={accentColor} />
        </Pressable>
        <Pressable onPress={deleteRecording}>
          <MaterialIcons name="delete-forever" size={28} color="red" />
        </Pressable>
      </View>
      <Text>Uri: {audio}</Text>
    </View>
  );
};
export default index;
