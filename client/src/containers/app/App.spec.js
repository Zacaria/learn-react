import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
const expect = chai.expect;

import App from './App';
import Button from '../../components/button/Button';

describe('<App />', () => {
    it('should render a span with a button', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.find('span').text()).to.eql('Coucou');
        expect(wrapper.find(Button).length).to.eql(1);
    });
});