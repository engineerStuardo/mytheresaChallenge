import React from 'react';
import {shallow} from 'enzyme';

import {AdditionalInfo} from '../src/components/AdditionalInfo';

test('Testing to render component with no errors and the corrects number of components', () => {
  const wrapper = shallow(
    <AdditionalInfo category="Testing" date={new Date()} language="en" />,
  );

  expect(wrapper.find('Styled(View)')).toHaveLength(1);
  expect(wrapper.find('Styled(Text)')).toHaveLength(3);
});

test('Testing the correct outputs that needs to match with the props we are sending', () => {
  const wrapper = shallow(
    <AdditionalInfo
      category="Testing"
      date={new Date('2/1/22')}
      language="en"
    />,
  );

  expect(wrapper.props().children[0].props.font).toEqual('Silkscreen-Regular');
  expect(wrapper.props().children[0].props.children).toEqual(
    'Additional Information',
  );
  expect(wrapper.props().children[1].props.font).toEqual('Silkscreen-Regular');
  expect(wrapper.props().children[1].props.children.join('')).toEqual(
    'Language: en',
  );
  expect(wrapper.props().children[2].props.font).toEqual('Silkscreen-Regular');
  expect(wrapper.props().children[2].props.children.join('')).toEqual(
    'Release date: Tue Feb 01 2022 00:00:00 GMT-0600 (Central Standard Time)',
  );
});
