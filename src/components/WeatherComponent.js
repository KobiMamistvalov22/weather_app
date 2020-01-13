import React from 'react';
import { Text, View, Button, StyleSheet, Image} from 'react-native';

//const someIcon = 'http://openweathermap.org/img/wn/10d@2x.png';


const WeatherComponent = ( {city, temp, minTemp, maxTemp, icon, description, add} ) => {

  return(
    <View>
      <Text style = {{fontSize: 25, alignSelf: 'center'}}> {city} </Text>
      {icon && <Image style={{width: 60, height:60, alignSelf: 'center'}} source = {{uri: icon}}/>}
      <Text style = {{fontSize: 25, alignSelf: 'center'}}> {temp} </Text>
      {/* <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/> */}
      <Text style = {{fontSize: 20, alignSelf: 'center'}}> {description} </Text>
      <View style = {styles.minMaxTemp}>
        <View style={{ flexDirection: 'row' }}>
          <Text style = {{fontSize: 15}}>Min: {minTemp} </Text>
          <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style = {{fontSize: 15}}>Max: {maxTemp} </Text>
          <Image style={{width: 7, height:7}} source = {require('../assets/circle.png')}/>
        </View>
      </View>
      {/* <Button
        title = 'Add to favorites'
        onPress = {add}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  minMaxTemp:{
     flexDirection: 'row',
     justifyContent: 'space-around'
  }
});

export default WeatherComponent;