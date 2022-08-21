import React from 'react';
import {shallow} from 'enzyme';

import {TextMessage} from '../src/components/TextMessage';

test('Testing we render the correct Text', () => {
  const text = 'Testing message...';
  const wrapper = shallow(<TextMessage text={text} />);

  expect(wrapper.props().children.props.children).toBe(text);
});
