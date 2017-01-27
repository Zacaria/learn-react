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
            value: 'random'
        }
    };

    let wrapper;
    let button;
    let input;

    beforeEach(() => {
        wrapper = shallow(<MessageForm/>);
        wrapper.setProps({
            onSubmit: () => onSubmit(changeEvent.target.value),
            onInputChange
        });
        button = wrapper.find('button');
        input = wrapper.find('input');
        input.simulate('change', changeEvent);
    });

    it('should render correctly', () => {
        expect(button.length).to.be.eql(1);
        expect(input.length).to.be.eql(1);
    });

    it('when typing in input should fire onChange event', () => {
        expect(onInputChange).to.have.been.called.with(changeEvent);
    });

    it('when clicking on submit button should submit form', () => {
        button.simulate('click');
        expect(onSubmit).to.have.been.called.once.with(changeEvent.target.value);
    });
});