import React from 'react';
import type {StackNavigationProp} from '@react-navigation/stack';

import {Text, TouchableOpacity} from './styled';

import {Colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import useMovieStore from '../../store/useMovieStore';
import {ParamList} from '../../types/interfaces';

export const WishListButton = () => {
  const navigation = useNavigation<StackNavigationProp<ParamList>>();
  const {setDetail, setCategory} = useMovieStore();

  return (
    <TouchableOpacity
      onPress={() => {
        setDetail(false);
        setCategory('');
        navigation.navigate('WishList');
      }}>
      <Text colorText={Colors.white} backgroundColor={Colors.yellow}>
        Wish List
      </Text>
    </TouchableOpacity>
  );
};
