import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, AsyncStorage, Button} from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail';
import moment from 'moment';
import 'moment-timezone';
import { getWeatherFromServer } from '../Utils/utils';

const LocationsOptions = ( { navigation } ) => {
  const [cities, setCities] = useState([]);
  const [time, setTime] = useState('');

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
    setTime(date);
  }

  const getWeather = async (cityName) => {
    const res = getWeatherFromServer(cityName);

    const data = {
      name: res.city.name,
      temp: Math.floor(res.list[0].main.temp)
    }

    return data;

  };

  return(
    <View>
      <View style={styles.viewStyle}>
        <Text style={{color: 'yellow', fontSize: 25}}>Locations Options!</Text>
        <Text style={{ color: 'yellow', fontSize: 25 }}> {time} </Text>
      </View>

      <Button 
        title= 'click me!!!!!!!!!!'
        onPress= {() => {
          timeTitle();
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return(
            // <FavoritesDetail 
            //   result = { item.name, item.temp  }
            // />
            <View>
              <Text style={styles.cityText}> {item.name} </Text>
              <Text style={styles.tempText}> {item.temp} </Text>
            </View>
          );
        }}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'blue',
    height: 180
  }
});
export default LocationsOptions;