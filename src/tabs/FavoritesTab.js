import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Alert,
  RefreshControl,
} from 'react-native';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import AsyncStorage from '@react-native-community/async-storage';
import FavoritesDetail from '../components/FavoritesDetail';
import moment from 'moment';
import 'moment-timezone';
import {getWeatherFromServer} from '../Utils/utils';

const FavoritesTab = ({navigation, demoText}) => {
  const [cities, setCities] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = () => {
    setRefreshing(true);
    cities;
    wait(2000).then(() => {
      setRefreshing(false);
      setCities(cities);
      useEffect;
    });
  };

  useEffect(() => {
    const getCityNames = async () => {
      const cityNamesFromStorage = JSON.parse(
        await AsyncStorage.getItem('favoriteCities'),
      );
      const citiesFromStorage = await Promise.all(
        cityNamesFromStorage.map(async cityName => {
          return await getWeather(cityName);
        }),
      );

      setCities(citiesFromStorage);
    };

    getCityNames();
  }, []);

  const timeTitle = () => {
    const date = moment().format('llll');
    return date;
  };

  const getWeather = async cityName => {
    try {
      const res = await getWeatherFromServer(cityName);
      const data = {
        name: res.city.name,
        description: res.list[0].weather[0].description,
        temp: Math.floor(res.list[0].main.temp),
        icon: `http://openweathermap.org/img/wn/${
          res.list[0].weather[0].icon
        }@2x.png`,
      };
      return data;
    } catch (e) {
      setCities([]);
      Alert.alert(
        'Your account is temporary blocked due to exceeding of requests limitation of your subscription type',
      );
    }
  };
  // const deleteItemById = id => {
  //   const filteredData = this.state.data.filter(item => item.id !== id);
  //   this.setState({ data: filteredData });
  // }

  return (
    <View style={styles.viewStyle}>
      <View style={styles.headerStyle}>
        <Text style={styles.text}>Favorites!</Text>
        <Text style={styles.text}> {timeTitle()} </Text>
      </View>

      <Button
        color="#000000"
        title="click me!!!!!!!!!!"
        onPress={() => {
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh()} />;
        }}
      />

      <Text>{demoText}</Text>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <FavoritesDetail result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#99FFFF',
  },
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  text: {
    color: 'black',
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
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesTab);
