import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../components/Home/Home";
import routes from "../common/routes";
import Nutration from "../components/Nutration/Nutration";
import Workouts from "../components/Workouts/Workouts";
import MeditationNavigation from "./MeditationNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../common/styles";
import { View, Image, Text } from "react-native";
import { useFonts, isLoaded } from "expo-font";
import { useEffect } from "react";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: styles.mainColor,
          fontFamily: styles.fontFamilyBold,
        }}
      >
        Healthify
      </Text>
      <Image
        style={{ width: 23, height: 23, paddingTop: 5, marginLeft: 2 }}
        source={require("../../assets/Images/logo.png")}
      />
    </View>
  );
}

const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingBottom: 8, paddingTop: 5, height: 60 },
      }}
    >
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: () => <LogoTitle />,
          tabBarLabel: "Home",
          // headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "home" : "home-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
          tabBarIconStyle: {
            paddingTop: 3,
          },
        }}
      />
      <Tab.Screen
        name={routes.nutration}
        component={Nutration}
        options={{
          headerTitle: () => <LogoTitle />,
          tabBarLabel: "Nutration",
          // headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "fast-food" : "fast-food-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
          tabBarIconStyle: {
            paddingTop: 3,
          },
        }}
      />
      <Tab.Screen
        name={routes.meditation}
        component={MeditationNavigation}
        options={{
          headerTitle: () => <LogoTitle />,
          tabBarLabel: "Meditation",
          // headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "eye" : "eye-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
          tabBarIconStyle: {
            paddingTop: 3,
          },
        }}
      />
      <Tab.Screen
        name={routes.workouts}
        component={Workouts}
        options={{
          headerTitle: () => <LogoTitle />,
          // headerShown: false,
          tabBarActiveTintColor: styles.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: styles.fontFamilySemiBold,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "body" : "body-outline";
            return <IonIcon name={iconName} size={24} color={color} />;
          },
          tabBarIconStyle: {
            paddingTop: 3,
          },
        }}
      />
      {/* <Tab.Screen
        name={routes.nutration}
        component={Nutration}
        options={{
          tabBarIcon: () => {
            return <IonIcon name="fast-food-outline" size={25} color="blue" />;
          },
        }}
      />
      <Tab.Screen
        name={routes.meditation}
        component={MeditationNavigation}
        options={{
          tabBarIcon: () => {
            return <IonIcon name="eye-outline" size={25} color="blue" />;
          },
        }}
      />
      <Tab.Screen
        name={routes.workouts}
        component={Workouts}
        options={{
          tabBarIcon: () => {
            return <IonIcon name="body-outline" size={25} color="blue" />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Root;
