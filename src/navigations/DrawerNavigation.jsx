import Root from "../navigations/Root";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginNavigation from "../navigations/LoginNavigation";
import LogoTitle from "../navigations/LogoTitle";
import routes from "../common/routes";
import SettingsNavigation from "../navigations/SettingsNavigation";
import { useAuth } from "../Context/AuthContext";
import CustomDrawer from "../components/CustomDrawer";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../common/styles";

const DrawerNavigation = () => {
    const { currentUser } = useAuth();
const Drawer = createDrawerNavigator();
    return ( 
        <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                  drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: styles.fontFamilyReg,
                    fontSize: 15,
                  },
                  drawerActiveBackgroundColor: styles.mainColor,
                  drawerActiveTintColor: "#fff",
                  drawerInactiveTintColor: "#333",
                }}
              >
                <Drawer.Screen
                  options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                      <IonIcon name="home-outline" size={22} color={color} />
                    ),
                  }}
                  name={routes.homeBottomTab}
                  component={Root}
                />
                {!currentUser?<Drawer.Screen
                  options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                      <IonIcon name="log-in-outline" size={22} color={color} />
                    ),
                    // headerTitle: () => <LogoTitle />,
                  }}
                  name={routes.loginDrawer}
                  component={LoginNavigation}
                /> : <Drawer.Screen
                options={{
                  // headerShown: false,
                  drawerIcon: ({ color }) => (
                    <IonIcon
                      name="settings-outline"
                      size={22}
                      color={color}
                    />
                  ),
                  headerTitle: () => <LogoTitle />,
                }}
                name={routes.settings}
                component={SettingsNavigation}
              />} 
              </Drawer.Navigator>
     );
}
 
export default DrawerNavigation;