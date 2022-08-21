import React from 'react';
import {shallow} from 'enzyme';

import {Home} from '../src/screens/Home';

test('Testing we show LoadingSpinner while its making api call', () => {
  const wrapper = shallow(
    <Home
      setCategory={jest.fn()}
      setIsHome={jest.fn()}
      setMovieSelected={jest.fn()}
      familyMovies={[]}
      popularMovies={[]}
      upcomingMovies={[]}
      isError={false}
      isLoading={true}
    />,
  );

  expect(wrapper.find('LoadingSpinner')).toHaveLength(1);
});

test('Testing we show TextMessage if api call fails', () => {
  const wrapper = shallow(
    <Home
      setCategory={jest.fn()}
      setIsHome={jest.fn()}
      setMovieSelected={jest.fn()}
      familyMovies={[]}
      popularMovies={[]}
      upcomingMovies={[]}
      isError={true}
      isLoading={false}
    />,
  );

  expect(wrapper.find('TextMessage')).toHaveLength(1);
});

test('Testing we show 3 MovieCarousel if api call success', () => {
  const wrapper = shallow(
    <Home
      setCategory={jest.fn()}
      setIsHome={jest.fn()}
      setMovieSelected={jest.fn()}
      familyMovies={[]}
      popularMovies={[]}
      upcomingMovies={[]}
      isError={false}
      isLoading={false}
    />,
  );

  expect(wrapper.find('MovieCarousel')).toHaveLength(3);
});
