import React from 'react';
import {shallow} from 'enzyme';

import {MovieDescription} from '../src/components/MovieDescription';
import {mockMoviesData} from '../__mocks__/mockMoviesData';

test('testing correct image url and correct text for title and description', () => {
  const wrapper = shallow(
    <MovieDescription
      description="Testing description"
      posterPath="/urlImage/1"
      title="Doctor Strange"
    />,
  );

  expect(wrapper.props().children[0].props.children.props.source.uri).toBe(
    'https://image.tmdb.org/t/p/w500/urlImage/1',
  );
  expect(wrapper.props().children[1].props.children[1].props.children).toBe(
    'Doctor Strange',
  );
  expect(wrapper.props().children[1].props.children[2].props.children).toBe(
    'Testing description',
  );
});

test('testing correct image url and correct text for title and description for detail screen with wishlist button', () => {
  const wrapper = shallow(
    <MovieDescription
      description="Testing description"
      posterPath="/urlImage/1"
      title="Doctor Strange"
      detail
    />,
  );

  expect(wrapper.props().children[0].props.children.props.source.uri).toBe(
    'https://image.tmdb.org/t/p/w500/urlImage/1',
  );
  expect(wrapper.props().children[1].props.children[1].props.children).toBe(
    'Doctor Strange',
  );
  expect(wrapper.props().children[1].props.children[2].props.children).toBe(
    'Testing description',
  );
  expect(
    wrapper.props().children[1].props.children[0].props.children.props.children,
  ).toBe('Add to wishlist');
});

test('Testing we call succesfully the onPress button on add to wishlist button', () => {
  const onPressEvent = jest.fn();

  const wrapper = shallow(
    <MovieDescription
      description="Testing description"
      posterPath="/urlImage/1"
      title="Doctor Strange"
      detail
      setWishList={onPressEvent}
      wishList={mockMoviesData}
      movieSelected={mockMoviesData[0]}
    />,
  );

  expect(onPressEvent).not.toHaveBeenCalled();
  wrapper.props().children[1].props.children[0].props.onPress();
  expect(onPressEvent).toHaveBeenCalledTimes(1);
});
