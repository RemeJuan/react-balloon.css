import React from 'react';
import { create as rendererCreate } from 'react-test-renderer';

import Tooltip from './';

describe('<Tooltip />', () => {
  it('should render with default props', () => {
    const props = {};

    const wrapper = rendererCreate(
      <Tooltip {...props} />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with message', () => {
    const props = {
      message: 'Test message',
    };

    const wrapper = rendererCreate(
      <Tooltip {...props} />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with length', () => {
    const props = {
      length: 'small',
    };

    const wrapper = rendererCreate(
      <Tooltip {...props} />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with blockChild', () => {
    const props = {
      blockChild: false,
    };

    const wrapper = rendererCreate(
      <Tooltip {...props} />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with always', () => {
    const props = {
      always: true,
    };

    const wrapper = rendererCreate(
      <Tooltip {...props} />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
