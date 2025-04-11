import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24 }}>
        Ceci est la page pour réinitialiser votre mot de passe.
      </Text>
    </View>
  );
}
