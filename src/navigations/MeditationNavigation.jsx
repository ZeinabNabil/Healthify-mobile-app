import { createStackNavigator } from "@react-navigation/stack";
import MeditationDetails from "../components/Meditation/MeditationDetails/MeditationDetails";
import routes from "../common/routes";
import Meditation from "../components/Meditation/Meditation";

const Stack = createStackNavigator();

const MeditationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.meditation}
        component={Meditation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.meditationDetails}
        component={MeditationDetails}
      />
    </Stack.Navigator>
  );
};

export default MeditationNavigation;
