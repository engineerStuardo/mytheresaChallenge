import React from 'react';
import {shallow} from 'enzyme';

import {Header} from '../src/components/Header';

test('Testing we should render HeaderTitle and WishListButton', () => {
  const wrapper = shallow(
    <Header
      isHome={true}
      setIsHome={jest.fn()}
      setIsWishList={jest.fn()}
      isWishList={false}
      setCategory={jest.fn()}
    />,
  );

  expect(wrapper.find('HeaderTitle')).toHaveLength(1);
  expect(wrapper.find('WishListButton')).toHaveLength(1);
});

test('Testing we should render HeaderTitle and BackHomeButton', () => {
  const wrapper = shallow(
    <Header
      isHome={false}
      setIsHome={jest.fn()}
      setIsWishList={jest.fn()}
      isWishList={true}
      setCategory={jest.fn()}
    />,
  );

  expect(wrapper.find('HeaderTitle')).toHaveLength(1);
  expect(wrapper.find('BackHomeButton')).toHaveLength(1);
});
