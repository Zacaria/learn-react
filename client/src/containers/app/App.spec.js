import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;

chai.use(spies);

import {App} from './App';
import MessageForm from '../../components/messageForm/MessageForm';

describe('<App />', () => {
    const changeEvent = {
        target: {
            value: 'random'
        }
    };

    const submitEvent = {
        preventDefault: chai.spy()
    };

    const dispatch = chai.spy();

    let onSubmit;
    let submit;
    let wrapper;
    let formComponent;
    let input;
    let form;

    beforeEach(() => {
        wrapper = shallow(<App dispatch={dispatch}/>);
        wrapper.setProps({
            sendMessage: chai.spy()
        });
        onSubmit = chai.spy.on(wrapper.instance(), 'onSubmit');
        submit = chai.spy.on(wrapper.instance(), 'submit');
        formComponent = wrapper.find(MessageForm);
        form = formComponent.dive().find('form');
        input = formComponent.dive().find('input');
    });

    it('should render correctly', () => {
        expect(wrapper.find('h1').text()).to.eql('Welcome');
        expect(formComponent.length).to.eql(1);
    });

    it('when typing on input should update state', () => {
        wrapper.instance().onInputChange(changeEvent);
        expect(wrapper.state().inputValue).to.be.eql(changeEvent.target.value);
    });

    it('when press enter should onSubmit form', () => {
        input.simulate('change', changeEvent);
        form.simulate('submit', submitEvent);
        expect(onSubmit).to.have.been.called.once.with(submitEvent, changeEvent.target.value);
    });

    it('when the input is empty should not submit form', () => {
        const emptyEvent = {
            target: {
                value: '  '
            }
        };

        input.simulate('change', emptyEvent);
        form.simulate('submit');
        expect(submit).to.not.have.been.called;
    });

    it('when the input is valid should not submit form', () => {
        input.simulate('change', changeEvent);
        form.simulate('submit', submitEvent);
        expect(submit).to.have.been.called.once.with(submitEvent, changeEvent.target.value);
    });
});