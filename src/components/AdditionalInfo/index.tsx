import React from 'react';
import {Text, View} from 'react-native';

import {IAdditionalInfoProps} from '../../types/interfaces';

export const AdditionalInfo = ({language, date}: IAdditionalInfoProps) => {
  return (
    <View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>Additional Information</Text>
      <Text>Language: {language}</Text>
      <Text>Release date: {date.toString()}</Text>
    </View>
  );
};
