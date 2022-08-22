import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainNavigator} from './src/navigation';

import {useApp} from './src/hooks/useApp';

const App = () => {
  const {statusBarStyle} = useApp();

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={statusBarStyle} />
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
