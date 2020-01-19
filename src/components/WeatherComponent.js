import React from 'react';
import { Text, View, Button, StyleSheet, Image, ImageBackground} from 'react-native';

//const someIcon = 'http://openweathermap.org/img/wn/10d@2x.png';


const WeatherComponent = ( {city, temp, minTemp, maxTemp, icon, description, backgroundImage, addToFavorites} ) => {

  return(
    <View style = {styles.container}>
      <View style = {{height: 250}}>
        <ImageBackground style = {{width: '100%', height: '100%'}} source = {backgroundImage}>
          <Text style = {{fontSize: 25, alignSelf: 'center', fontWeight: 'bold'}}> {city} </Text>
          {icon && <Image style={{width: 60, height:60, alignSelf: 'center'}} source = {{uri: icon}}/>}

          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style = {{fontSize: 25, alignSelf: 'center', fontWeight: 'bold'}}> {temp} </Text>
            <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/>
          </View>

          <Text style = {{fontSize: 20, alignSelf: 'center', fontWeight: 'bold'}}> {description} </Text>

          <View style = {styles.minMaxTemp}>
            
            <View style={{ flexDirection: 'row' }}>
              <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Min: {minTemp} </Text>
              <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Max: {maxTemp} </Text>
              <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/>
            </View>

          </View>
          </ImageBackground>
        </View>
        <Button
          title = 'Add to favorites'
          onPress = {addToFavorites}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  minMaxTemp:{
     flexDirection: 'row',
     justifyContent: 'space-around'
  },
  container: {
    justifyContent: 'space-around'
  }
});

export default WeatherComponent;