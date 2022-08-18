import React from 'react';
import {Text, View} from 'react-native';

export const EmptyWishList = () => {
  return (
    <View
      style={{
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30}}>Empty...</Text>
    </View>
  );
};
