import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import WeatherComponent from '../components/WeatherComponent';
import SearchBar from '../components/SearchBar';
import moment from 'moment';
import 'moment-timezone';

const API_KEY = '2f7af1a5465bd62281a469e954c520d5';

const ShowWeather = () => {

  const [city, setCityState] = useState('')
  const [temp, setTempState] = useState('')
  const [minTemp, setMinState] = useState('')
  const [maxTemp, setMaxState] = useState('')
  const [icon, setIcon] = useState(null)
  const [value, setValue] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  
  

  const getWeather = async () => {
    let reqWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric`
    const api = await fetch(reqWeather);
    const res = await api.json();
    console.log(res);
    const date = moment().format('llll');
    //res.city.timezone
    setTime(date);
    setCityState(res.city.name);
    setDescription(res.list[0].weather[0].description);
    setTempState(Math.floor(res.list[0].main.temp));
    setMinState(Math.floor(res.list[0].main.temp_min));
    setMaxState(Math.floor(res.list[0].main.temp_max));
    const iconUrl = `http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`;
    setIcon(iconUrl);
  };

  return(
    <View>
      <View style = {styles.viewStyle}>
        <Text style ={{color: 'yellow', fontSize: 25}}>Show Weather!</Text>
        <Text style ={{color: 'yellow', fontSize: 25}}> {time} </Text>
      </View>

      <SearchBar 
        value = {value}
        onValueChange = {setValue}
        onValueSumbit = {() => {
          getWeather();
        }}
        
      />

      <WeatherComponent 
        city = {city}
        description = {description}
        temp = {temp}
        minTemp = {minTemp}
        maxTemp = {maxTemp}
        icon = {icon}
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