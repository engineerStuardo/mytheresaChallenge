import React from 'react';
import {shallow} from 'enzyme';

import {LoadingSpinner} from '../src/components/LoadingSpinner';
import {Colors} from '../src/theme/colors';

test('Should render spinner with prop size large and primary color', () => {
  const wrapper = shallow(<LoadingSpinner />);

  expect(wrapper.find('ActivityIndicator')).toHaveLength(1);
  expect(wrapper.props().children.props.size).toBe('large');
  expect(wrapper.props().children.props.color).toBe(Colors.primary);
});
