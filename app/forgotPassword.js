import { View } from "react-native";
import { Chip, Text } from "react-native-paper";

export default function ForgotPassword() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24 }}>
        Ceci est la page pour réinitialiser votre mot de passe.
      </Text>
      <Chip>
        <Text style={{ fontSize: 16 }}>Username: Thomas</Text>
      </Chip>
      <Chip>
        <Text style={{ fontSize: 16 }}>Password: password</Text>
      </Chip>
    </View>
  );
}
