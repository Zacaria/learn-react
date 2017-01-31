import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';

import { Root } from './Root';

const expect = chai.expect;
chai.use(spies);

describe('<Root />', () => {
  it('should render correctly', () => {
    const text = 'text';
    const wrapper = shallow(<Root />);
    expect(wrapper.find('Provider')).to.have.length(1);
  });
});
