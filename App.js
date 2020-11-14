import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components';
import CryptoContainer from './src/components/CryptoContainer'
import { Provider } from 'react-redux';

import Store from './src/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
