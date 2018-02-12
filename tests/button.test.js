import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/button';


test('Button renders', () => {
  const component = renderer.create(<Button onClickHandler={ () => null } />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onClick();
  expect(tree).toMatchSnapshot();
});