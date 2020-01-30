import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

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
            {temp ? (
              <Image
                style={styles.image}
                source={require('../assets/circle.png')}
              />
            ) : null}
          </View>

          <Text style={styles.descriptionText}> {description} </Text>

          <View style={styles.minMaxTemp}>
            <View style={styles.minMaxRow}>
              {minTemp ? (
                <Text style={styles.minMaxText}>Min: {minTemp} </Text>
              ) : null}
              {minTemp ? (
                <Image
                  style={styles.image}
                  source={require('../assets/circle.png')}
                />
              ) : null}
            </View>

            <View style={styles.minMaxRow}>
              {maxTemp ? (
                <Text style={styles.minMaxText}> {`Max: ${maxTemp}`} </Text>
              ) : null}
              {maxTemp ? (
                <Image
                  style={styles.image}
                  source={require('../assets/circle.png')}
                />
              ) : null}
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
    shadowColor: '#4982fc',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.5,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  container: {
    justifyContent: 'space-around',
    padding: 10,
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
