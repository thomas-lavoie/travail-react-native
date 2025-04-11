import { CameraView } from "expo-camera";
import { Pressable, View } from "react-native";
import { useAuth } from "../../contexts/authContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRef, useState } from "react";
import Slider from "@react-native-community/slider";
import { Text } from "react-native-paper";

const index = () => {
  const { accentColor, setPicture } = useAuth();

  const [facing, setFacing] = useState("back");
  const [flash, setFlash] = useState(false);
  const [zoom, setZoom] = useState(0);

  const camera = useRef();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 16,
      }}
    >
      <CameraView
        style={{ flex: 1, borderRadius: 16 }}
        facing={facing}
        flash={flash ? "on" : "off"}
        zoom={zoom}
        ref={camera}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "transparent",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: "white",
              borderRadius: 16,
              padding: 16,
            }}
          >
            <Pressable
              onPress={() => {
                if (facing === "front") {
                  setFacing("back");
                } else {
                  setFacing("front");
                }
              }}
            >
              <MaterialIcons
                name="flip-camera-android"
                size={28}
                color={accentColor}
              />
            </Pressable>
            <Pressable onPress={() => setFlash(!flash)}>
              {flash ? (
                <MaterialIcons name="flash-on" size={28} color={accentColor} />
              ) : (
                <MaterialIcons name="flash-off" size={28} color={accentColor} />
              )}
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "transparent",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Pressable
                onPress={async () => {
                  const photo = await camera.current.takePictureAsync();
                  setPicture(photo);
                }}
              >
                <MaterialIcons name="camera" size={28} color={accentColor} />
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Slider
                style={{ width: "100%", height: 20 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={accentColor}
                thumbTintColor={accentColor}
                value={zoom}
                onValueChange={(newValue) => setZoom(newValue)}
              />
            </View>
          </View>
        </View>
      </CameraView>
    </View>
  );
};
export default index;
