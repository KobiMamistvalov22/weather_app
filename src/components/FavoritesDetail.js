import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const FavoritesDetail = ({result, deleteBtn}) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.nameAndDescription}>
        <Text style={styles.cityText}>{result.name}</Text>
        <Text style={styles.descriptionText}>{result.description}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.tempText}>{result.temp}</Text>
        <Image style={styles.image} source={{uri: result.icon}} />
      </View>
      <TouchableOpacity onPress={deleteBtn} style={styles.deleteBtn}>
        <Text style={{color: '#ffffff'}}>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nameAndDescription: {
    flex: 1,
    justifyContent: 'center',
  },
  itemStyle: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(127, 127, 127, 0.35)',
    borderRadius: 30,
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  tempText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
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
