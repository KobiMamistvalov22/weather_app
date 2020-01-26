import React from 'react';
import {StyleSheet, View, YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {AppRouter} from './src/Router';
import storeFactory from './src/store';

const store = storeFactory();

YellowBox.ignoreWarnings(['componentWill']);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
