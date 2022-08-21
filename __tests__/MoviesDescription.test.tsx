import React from 'react';
import {shallow} from 'enzyme';

import {MovieDescription} from '../src/components/MovieDescription';

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
      wishList={[
        {
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
      ]}
      movieSelected={{
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
      }}
    />,
  );

  expect(onPressEvent).not.toHaveBeenCalled();
  wrapper.props().children[1].props.children[0].props.onPress();
  expect(onPressEvent).toHaveBeenCalledTimes(1);
});
