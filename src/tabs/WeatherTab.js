import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import AsyncStorage from '@react-native-community/async-storage';
import WeatherComponent from '../components/WeatherComponent';
import SearchBar from '../components/SearchBar';
import {demoAction} from '../actions/WeaterActions';
import moment from 'moment';
import 'moment-timezone';
import {getWeatherFromServer} from '../Utils/utils';

const snow = '../assets/snow.jpg';
const rain = '../assets/rain.jpeg';
const showerRain = '../assets/shower_rain.jpg';
const clearSky = '../assets/clear_sky.png';
const thunderstorm = '../assets/thunderstorm.png';
const clouds = '../assets/clouds.jpeg';
const mist = '../assets/mist.jpeg';

const WeatherTab = ({demoAction, demoText}) => {
  const [city, setCityState] = useState('');
  const [favoriteCities] = useState([]);
  const [temp, setTempState] = useState('');
  const [minTemp, setMinState] = useState('');
  const [maxTemp, setMaxState] = useState('');
  const [icon, setIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [value, setValue] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const setImage = id => {
    switch (true) {
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
      case id === 800 || id === 801:
        setBackgroundImage(require(clearSky));
        return;
      case id >= 802 && id <= 804:
        setBackgroundImage(require(clouds));
        return;
      default:
        return;
    }
  };

  const getWeather = async cityName => {
    try {
      const res = await getWeatherFromServer(cityName);
      const date = moment().format('llll');
      const id = res.list[0].weather[0].id;
      setImage(id);
      setTime(date);
      setCityState(res.city.name);
      setDescription(res.list[0].weather[0].description);
      setTempState(Math.floor(res.list[0].main.temp));
      setMinState(Math.floor(res.list[0].main.temp_min));
      setMaxState(Math.floor(res.list[0].main.temp_max));
      const iconUrl = `http://openweathermap.org/img/wn/${
        res.list[0].weather[0].icon
      }@2x.png`;
      setIcon(iconUrl);
    } catch (e) {
      Alert.alert(
        'Your account is temporary blocked due to exceeding of requests limitation of your subscription type',
      );
    }
  };

  const addToFavorites = async () => {
    favoriteCities.unshift(city);
    console.log('favoriteCities push', favoriteCities);
    await AsyncStorage.setItem(
      'favoriteCities',
      JSON.stringify(favoriteCities),
    );
  };

  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.text}>Show Weather!</Text>
        <Text style={styles.text}> {time} </Text>
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

      <Button title="Text Redux" onPress={() => demoAction()} />
      <Text>{demoText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00F',
    height: 180,
  },
  text: {
    color: 'yellow',
    fontSize: 25,
  },
});

const mapStateToProps = state => {
  const {
    weather: {demoText},
  } = state;

  return {
    demoText,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      demoAction,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherTab);
