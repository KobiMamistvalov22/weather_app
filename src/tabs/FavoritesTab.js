import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, FlatList, AsyncStorage, Button, RefreshControl} from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail';
import moment from 'moment';
import 'moment-timezone';
import { getWeatherFromServer } from '../Utils/utils';

const FavoritesTab = ( { navigation } ) => {
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
    cities
    wait(2000).then(() => {setRefreshing(false);
      setCities(cities);
      useEffect;
    });
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
  const deleteItemById = id => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }

  return(
    <View style={styles.viewStyle}>
      <View style={styles.headerStyle}>
        <Text style={{color: 'black', fontSize: 25}}>Favorites!</Text>
        <Text style={{ color: 'black', fontSize: 25 }}> {timeTitle()} </Text>
      </View>

      <Button 
        color='#000000'
        title= 'click me!!!!!!!!!!'
        onPress= {() => {
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh()}/>
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
    backgroundColor: '#99FFFF'
  },
  headerStyle:{
    justifyContent: 'center',
    alignItems: "center",
    height: 180
  }
});
export default FavoritesTab;