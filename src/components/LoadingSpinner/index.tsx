import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const LoadingSpinner = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={'#343e80'} />
    </View>
  );
};
