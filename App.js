import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import AppRouter from './src/Router';
import storeFactory from './src/store';
const store = storeFactory();

class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
