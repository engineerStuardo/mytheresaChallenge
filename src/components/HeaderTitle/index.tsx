import React from 'react';
import {Text, View} from 'react-native';

import {IHeaderTitleProps} from '../../types/interfaces';

export const HeaderTitle = ({isWishList, isHome}: IHeaderTitleProps) => {
  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Text style={{fontSize: 25}}>
        {isWishList ? 'Wish List' : isHome ? 'Home Screen' : 'Detail Screen'}
      </Text>
    </View>
  );
};
