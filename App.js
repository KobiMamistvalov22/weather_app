import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ShowWeather from './src/tabs/ShowWeather'
import LocationsOptions from './src/tabs/LocationsOptions'

const App = createBottomTabNavigator({
  Weather : ShowWeather,
  Favorites: LocationsOptions
});

export default createAppContainer(App);
