import { View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { useAuth } from "./contexts/authContext";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

const availableColors = [
  {
    label: "Aqua",
    value: "#00ffff",
  },
  {
    label: "Blue",
    value: "#0000ff",
  },
  {
    label: "Brown",
    value: "#a52a2a",
  },
  {
    label: "Crimson",
    value: "#dc143c",
  },
  {
    label: "Dark Green",
    value: "#006400",
  },
  {
    label: "Orange",
    value: "#ffa500",
  },
  {
    label: "Pink",
    value: "#ffc0cb",
  },
  {
    label: "Royal Blue",
    value: "#4169e1",
  },
  {
    label: "Spring Green",
    value: "#00ff7f",
  },
  {
    label: "Violet",
    value: "#ee82ee",
  },
  {
    label: "Yellow",
    value: "#ffff00",
  },
];

export default function Settings() {
  const { user, accentColor, setAccentColor } = useAuth();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(accentColor);

  const handleChangeColor = (newValue) => {
    setValue(newValue);
    setAccentColor(newValue);
  };

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Text style={{ fontSize: 16 }}>Réglages pour {user.username}</Text>
      <View
        style={{
          backgroundColor: accentColor + "44",
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Text>Couleur d'accent</Text>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={handleChangeColor}
          items={availableColors}
          labelStyle={{
            color: value,
          }}
        />
      </View>
    </View>
  );
}
