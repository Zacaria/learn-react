import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';
import { AddMessage } from './AddMessage';
import MessageForm from '../../components/messageForm/MessageForm';

const expect = chai.expect;
chai.use(spies);

describe('<AddMessage />', () => {
  const changeEvent = {
    target: {
      value: 'random',
    },
  };

  const submitEvent = {
    preventDefault: chai.spy(),
  };

  const changeNewMessage = chai.spy();
  const sendMessage = chai.spy();

  const dispatch = chai.spy();

  let onSubmit;
  let submit;
  let wrapper;
  let formComponent;
  let input;
  let form;

  beforeEach(() => {
    wrapper = shallow(<AddMessage dispatch={dispatch}/>);
    wrapper.setProps({
      newMessage: changeEvent.target.value,
      sendMessage,
      changeNewMessage,
    });
    onSubmit = chai.spy.on(wrapper.instance(), 'onSubmit');
    submit = chai.spy.on(wrapper.instance(), 'submit');
    formComponent = wrapper.find(MessageForm);
    form = formComponent.dive().find('form');
    input = formComponent.dive().find('input');
  });

  describe('message validation', () => {
    const valid = 'toto';
    const invalid1 = '  ';
    let invalid2;

    it('should return true with not empty value', () => {
      expect(AddMessage.isValidMessage(valid)).to.be.true;
    });

    it('should return false with empty or undefined value', () => {
      expect(AddMessage.isValidMessage(invalid1)).to.be.false;
      expect(AddMessage.isValidMessage(invalid2)).to.be.false;
    });
  });

  it('should render correctly', () => {
    expect(wrapper.find('h1').text()).to.eql('Welcome');
    expect(formComponent.length).to.eql(1);
  });

  it('when typing on input should dispatch newMessage action', () => {
    wrapper.instance().onInputChange(changeEvent);
    expect(changeNewMessage).to.have.been.called.once.with(changeEvent.target.value);
  });

  it('when press enter should onSubmit form', () => {
    input.simulate('change', changeEvent);
    form.simulate('submit', submitEvent);
    expect(submitEvent.preventDefault).to.have.been.called.once;
    expect(onSubmit).to.have.been.called.once.with(submitEvent, changeEvent.target.value);
  });

  it('when the input is empty should not submit form', () => {
    const emptyEvent = {
      target: {
        value: '  ',
      },
    };

    input.simulate('change', emptyEvent);
    form.simulate('submit', submitEvent);
    expect(submit).to.not.have.been.called;
  });

  it('when the input is valid should dispatch sendMessage', () => {
    sendMessage.reset();
    input.simulate('change', changeEvent);
    form.simulate('submit', submitEvent);
    expect(sendMessage).to.have.been.called.once.with(changeEvent.target.value);
  });
});
