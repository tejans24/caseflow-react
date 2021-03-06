import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextField from '../TextField';

describe('TextField', () => {
  it('renders', () => {
    let onChange = () => true;
    const wrapper = shallow(<TextField name="foo" onChange={onChange} />);

    expect(wrapper.find('input')).to.have.length(1);
  });
});
