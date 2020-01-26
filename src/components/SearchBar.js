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
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    padding: 10,
    borderWidth: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

export default SearchBar;
