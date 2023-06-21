import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-Bold": require("./assets/Fonts/WorkSans-Bold.ttf"),
    WorkSans: require("./assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  return (
    // <Provider store={store}>
    <Provider store={store}>
      <NavigationContainer>{fontsLoaded && <Root></Root>}</NavigationContainer>
    </Provider>
  );
}
