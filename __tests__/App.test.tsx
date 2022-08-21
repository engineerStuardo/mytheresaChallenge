import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';

test('Renders without error and making sure we render initially Header and Navigation componets ', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('Header')).toHaveLength(1);
  expect(wrapper.find('Navigation')).toHaveLength(1);
});
