import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const FavoritesDetail = ({result, deleteBtn}) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.list}>
        <Text style={styles.cityText}>{result.name}</Text>
        <Text style={styles.descriptionText}>{result.description}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.tempText}>{result.temp}</Text>
        <Image style={styles.image} source={{uri: result.icon}} />
      </View>
      <TouchableOpacity onPress={deleteBtn} style={styles.deleteBtn}>
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
  },
  viewStyle: {
    marginTop: 10,
    borderTopWidth: 10,
    backgroundColor: '#99FFFF',
  },
  itemStyle: {
    flexDirection: 'row',
    padding: 20,
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
  },
  deleteBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesDetail;
