import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Detail} from '../screens/Detail';
import {WishList} from '../screens/WishList';
import {useNavigationStack} from '../hooks/useNavigationStack';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  const {options} = useNavigationStack();

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={options}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
