import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Colors} from '../../theme/colors';
import {View} from './styled';

export const LoadingSpinner = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};
