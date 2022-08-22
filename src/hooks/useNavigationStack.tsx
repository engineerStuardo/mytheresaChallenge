import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';
import {Header} from '../components/Header';
import {Colors} from '../theme/colors';

export const useNavigationStack = () => {
  const options: StackNavigationOptions = {
    headerMode: 'screen',
    headerStyle: {
      height: Platform.OS === 'ios' ? 110 : 70,
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.yellow,
    headerTitle: () => <Header />,
  };

  return {options};
};
