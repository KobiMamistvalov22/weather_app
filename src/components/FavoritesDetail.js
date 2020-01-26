import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const FavoritesDetail = ({result, deleteBtn}) => {
  return (
    <View>
      <View style={styles.itemStyle}>
        <View style={styles.list}>
          <Text style={styles.cityText}> {result.name} </Text>
          <Text style={styles.descriptionText}> {result.description} </Text>
        </View>
        <View>
          <Text style={styles.tempText}> {result.temp} </Text>
          <Image style={styles.image} source={{uri: result.icon}} />
        </View>
        <TouchableOpacity onPress={deleteBtn} style={styles.deleteBtn}>
          <Text>delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignSelf: 'center',
  },
  viewStyle: {
    marginTop: 10,
    borderTopWidth: 10,
    backgroundColor: '#99FFFF',
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tempText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  seletBtn: {
    alignSelf: 'center',
  },
});

export default FavoritesDetail;
