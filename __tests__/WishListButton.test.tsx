import React from 'react';
import {shallow} from 'enzyme';

import {WishListButton} from '../src/components/WishListButton';

test('Testing onPress function on WishListButton component', () => {
  const onPressEvent = jest.fn();
  const wrapper = shallow(
    <WishListButton
      setCategory={onPressEvent}
      setIsHome={onPressEvent}
      setIsWishList={onPressEvent}
    />,
  );

  expect(onPressEvent).not.toHaveBeenCalled();
  wrapper.props().onPress(jest.fn());
  expect(onPressEvent).toHaveBeenCalledTimes(3);
});
