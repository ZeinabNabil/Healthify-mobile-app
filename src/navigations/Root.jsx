import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home/Home';
import routes from '../common/routes';
import Nutration from '../components/Nutration/Nutration';
import Meditation from '../components/Meditation/Meditation';
import Workouts from '../components/Workouts/Workouts';
import Login from '../components/SignInUp/Login';

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.home} component={Home} />
      <Drawer.Screen name={routes.nutration} component={Nutration} />
      <Drawer.Screen name={routes.meditation} component={Meditation} />
      <Drawer.Screen name={routes.workouts} component={Workouts} />
      <Drawer.Screen name={routes.login} component={Login} />
    </Drawer.Navigator>
  );
}

export default Root