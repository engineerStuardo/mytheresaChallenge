import {Platform} from 'react-native';

import {StatusBarStyle} from '../types/interfaces';

export const useApp = () => {
  const statusBarStyle: StatusBarStyle =
    Platform.OS === 'android' ? 'light-content' : 'dark-content';

  return {statusBarStyle};
};
