import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ( { term, onTermChange, onTermSumbit } ) => {
  return (
    <View style = {styles.backgroundStyle}>
      <TextInput
        style = {styles.inputStyle}
        placeholder = 'Search'
        value = {term}
        onChangeText = {onTermChange}
        onEndEditing = {onTermSumbit}
        autoCapitalize = 'none'
        autoCorrect = {false}
      />
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