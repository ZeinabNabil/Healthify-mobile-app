import { createStackNavigator } from "@react-navigation/stack";
import MeditationDetails from "../components/Meditation/MeditationDetails/MeditationDetails";
import routes from "../common/routes";
import Meditation from "../components/Meditation/Meditation";
import LogoTitle from "./LogoTitle";

const Stack = createStackNavigator();

const MeditationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerTitle: () => <LogoTitle />}}
        name={routes.meditation}
        component={Meditation}
      />
      <Stack.Screen
        options={{ headerTitle: () => <LogoTitle /> }}
        name={routes.meditationDetails}
        component={MeditationDetails}
      />
    </Stack.Navigator>
  );
};

export default MeditationNavigation;
