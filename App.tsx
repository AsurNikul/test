import React from 'react';
import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {Provider} from 'react-redux';
import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Home from './src/screens/Home/Main';
import {LogBox, StatusBar} from 'react-native';

const App = () => {
  const queryClient = new QueryClient();

  LogBox.ignoreAllLogs();

  console.log('hello wrolf this is form test branch')

  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <QueryClientProvider client={queryClient}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <Home />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
