import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import WeatherComp from '../components/WeatherComponent';
import SearchBar from '../components/SearchBar';

const API_KEY = '2f7af1a5465bd62281a469e954c520d5';


const ShowWeather = () => {

  const [city, setCityState] = useState('')
  const [temp, setTempState] = useState('')
  const [minTemp, setMinState] = useState('')
  const [maxTemp, setMaxState] = useState('')

  const [term, setTerm] = useState('')


  const getWeather = async () => {
    let reqWeather = `http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}&units=metric`
    const api = await fetch(reqWeather);
    const res = await api.json();
    console.log(res);
    setCityState(res.name);
    setTempState(res.main.temp);
    setMinState(res.main.temp_min);
    setMaxState(res.main.temp_max);
  };

  return(
    <View>
      <View style = {styles.viewStyle}>
        <Text style ={{color: 'yellow', fontSize: 25}}>Show Weather!</Text>
      </View>

      <SearchBar 
        term = {term}
        onTermChange = {setTerm}
        onTermSumbit = {() => {
          getWeather();
        }}
        
      />

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