import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../contexts/authContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsLayout = () => {
  const { user, setUser, accentColor, setAccentColor } = useAuth();

  if (!user) return <Redirect href="/login" />;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: accentColor }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Profil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab_1/index"
        options={{
          headerShown: false,
          title: "Caméra",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="camera-alt" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab_2/index"
        options={{
          headerShown: false,
          title: "Audio",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="mic" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
