import React from 'react';
import {shallow} from 'enzyme';

import {Navigation} from '../src/navigation';
import {INavigationProps} from '../src/types/interfaces';

const isWishListProps: INavigationProps = {
  isWishList: true,
  wishList: [],
  isHome: false,
  setMovieSelected: jest.fn(),
  setIsHome: jest.fn(),
  setCategory: jest.fn(),
  setWishList: jest.fn(),
  category: '',
};

const isHomeProps: INavigationProps = {
  isWishList: false,
  wishList: [],
  isHome: true,
  setMovieSelected: jest.fn(),
  setIsHome: jest.fn(),
  setCategory: jest.fn(),
  setWishList: jest.fn(),
  category: '',
};

const isDetailProps: INavigationProps = {
  isWishList: false,
  wishList: [],
  isHome: false,
  setMovieSelected: jest.fn(),
  setIsHome: jest.fn(),
  setCategory: jest.fn(),
  setWishList: jest.fn(),
  category: '',
};

test('Testing Navigation component renders WishList correctly', () => {
  const wrapper = shallow(<Navigation {...isWishListProps} />);

  expect(wrapper.find('WishList')).toHaveLength(1);
});

test('Testing Navigation component renders Home correctly', () => {
  const wrapper = shallow(<Navigation {...isHomeProps} />);

  expect(wrapper.find('Home')).toHaveLength(1);
});

test('Testing Navigation component renders Detail correctly', () => {
  const wrapper = shallow(<Navigation {...isDetailProps} />);

  expect(wrapper.find('Detail')).toHaveLength(1);
});
