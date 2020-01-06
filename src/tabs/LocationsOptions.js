import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const LocationsOptions = () => {
  return(
    <View style = {styles.viewStyle}>
      <Text style ={{color: 'yellow', fontSize: 25}}>Locations Options!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'blue',
    height: 80
  }
});
export default LocationsOptions;