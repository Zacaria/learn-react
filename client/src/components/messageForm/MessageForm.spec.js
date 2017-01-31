import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;

chai.use(spies);

import MessageForm from './MessageForm';

describe('<MessageForm />', () => {
  const onInputChange = chai.spy();
  const onSubmit = chai.spy();
  const changeEvent = {
    target: {
      value: 'random',
    },
  };

  let wrapper;
  let form;
  let input;

  beforeEach(() => {
    wrapper = shallow(<MessageForm
      onSubmit={(e) => onSubmit(e, changeEvent.target.value)}
      onInputChange={onInputChange}
    />);
    form = wrapper.find('form');
    input = wrapper.find('input');
    input.simulate('change', changeEvent);
  });

  it('should render correctly', () => {
    expect(form.length).to.be.eql(1);
    expect(input.length).to.be.eql(1);
  });

  it('when typing in input should fire onChange event', () => {
    expect(onInputChange).to.have.been.called.with(changeEvent);
  });
});
