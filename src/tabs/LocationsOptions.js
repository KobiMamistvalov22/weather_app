import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import GooglePlaces from '../components/GooglePlaces';

const LocationsOptions = () => {
  return(
    <View>
      <View style = {styles.viewStyle}>
        <Text style ={{color: 'yellow', fontSize: 25}}>Locations Options!</Text>
      </View>
      {/* <GooglePlaces /> */}
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