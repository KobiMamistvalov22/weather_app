import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const FavoritesDetail = ( { result } ) => {
  return(
    <View style={{marginTop: 10, borderTopWidth: 10}}>
      <View style={styles.itemStyle}>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.cityText}> {result.name} </Text>
          <Text style={styles.descriptionText}> {result.description} </Text>
        </View>
        <View>
          <Text style={styles.tempText}> {result.temp} </Text>
          <Image style={{width: 40, height:40, alignSelf: 'center'}} source = {{uri: result.icon}}/>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text>delet</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    marginTop: 10,
    borderTopWidth: 10,
    backgroundColor: 'blue'
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  tempText: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default FavoritesDetail;