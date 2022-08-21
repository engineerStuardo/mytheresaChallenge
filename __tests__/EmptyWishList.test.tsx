import React from 'react';
import {shallow} from 'enzyme';

import {TextMessage} from '../src/components/TextMessage';

const wrapper = shallow(<TextMessage text="Empty..." />);

test('Testing the component renders correctly and the amount of components we should have', () => {
  expect(wrapper.find('Styled(View)')).toHaveLength(1);
  expect(wrapper.find('Styled(Text)')).toHaveLength(1);
});

test('Testing we render the correct text to the user', () => {
  expect(wrapper.props().children.props.children).toBe('Empty...');
});
