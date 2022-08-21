import React from 'react';
import {shallow} from 'enzyme';

import {WishList} from '../src/screens/WishList';

test('Should render TextMessage since wishList is empty', () => {
  const wrapper = shallow(<WishList wishList={[]} />);

  expect(wrapper.find('TextMessage')).toHaveLength(1);
});

test('Should render ShowWishList since wishList is empty and TextMessage shouldnt be in the screen', () => {
  const wrapper = shallow(
    <WishList
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

  expect(wrapper.find('TextMessage')).toHaveLength(0);
  expect(wrapper.find('ShowWishList')).toHaveLength(1);
});
