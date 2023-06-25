import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";
import Login from "./src/components/SignInUp/Login";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginNavigation from "./src/navigations/LoginNavigation";
import LogoTitle from "./src/navigations/LogoTitle";
import routes from "./src/common/routes";
import SettingsNavigation from "./src/navigations/SettingsNavigation";
import AuthProvider, { useAuth } from "./src/Context/AuthContext";
import CustomDrawer from "./src/components/CustomDrawer";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "./src/common/styles";
import DrawerNavigation from "./src/navigations/DrawerNavigation";
import Healthify from "./Healthify";

export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-Bold": require("./assets/Fonts/WorkSans-Bold.ttf"),
    WorkSans: require("./assets/Fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/Fonts/WorkSans-SemiBold.ttf"),
  });

  const Drawer = createDrawerNavigator();

  return (
    // <Provider store={store}>
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          {
            fontsLoaded && <Healthify />
            // <Root></Root>
          }
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}
