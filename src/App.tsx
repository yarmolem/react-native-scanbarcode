import React from 'react';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';
import client from './apollo';
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
