import React from 'react';
import { Text, View, Button, StyleSheet, Image} from 'react-native';

const someIcon = 'http://openweathermap.org/img/wn/10d@2x.png';


const WeatherComponent = ( {city, temp, minTemp, maxTemp} ) => {

  return(
    <View>
      <Text style = {{fontSize: 25, alignSelf: 'center'}}> {city} </Text>
      <Image style={{width: 60, height:60}} source = {{uri: someIcon}}/>
      <Text style = {{fontSize: 25, alignSelf: 'center'}}> {temp} </Text>
      <View style = {styles.minMaxTemp}>
        <Text style = {{fontSize: 15, paddingStart: 70}}>Min: {minTemp} </Text>
        <Text style = {{fontSize: 15, paddingStart: 170}}>Max: {maxTemp} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  minMaxTemp:{
    //marginHorizontal: 10
     flexDirection: 'row'
    // //,alignItems: 'center'
    // ,
    
  }
});

export default WeatherComponent;



//, alignSelf: 'flex-start' , alignSelf: 'flex-end'