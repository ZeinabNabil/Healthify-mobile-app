import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../common/routes";
import Home from "../components/Home/Home";
import Nutration from "../components/Nutration/Nutration";
import MeditationNavigation from "./MeditationNavigation";
import Workouts from "../components/Workouts/Workouts";
import Login from "../components/SignInUp/Login";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/SignInUp/Signup";
import LogoTitle from "./LogoTitle";

const LoginNavigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name={routes.home} component={Home} />
    //   <Drawer.Screen name={routes.nutration} component={Nutration} />
    //   <Drawer.Screen
    //     name={routes.meditation}
    //     component={MeditationNavigation}
    //   />
    //   <Drawer.Screen name={routes.workouts} component={Workouts} />
    //   <Drawer.Screen name={routes.login} component={Login} />
    // </Drawer.Navigator>
    <Stack.Navigator>
      <Stack.Screen options={{
                  // headerShown: false,
                  headerTitle: () => <LogoTitle />,
                }} name={routes.login} component={Login}/>
      <Stack.Screen options={{
                  // headerShown: false,
                  headerTitle: () => <LogoTitle />,
                }} name={routes.signup} component={Signup}/>
      {/* <Stack.Screen options={{
                  // headerShown: false,
                  headerTitle: () => <LogoTitle />,
                }} name={routes.profile} component={Profile}/> */}
    </Stack.Navigator>
  );
};

export default LoginNavigation;
