import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;
chai.use(spies);

describe('<ListMessage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListMessage />);
  });
});
