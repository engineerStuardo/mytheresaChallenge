import React from 'react';
import {Text, View} from './styled';

export const TextMessage = ({text}: {text: string}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
