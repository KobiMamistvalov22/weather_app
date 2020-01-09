import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import WeatherComp from '../components/WeatherComponent';
import SearchBar from '../components/SearchBar';

const API_KEY = '2f7af1a5465bd62281a469e954c520d5';
const reqWeather = `http://api.openweathermap.org/data/2.5/weather?q=Ashdod&appid=${API_KEY}`

const ShowWeather = () => {

  const [city, setcityState] = useState('')
  const [temp, setTempState] = useState('')
  const [minTemp, setMinState] = useState('')
  const [maxTemp, setMaxState] = useState('')

  const calCelcius = (num) => {
    let cell = Math.floor(num - 273.15);
    return cell;
  }

  const getWeather = async () => {
    const api = await fetch(reqWeather);
    const res = await api.json();
    console.log(res);
    setcityState(res.name);
    setTempState(calCelcius(res.main.temp));
    setMinState(calCelcius(res.main.temp_min));
    setMaxState(calCelcius(res.main.temp_max));
  };

  return(
    <View>
      <View style = {styles.viewStyle}>
        <Text style ={{color: 'yellow', fontSize: 25}}>Show Weather!</Text>
      </View>

      <SearchBar />

      <WeatherComp 
        city = {city}
        temp = {temp}
        minTemp = {minTemp}
        maxTemp = {maxTemp}
      />
      <TouchableOpacity onPress={()=>{getWeather();}}><Text>click me</Text></TouchableOpacity>
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
export default ShowWeather;