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
  date_Time1,
  date_Time2,
  date_Time3,
  date_Time4,
  date_Time5,
  temp,
  temp1,
  temp2,
  temp3,
  temp4,
  temp5,
  minTemp,
  maxTemp,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
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

          <View style={styles.rowSpaceAround}>
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
          <View style={styles.rowSpaceAround}>
            <View style={styles.displayInThreeHourJumps}>
              <Text style={styles.dateText}> {date_Time1} </Text>
              {icon1 && (
                <Image style={styles.iconDownImage} source={{uri: icon1}} />
              )}
              <Text style={styles.tempDownText}> {temp1} </Text>
            </View>
            <View style={styles.displayInThreeHourJumps}>
              <Text style={styles.dateText}> {date_Time2} </Text>
              {icon2 && (
                <Image style={styles.iconDownImage} source={{uri: icon2}} />
              )}
              <Text style={styles.tempDownText}> {temp2} </Text>
            </View>
            <View style={styles.displayInThreeHourJumps}>
              <Text style={styles.dateText}> {date_Time3} </Text>
              {icon3 && (
                <Image style={styles.iconDownImage} source={{uri: icon3}} />
              )}
              <Text style={styles.tempDownText}> {temp3} </Text>
            </View>
            <View style={styles.displayInThreeHourJumps}>
              <Text style={styles.dateText}> {date_Time4} </Text>
              {icon4 && (
                <Image style={styles.iconDownImage} source={{uri: icon4}} />
              )}
              <Text style={styles.tempDownText}> {temp4} </Text>
            </View>
            <View style={styles.displayInThreeHourJumps}>
              <Text style={styles.dateText}> {date_Time5} </Text>
              {icon5 && (
                <Image style={styles.iconDownImage} source={{uri: icon5}} />
              )}
              <Text style={styles.tempDownText}> {temp5} </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Button title="Add to favorites" onPress={addToFavorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  tempView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backgroundView: {
    height: 300,
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
  dateText: {
    fontSize: 15,
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
  tempDownText: {
    fontSize: 15,
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
  iconDownImage: {
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  displayInThreeHourJumps: {
    // alignSelf: 'center',
    // flex: 1,
    // justifyContent: 'center',
  },
});

export default WeatherComponent;
