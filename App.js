/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './src/navigator/AppStack';
import {Provider} from 'react-redux';
import store from './src/store';

const App= () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} barStyle='dark-content'/>
      <AppStack/>
    </Provider>
  );
};

export default App;
