import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WeatherTab from './tabs/WeatherTab';
import FavoritesTab from './tabs/FavoritesTab';

const AppRouter = createBottomTabNavigator({
  Weather: WeatherTab,
  Favorites: FavoritesTab,
});

export default createAppContainer(AppRouter);
