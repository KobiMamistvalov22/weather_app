import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const FavoritesDetail = ( { result } ) => {
  return(
    <View style = {{marginTop: 10, borderTopWidth: 10}}>
      <View style = {styles.itemStyle}>
        <Text style = {styles.cityText}> {result.getCity} </Text>
        <Text style = {styles.tempText}> {result.getTemp} </Text>
      </View>
      <TouchableOpacity>
        <Text>delet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  tempText: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default FavoritesDetail;