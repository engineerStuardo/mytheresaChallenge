import React from 'react';
import {shallow} from 'enzyme';

import {HeaderTitle} from '../src/components/HeaderTitle';

test('Should render text for home screen', () => {
  const wrapper = shallow(<HeaderTitle isHome={true} isWishList={false} />);

  expect(wrapper.props().children.props.children).toBe('Home Screen');
});

test('Should render text for wishlist screen', () => {
  const wrapper = shallow(<HeaderTitle isHome={false} isWishList={true} />);

  expect(wrapper.props().children.props.children).toBe('Wish List');
});

test('Should render text for detail screen', () => {
  const wrapper = shallow(<HeaderTitle isHome={false} isWishList={false} />);

  expect(wrapper.props().children.props.children).toBe('Detail Screen');
});
