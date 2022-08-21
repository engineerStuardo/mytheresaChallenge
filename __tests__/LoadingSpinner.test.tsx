import React from 'react';
import {shallow} from 'enzyme';

import {LoadingSpinner} from '../src/components/LoadingSpinner';

test('Should render spinner with prop size large and color #343e80', () => {
  const wrapper = shallow(<LoadingSpinner />);

  expect(wrapper.find('ActivityIndicator')).toHaveLength(1);
  expect(wrapper.props().children.props.size).toBe('large');
  expect(wrapper.props().children.props.color).toBe('#343e80');
});
