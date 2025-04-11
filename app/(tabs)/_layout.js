import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../contexts/authContext";
const TabsLayout = () => {
  const { user, setUser } = useAuth();

  if (!user) return <Redirect href="/login" />;

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Accueil ", title: "Tab Accueil" }}
      />
      <Tabs.Screen
        name="tab_1/index"
        options={{ headerTitle: "Tab 1", title: "Tab 1" }}
      />
      <Tabs.Screen
        name="tab_2/index"
        options={{ headerTitle: "Tab 2", title: "Tab 2" }}
      />
    </Tabs>
  );
};
export default TabsLayout;
