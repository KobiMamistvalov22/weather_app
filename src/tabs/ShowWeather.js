import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const ShowWeather = () => {
  return(
    <View style = {styles.viewStyle}>
      <Text style ={{color: 'yellow', fontSize: 25}}>Show Weather!</Text>
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