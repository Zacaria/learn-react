import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;

import Button from '../button/Button';

chai.use(spies);

describe('<Button />', () => {

    const input = {
        text: 'data',
        onClick: chai.spy()
    };

    let wrapper;
    let button;

    beforeEach(() => {
        wrapper = shallow(<Button text={input.text} onClick={input.onClick}/>);
        button = wrapper.find('button');
    });

    it('should render text correctly', () => {
        expect(button.text()).to.eql(input.text);
    });

    it('should fire click event', () => {
        button.simulate('click');
        expect(input.onClick).to.have.been.called.once;
    });
});