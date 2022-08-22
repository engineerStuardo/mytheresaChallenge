import React from 'react';
import {Text, View} from './styled';

import {useRoute} from '@react-navigation/native';

export const HeaderTitle = () => {
  const route = useRoute();

  return (
    <View>
      <Text>{`${route.name} Screen`}</Text>
    </View>
  );
};
