import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

const SearchBar = ( { value, onValueChange, onValueSumbit } ) => {
  return (
      <View style = {styles.backgroundStyle}>
        <TextInput
          style = {styles.inputStyle}
          placeholder = 'Search'
          value = {value}
          onChangeText = {onValueChange}
          autoCapitalize = 'none'
          autoCorrect = {false}
          clearTextOnFocus = {true}
        />
        <TouchableOpacity onPress = {onValueSumbit}>
          <Image 
          style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', flex: 1}} source = {require('../assets/icon_finder.png')}/>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 15
  },
  inputStyle:{
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;