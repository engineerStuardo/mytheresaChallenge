import {Platform} from 'react-native';
import {Colors} from '../theme/colors';

export const useMovieDescription = (category: string) => {
  const font =
    category === 'Popular Movies'
      ? Platform.OS === 'ios'
        ? 'IndieFlower'
        : 'IndieFlower-Regular'
      : category === 'Upcoming Movies'
      ? Platform.OS === 'ios'
        ? 'ShadowsIntoLight'
        : 'ShadowsIntoLight-Regular'
      : category === 'Family Movies'
      ? 'Lobster-Regular'
      : 'Silkscreen-Regular';

  const colorButton =
    category === 'Popular Movies'
      ? Colors.yellow
      : category === 'Upcoming Movies'
      ? Colors.primary
      : Colors.green;

  const buttonStyle =
    category === 'Popular Movies'
      ? '100px'
      : category === 'Upcoming Movies'
      ? '10px'
      : '0px';

  return {font, colorButton, buttonStyle};
};
