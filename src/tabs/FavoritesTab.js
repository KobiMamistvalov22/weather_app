import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, AsyncStorage, Button, RefreshControl} from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail';
import moment from 'moment';
import 'moment-timezone';
import { getWeatherFromServer } from '../Utils/utils';

const LocationsOptions = ( { navigation } ) => {
  const [cities, setCities] = useState([]);
  const [time, setTime] = useState('');
  const API_KEY = '2f7af1a5465bd62281a469e954c520d5';
  const [refreshing, setRefreshing] = useState(false);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    useEffect;
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  useEffect(() => {
    const getCityNames = async () => {
      const cityNamesFromStorage = JSON.parse(await AsyncStorage.getItem('favoriteCities'));
      const cities = await Promise.all(
        cityNamesFromStorage.map(async cityName => {
          return await getWeather(cityName);
        }),
      );

      setCities(cities);
    };

    getCityNames();
  }, []);

  const timeTitle = () => {
    const date = moment().format('llll');
    return date;
  }

  const getWeather = async (cityName) => {
    //const res = getWeatherFromServer(cityName);

    let reqWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    const api = await fetch(reqWeather);
    const res = await api.json();

    const data = {
      name: res.city.name,
      description: res.list[0].weather[0].description,
      temp: Math.floor(res.list[0].main.temp),
      icon:`http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`
    }

    return data;

  };

  return(
    <View style={styles.viewStyle}>
      <View style={styles.headerStyle}>
        <Text style={{color: 'yellow', fontSize: 25}}>Locations Options!</Text>
        <Text style={{ color: 'yellow', fontSize: 25 }}> {timeTitle()} </Text>
      </View>

      <Button 
        title= 'click me!!!!!!!!!!'
        onPress= {() => {
          //setTime(timeTitle);
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh()}/>
          //useEffect;
          //setCities(cities);
        }}
      />

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return(
            <FavoritesDetail 
              result = { item }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    backgroundColor: 'blue'
  },
  headerStyle:{
    justifyContent: 'center',
    alignItems: "center",
    height: 180
  }
});
export default LocationsOptions;