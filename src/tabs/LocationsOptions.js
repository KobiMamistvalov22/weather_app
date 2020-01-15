import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail';

const LocationsOptions = ( { navigation } ) => {

  const details = navigation.getParam( details )
  console.log(`${details}`);

  return(
    <View>
      <View style = {styles.viewStyle}>
        <Text style ={{color: 'yellow', fontSize: 25}}>Locations Options!</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator = {false}
        data = {details}
        keyExtractor = {item => item.getCity}
        renderItem = {( { result } ) => {
          return(
            <FavoritesDetail 
              result = { result }
            />
          );
        }}
      />
      
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