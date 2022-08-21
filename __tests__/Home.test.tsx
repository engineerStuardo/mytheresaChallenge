import React from 'react';
import {shallow} from 'enzyme';

import {Home} from '../src/screens/Home';

const setCategory = jest.fn();
const setIsHome = jest.fn();
const setMovieSelected = jest.fn();
const familyMovies: [] = [];
const popularMovies: [] = [];
const upcomingMovies: [] = [];

const commonProps = {
  setCategory,
  setIsHome,
  setMovieSelected,
  familyMovies,
  popularMovies,
  upcomingMovies,
};

test('Testing we show LoadingSpinner while its making api call', () => {
  const wrapper = shallow(
    <Home {...commonProps} isError={false} isLoading={true} />,
  );

  expect(wrapper.find('LoadingSpinner')).toHaveLength(1);
});

test('Testing we show TextMessage if api call fails', () => {
  const wrapper = shallow(
    <Home {...commonProps} isError={true} isLoading={false} />,
  );

  expect(wrapper.find('TextMessage')).toHaveLength(1);
});

test('Testing we show 3 MovieCarousel if api call success', () => {
  const wrapper = shallow(
    <Home {...commonProps} isError={false} isLoading={false} />,
  );

  expect(wrapper.find('MovieCarousel')).toHaveLength(3);
});
