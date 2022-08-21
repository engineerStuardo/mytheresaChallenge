import React from 'react';
import {shallow} from 'enzyme';

import {Detail} from '../src/screens/Detail';

test('', () => {
  const wrapper = shallow(
    <Detail
      category="Upcoming movie"
      wishList={[]}
      setWishList={jest.fn()}
      movieSelected={{}}
    />,
  );

  expect(wrapper.find('MovieDescription')).toHaveLength(1);
  expect(wrapper.find('AdditionalInfo')).toHaveLength(1);
});
