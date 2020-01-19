import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, AsyncStorage, Button} from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail';
import moment from 'moment';
import 'moment-timezone';

const API_KEY = '2f7af1a5465bd62281a469e954c520d5';

const LocationsOptions = ( { navigation } ) => {

  const [cities, setCities] = useState([]);
  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const getCityNames = async () => {
      const cityNamesFromStorage = JSON.parse(await AsyncStorage.getItem('favoriteCities'));
      // setCityNames(cityNamesFromStorage);
      // for(let i = 0; i < cityNamesFromStorage.length; i++){
      //   console.log(cityNamesFromStorage[i]);
      //   getWeather(cityNamesFromStorage[i]);
      // }
      const cities = await Promise.all(
        cityNamesFromStorage.map(async cityName => {
          return await getWeather(cityName);
        }),
        //console.log(cityNamesFromStorage)
      );

      setCities(cities);
      
      debugger;
    };

    getCityNames();
  }, []);

  const timeTitle = () => {
    const date = moment().format('llll');
    setTime(date);
  }

  const getWeather = async (cityName) => {
    let reqWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    const api = await fetch(reqWeather);
    const res = await api.json();
  

    const data = {
      name: res.city.name,
      temp: res.list[0].main.temp
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
          //getFromStorage();
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