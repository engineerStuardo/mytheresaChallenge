import React from 'react';

import {Text, TouchableOpacity} from './styled';
import {Colors} from '../../theme/colors';

import {IBackHomeButtonProps} from '../../types/interfaces';

export const BackHomeButton = ({
  isWishList,
  setIsWishList,
  setIsHome,
}: IBackHomeButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isWishList) {
          setIsWishList(false);
        }
        setIsHome(true);
      }}>
      <Text colorText={Colors.primary}>{'< '} Home Screen</Text>
    </TouchableOpacity>
  );
};
