import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import env from 'react-native-config';

import useMovieStore from '../../store/useMovieStore';
import {ParamList, Movie} from '../../types/interfaces';

import {Image} from './styled';

export const ImageItem = ({title, item}: {title: string; item: Movie}) => {
  const {setCategory, setMovieSelected, setDetail} = useMovieStore();

  const navigation = useNavigation<StackNavigationProp<ParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        setCategory(title);
        setMovieSelected(item);
        setDetail(true);
        navigation.navigate('Detail');
      }}>
      <Image
        source={
          item.poster_path
            ? {
                uri: `${env.IMAGE_URL}${item.poster_path}`,
              }
            : require('../../assets/images/placeholder.png')
        }
      />
    </TouchableOpacity>
  );
};
