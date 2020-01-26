import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const SearchBar = ({value, onValueChange, onValueSumbit}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={value}
        onChangeText={onValueChange}
        autoCapitalize="none"
        autoCorrect={false}
        clearTextOnFocus={false}
      />
      <TouchableOpacity onPress={onValueSumbit} disabled={value.length === 0}>
        <Image
          style={styles.searchIcon}
          source={require('../assets/icon_finder.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    width: 50,
    height: 50,
  },
});

export default SearchBar;
