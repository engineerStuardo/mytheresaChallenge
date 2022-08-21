import React from 'react';
import {shallow} from 'enzyme';

import {ShowWishList} from '../src/components/ShowWishList';

test('Should render correctly and with one FlatList to show the data', () => {
  const wrapper = shallow(<ShowWishList wishList={[]} />);

  expect(wrapper.find('FlatList')).toHaveLength(1);
});

test('Testing key for item in FlatList', () => {
  const wrapper = shallow(<ShowWishList wishList={[]} />);

  //@ts-ignore
  expect(wrapper.find('FlatList').props().keyExtractor({id: 1})).toEqual('1');
});

test('Testing correct renderItem in FlatList', () => {
  const wrapper = shallow(
    <ShowWishList
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
    />,
  );

  expect(
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
      }).props.children.props.title,
  ).toBe('Prey');
});
