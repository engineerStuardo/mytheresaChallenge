import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {IBackHomeButtonProps} from '../../types/interfaces';

export const BackHomeButton = ({
  isWishList,
  setIsWishList,
  setIsHome,
}: IBackHomeButtonProps) => {
  return (
    <TouchableOpacity
      style={{padding: 10, marginBottom: 20}}
      onPress={() => {
        if (isWishList) {
          setIsWishList(false);
        }
        setIsHome(true);
      }}>
      <Text style={{fontSize: 15, color: '#343e80'}}>
        {'< '} Back to Home Screen
      </Text>
    </TouchableOpacity>
  );
};
