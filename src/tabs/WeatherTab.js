import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import WeatherComponent from '../components/WeatherComponent';
import SearchBar from '../components/SearchBar';
import moment from 'moment';
import 'moment-timezone';

const API_KEY = '2f7af1a5465bd62281a469e954c520d5';

const snow = '../assets/snow.jpg';
const rain = '../assets/rain.jpeg';
const showerRain = '../assets/shower_rain.jpg';
const clearSky = '../assets/clear_sky.png';
const thunderstorm = '../assets/thunderstorm.png';
const clouds = '../assets/clouds.jpeg';
const mist = '../assets/mist.jpeg';

const ShowWeather = ({ navigation }) => {
  const [city, setCityState] = useState('');
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [temp, setTempState] = useState('');
  const [minTemp, setMinState] = useState('');
  const [maxTemp, setMaxState] = useState('');
  const [icon, setIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [value, setValue] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    const getCityAndWeather = async () => {
      const favoriteCitiesFromStorage = JSON.parse(await AsyncStorage.getItem('favoriteCities'));

      if (favoriteCitiesFromStorage && favoriteCitiesFromStorage.length > 0) {
        console.log('favoriteCities', favoriteCitiesFromStorage);
        setFavoriteCities(favoriteCitiesFromStorage);

        getWeather(favoriteCitiesFromStorage[0]);
      }
    };

    getCityAndWeather();
  }, []);

  const setImage = (id) =>{
    switch(true){
      case id >= 200 && id <= 232:
        setBackgroundImage(require(thunderstorm));
        return;
      case id >= 300 && id <= 321:
        setBackgroundImage(require(showerRain));
        return;
      case id >= 500 && id <= 531:
        setBackgroundImage(require(rain));
        return;
      case id >= 600 && id <= 622:
        setBackgroundImage(require(snow));
        return;
      case id >= 701 && id <= 781:
        setBackgroundImage(require(mist));
        return;
      case id == 800 || id == 801:
        setBackgroundImage(require(clearSky));
        return;
      case id >= 802 && id <= 804:
        setBackgroundImage(require(clouds));
        return;
      default:
        return;
    }
  }

  const getWeather = async (cityName) => {
    let reqWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    const api = await fetch(reqWeather);
    const res = await api.json();
    
    const date = moment().format('llll');
    const id = res.list[0].weather[0].id
    setImage(id);
    setTime(date);
    setCityState(res.city.name);
    setDescription(res.list[0].weather[0].description);
    setTempState(Math.floor(res.list[0].main.temp));
    setMinState(Math.floor(res.list[0].main.temp_min));
    setMaxState(Math.floor(res.list[0].main.temp_max));
    const iconUrl = `http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`;
    setIcon(iconUrl);
  };

  // const getDetails = () =>{
  //   const getCity = city;
  //   const getTemp = temp;
  //   return(getCity);
  // };

  const addToFavorites = async () => {

    favoriteCities.unshift(city);
    console.log('favoriteCities push', favoriteCities);
    await AsyncStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
  };

  return(
    <View>
      <View style={styles.viewStyle}>
        <Text style={{ color: 'yellow', fontSize: 25 }}>Show Weather!</Text>
        <Text style={{ color: 'yellow', fontSize: 25 }}> {time} </Text>
      </View>

      <SearchBar 
        value={value}
        onValueChange={setValue}
        onValueSumbit={() => getWeather(value)}
      />

      <WeatherComponent 
        city={city}
        description={description}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        icon={icon}
        backgroundImage={backgroundImage}
        addToFavorites={addToFavorites}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#00F',
    height: 180
  }
});
export default ShowWeather;