import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {IWishListButton} from '../../types/interfaces';

export const WishListButton = ({setIsWishList, setIsHome}: IWishListButton) => {
  return (
    <TouchableOpacity
      style={{padding: 10, alignItems: 'center'}}
      onPress={() => {
        setIsWishList(true);
        setIsHome(false);
      }}>
      <Text
        style={{
          fontSize: 15,
          color: 'white',
          backgroundColor: '#ecad00',
          padding: 10,
        }}>
        Wish List
      </Text>
    </TouchableOpacity>
  );
};
