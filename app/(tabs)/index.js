import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";
const HomePage = () => {
  return (
    <View>
      <Text>Page d'Accueil</Text>
      <Link href="/tab_1">Go to tab 1</Link>
      <Pressable onPress={() => router.push("/tab_2")}>
        <Text>Aller au tab 2</Text>
      </Pressable>
    </View>
  );
};
export default HomePage;
