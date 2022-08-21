import React from 'react';
import {shallow} from 'enzyme';

import {BackHomeButton} from '../src/components/BackHomeButton';

const onPressEvent = jest.fn();

const wrapper = shallow(
  <BackHomeButton
    isWishList={true}
    setIsWishList={onPressEvent}
    setIsHome={onPressEvent}
  />,
);

test('Testing to render component ', () => {
  expect(wrapper.find('Styled(TouchableOpacity)')).toHaveLength(1);
  expect(wrapper.find('Styled(Text)')).toHaveLength(1);
});

test('Testing we render the right button text', () => {
  expect(wrapper.props().children.props.children.join('')).toEqual(
    '<  Home Screen',
  );
});

test('Testing onPress function when click button', () => {
  expect(onPressEvent).not.toHaveBeenCalled();
  wrapper.props().onPress();
  expect(onPressEvent).toHaveBeenCalledTimes(2);
});
