import React from 'react';

import {Text, TouchableOpacity} from './styled';

import {IWishListButton} from '../../types/interfaces';

import {Colors} from '../../theme/colors';

export const WishListButton = ({
  setIsWishList,
  setIsHome,
  setCategory,
}: IWishListButton) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCategory('');
        setIsWishList(true);
        setIsHome(false);
      }}>
      <Text colorText={Colors.white} backgroundColor={Colors.yellow}>
        Wish List
      </Text>
    </TouchableOpacity>
  );
};
