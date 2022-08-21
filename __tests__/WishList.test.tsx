import React from 'react';
import {shallow} from 'enzyme';

import {WishList} from '../src/screens/WishList';
import {mockMoviesData} from '../__mocks__/mockMoviesData';

test('Should render TextMessage since wishList is empty', () => {
  const wrapper = shallow(<WishList wishList={[]} />);

  expect(wrapper.find('TextMessage')).toHaveLength(1);
});

test('Should render ShowWishList since wishList is empty and TextMessage shouldnt be in the screen', () => {
  const wrapper = shallow(<WishList wishList={mockMoviesData} />);

  expect(wrapper.find('TextMessage')).toHaveLength(0);
  expect(wrapper.find('ShowWishList')).toHaveLength(1);
});
