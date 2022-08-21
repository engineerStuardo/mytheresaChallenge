import React from 'react';
import {shallow} from 'enzyme';

import {MovieCarousel} from '../src/components/MovieCarousel';
import {mockMoviesData} from '../__mocks__/mockMoviesData';

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
      item: mockMoviesData[0],
    })
    .props.onPress();
  expect(onPressEvent).toHaveBeenCalledTimes(3);
});
