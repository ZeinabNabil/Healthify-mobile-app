import { createStackNavigator } from "@react-navigation/stack";
import routes from "../common/routes";
import HelpContent from "../components/Settings/Help/HelpContent";
import Help from "../components/Settings/Help/Help";

const Stack = createStackNavigator();

const HelpNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false}}
        name={routes.help}
        component={Help}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.helpContent}
        component={HelpContent}
      />
    </Stack.Navigator>
  );
};

export default HelpNavigation;
