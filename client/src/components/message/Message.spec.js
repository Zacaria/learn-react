import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';

import Message from './Message';

const expect = chai.expect;
chai.use(spies);

describe('<Message />', () => {
  it('should render correctly', () => {
    const text = 'text';
    const wrapper = shallow(<Message text={text}/>);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('div').text()).to.be.eql(text);
  });
});
