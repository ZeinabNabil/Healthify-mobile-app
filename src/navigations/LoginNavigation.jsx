import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../common/routes";
import Home from "../components/Home/Home";
import Nutration from "../components/Nutration/Nutration";
import MeditationNavigation from "./MeditationNavigation";
import Workouts from "../components/Workouts/Workouts";
import Login from "../components/SignInUp/Login";

const LoginNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.home} component={Home} />
      <Drawer.Screen name={routes.nutration} component={Nutration} />
      <Drawer.Screen
        name={routes.meditation}
        component={MeditationNavigation}
      />
      <Drawer.Screen name={routes.workouts} component={Workouts} />
      <Drawer.Screen name={routes.login} component={Login} />
    </Drawer.Navigator>
  );
};

export default LoginNavigation;
