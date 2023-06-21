import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-Bold": require("./assets/Fonts/WorkSans-Bold.ttf"),
    WorkSans: require("./assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  return (
    <NavigationContainer>{fontsLoaded && <Root></Root>}</NavigationContainer>
  );
}
