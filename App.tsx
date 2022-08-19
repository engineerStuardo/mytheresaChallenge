import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Header} from './src/components/Header';

import {Navigation} from './src/navigation';
import {useApp} from './src/hooks/useApp';

const App = () => {
  const {navigationProps, headerProps, statusBarStyle} = useApp();

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <SafeAreaView>
        <Header {...headerProps} />
        <Navigation {...navigationProps} />
      </SafeAreaView>
    </>
  );
};

export default App;
