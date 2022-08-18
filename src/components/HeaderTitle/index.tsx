import React from 'react';
import {Text, View} from './styled';

import {IHeaderTitleProps} from '../../types/interfaces';

export const HeaderTitle = ({isWishList, isHome}: IHeaderTitleProps) => {
  return (
    <View>
      <Text>
        {isWishList ? 'Wish List' : isHome ? 'Home Screen' : 'Detail Screen'}
      </Text>
    </View>
  );
};
