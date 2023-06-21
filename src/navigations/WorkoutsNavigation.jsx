import { createStackNavigator } from "@react-navigation/stack";
import MeditationDetails from "../components/Meditation/MeditationDetails/MeditationDetails";
import routes from "../common/routes";
import Meditation from "../components/Meditation/Meditation";
import LogoTitle from "./LogoTitle";
import Fitness from "../components/Workouts/Fitness/Fitness";
import Cardio from "../components/Workouts/Cardio/Cardio";
import Workouts from "../components/Workouts/Workouts";
import WorkoutsDetails from "../components/Workouts/WorkoutsDetails/WorkoutsDetails";

const Stack = createStackNavigator();

const WorkoutsNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitle: () => <LogoTitle />}}
          name={routes.workouts}
          component={Workouts}
        />
      <Stack.Screen
        options={{ headerTitle: () => <LogoTitle />}}
        name={routes.fitness}
        component={Fitness}
      />
      <Stack.Screen
        options={{ headerTitle: () => <LogoTitle /> }}
        name={routes.cardio}
        component={Cardio}
      />
      <Stack.Screen
        options={{ headerTitle: () => <LogoTitle /> }}
        name={routes.workoutsDetails}
        component={WorkoutsDetails}
      />
    </Stack.Navigator>
  );
};

export default WorkoutsNavigation;
