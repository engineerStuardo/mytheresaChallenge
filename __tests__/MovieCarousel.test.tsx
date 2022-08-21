import React from 'react';
import {shallow} from 'enzyme';

import {MovieCarousel} from '../src/components/MovieCarousel';

const onPressEvent = jest.fn();

const wrapper = shallow(
  <MovieCarousel
    data={[]}
    setCategory={onPressEvent}
    setIsHome={onPressEvent}
    setMovieSelected={onPressEvent}
    title="Upcoming movies"
  />,
);

test('Should render correctly and with the right title and components', () => {
  expect(wrapper.find('Styled(Text)')).toHaveLength(1);
  expect(wrapper.find('FlatList')).toHaveLength(1);
  expect(wrapper.props().children[0].props.children).toBe('Upcoming movies');
});

test('Should have the correct keyExtractor', () => {
  //@ts-ignore
  expect(wrapper.find('FlatList').props().keyExtractor({id: 1})).toEqual('1');
});

test('Testing we hit onPress on renderItem from FlatList', () => {
  expect(onPressEvent).not.toHaveBeenCalled();
  wrapper
    .find('FlatList')
    .props()
    //@ts-ignore
    .renderItem({
      item: {
        adult: false,
        backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
        genre_ids: [28, 878, 53],
        id: 766507,
        //@ts-ignore
        original_language: 'en',
        original_title: 'Prey',
        overview:
          'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
        popularity: 8674.5,
        poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
        //@ts-ignore
        release_date: '2022-08-02',
        title: 'Prey',
        video: false,
        vote_average: 8.1,
        vote_count: 2665,
      },
    })
    .props.onPress();
  expect(onPressEvent).toHaveBeenCalledTimes(3);
});
