import React from 'react';
import {shallow} from 'enzyme';

import {ShowWishList} from '../src/components/ShowWishList';
import {mockMoviesData} from '../__mocks__/mockMoviesData';

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
  const wrapper = shallow(<ShowWishList wishList={mockMoviesData} />);

  expect(
    wrapper
      .find('FlatList')
      .props()
      //@ts-ignore
      .renderItem({
        item: mockMoviesData[0],
      }).props.children.props.title,
  ).toBe('Prey');
});
