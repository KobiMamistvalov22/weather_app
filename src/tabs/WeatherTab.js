import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import LinearGradient from 'react-native-linear-gradient';
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

const WeatherTab = ({demoAction}) => {
  const [city, setCityState] = useState('');
  const [favoriteCities] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [value, setValue] = useState('');
  const [time, setTime] = useState('');
  const [cityWeather, setcityWeather] = useState([]);

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
      console.log(res);
      const date = moment().format('llll');
      const idForBackgroundImage = res.list[0].weather[0].id;
      setImage(idForBackgroundImage);
      setTime(date);
      // setCityState(res.city.name);
      const data = {
        name: res.city.name,
        tempHead: Math.floor(res.list[0].main.temp),
        temp1: Math.floor(res.list[1].main.temp),
        temp2: Math.floor(res.list[2].main.temp),
        temp3: Math.floor(res.list[3].main.temp),
        temp4: Math.floor(res.list[4].main.temp),
        temp5: Math.floor(res.list[5].main.temp),
        description: res.list[0].weather[0].description,
        temp_min: Math.floor(res.list[0].main.temp_min),
        temp_max: Math.floor(res.list[0].main.temp_max),
        date_Time1: 3, //res.list[1].dt_txt,
        date_Time2: 6, //res.list[2].dt_txt,
        date_Time3: 9, //res.list[3].dt_txt,
        date_Time4: 12, //res.list[4].dt_txt,
        date_Time5: 15, //res.list[5].dt_txt,
        iconUrlHead: `http://openweathermap.org/img/wn/${
          res.list[0].weather[0].icon
        }@2x.png`,
        iconUrl1: `http://openweathermap.org/img/wn/${
          res.list[1].weather[0].icon
        }@2x.png`,
        iconUrl2: `http://openweathermap.org/img/wn/${
          res.list[2].weather[0].icon
        }@2x.png`,
        iconUrl3: `http://openweathermap.org/img/wn/${
          res.list[3].weather[0].icon
        }@2x.png`,
        iconUrl4: `http://openweathermap.org/img/wn/${
          res.list[4].weather[0].icon
        }@2x.png`,
        iconUrl5: `http://openweathermap.org/img/wn/${
          res.list[5].weather[0].icon
        }@2x.png`,
      };
      setcityWeather(data);
    } catch (e) {
      setcityWeather([]);
      Alert.alert(
        'Your account is temporary blocked due to exceeding of requests limitation of your subscription type',
      );
    }
  };

  const addToFavorites = async () => {
    const cityNamesFromStorage = JSON.parse(
      await AsyncStorage.getItem('favoriteCities'),
    );
    if (cityWeather.name == null) {
      Alert.alert('You not add any city');
      return;
    } else {
      if (cityNamesFromStorage == null) {
        favoriteCities.unshift(cityWeather.name);
        console.log('favoriteCities push', favoriteCities);
        await AsyncStorage.setItem(
          'favoriteCities',
          JSON.stringify(favoriteCities),
        );
      } else {
        cityNamesFromStorage.unshift(cityWeather.name);
        console.log('favoriteCities push', cityNamesFromStorage);
        await AsyncStorage.setItem(
          'favoriteCities',
          JSON.stringify(cityNamesFromStorage),
        );
      }
    }
  };

  return (
    <View>
      <LinearGradient
        colors={['#4982fc', '#ffffff', '#ffffff', '#4982fc']}
        style={{height: '100%'}}>
        <View style={styles.viewStyle}>
          <Text style={styles.text}>Weather</Text>
          <Text style={styles.text}> {time} </Text>
          <SearchBar
            value={value}
            onValueChange={setValue}
            onValueSumbit={() => getWeather(value)}
          />
        </View>

        <WeatherComponent
          city={cityWeather.name}
          description={cityWeather.description}
          temp={cityWeather.tempHead}
          temp1={cityWeather.temp1}
          temp2={cityWeather.temp2}
          temp3={cityWeather.temp3}
          temp4={cityWeather.temp4}
          temp5={cityWeather.temp5}
          minTemp={cityWeather.temp_min}
          maxTemp={cityWeather.temp_max}
          icon={cityWeather.iconUrlHead}
          icon1={cityWeather.iconUrl1}
          icon2={cityWeather.iconUrl2}
          icon3={cityWeather.iconUrl3}
          icon4={cityWeather.iconUrl4}
          icon5={cityWeather.iconUrl5}
          date_Time1={cityWeather.date_Time1}
          date_Time2={cityWeather.date_Time2}
          date_Time3={cityWeather.date_Time3}
          date_Time4={cityWeather.date_Time4}
          date_Time5={cityWeather.date_Time5}
          backgroundImage={backgroundImage}
          addToFavorites={addToFavorites}
        />

        <Button
          title="Test Redux"
          onPress={() => demoAction({demoText: 'asdasdasdad'})}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  viewBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  // const {} = state;

  return {};
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
