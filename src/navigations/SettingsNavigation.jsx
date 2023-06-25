import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notifications from '../components/Settings/Notifications/Notifications';
import BMITest from '../components/Settings/BMITest/BMITest';
import Languages from '../components/Settings/Languages/Languages';
import Help from '../components/Settings/Help/Help';
import routes from '../common/routes';
import styles from "../common/styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import EditProfile from '../components/Settings/EditProfile/EditProfile';
import HelpNavigation from './HelpNavigation';

const Tab = createMaterialTopTabNavigator();

const SettingsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
          headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "create" : "create-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
        }} name={routes.editProfile} component={EditProfile} />
      <Tab.Screen options={{
          headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "notifications" : "notifications-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
        }} name={routes.notifications} component={Notifications} />
      <Tab.Screen options={{
          headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "calculator" : "calculator-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
        }} name={routes.bmiTest} component={BMITest} />
      <Tab.Screen options={{
          headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "language" : "language-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
        }} name={routes.languages} component={Languages} />
      <Tab.Screen options={{
          headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "help-circle" : "help-circle-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
        }} name={routes.helpNavigation} >
          {()=><HelpNavigation />}
        </Tab.Screen>
    </Tab.Navigator>
  );
}

export default SettingsNavigation;