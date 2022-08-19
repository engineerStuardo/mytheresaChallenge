import React from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

import {Header} from './src/components/Header';

import {Navigation} from './src/navigation';
import {useApp} from './src/hooks/useApp';

const App = () => {
  const {navigationProps, headerProps} = useApp();

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView>
        <Header {...headerProps} />
        <Navigation {...navigationProps} />
      </SafeAreaView>
    </>
  );
};

export default App;
