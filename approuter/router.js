import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const RouterApp = createAppContainer(
  createStackNavigator({
    HomeScreen: {screen: HomeScreen},
  }),
);

export default RouterApp;
