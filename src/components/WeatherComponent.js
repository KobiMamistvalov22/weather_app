import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

//const someIcon = 'http://openweathermap.org/img/wn/10d@2x.png';

const WeatherComponent = ({
  city,
  temp,
  minTemp,
  maxTemp,
  icon,
  description,
  backgroundImage,
  addToFavorites,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundView}>
        <ImageBackground style={styles.backgroundImg} source={backgroundImage}>
          <Text style={styles.cityNameText}> {city} </Text>
          {icon && <Image style={styles.iconImage} source={{uri: icon}} />}

          <View style={styles.tempView}>
            <Text style={styles.tempText}> {temp} </Text>
            <Image
              style={styles.image}
              source={require('../assets/circle.png')}
            />
          </View>

          <Text style={styles.descriptionText}> {description} </Text>

          <View style={styles.minMaxTemp}>
            <View style={styles.minMaxRow}>
              <Text style={styles.minMaxText}>Min: {minTemp} </Text>
              <Image
                style={styles.image}
                source={require('../assets/circle.png')}
              />
            </View>

            <View style={styles.minMaxRow}>
              <Text style={styles.minMaxText}>Max: {maxTemp} </Text>
              <Image
                style={styles.image}
                source={require('../assets/circle.png')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Button title="Add to favorites" onPress={addToFavorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  minMaxTemp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tempView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backgroundView: {
    height: 250,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'space-around',
  },
  minMaxRow: {
    flexDirection: 'row',
  },
  cityNameText: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  minMaxText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  tempText: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 7,
    height: 7,
  },
  iconImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
});

export default WeatherComponent;
