import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';

import { ListMessage } from './ListMessage';

const expect = chai.expect;
chai.use(spies);

describe('<ListMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListMessage />);
    wrapper.setProps({
      messages: [],
    });

  });

  it('should render correctly', () => {
    // expect(wrapper.find())
  });
});
