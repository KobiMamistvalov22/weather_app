import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WeatherTab from './src/tabs/WeatherTab'
import FavoritesTab from './src/tabs/FavoritesTab'

const App = createBottomTabNavigator({
  Weather : WeatherTab,
  Favorites: FavoritesTab
});

export default createAppContainer(App);
