import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
const expect = chai.expect;

import App from './App';

describe('<App />', () => {
    it('should render a span with text', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.text()).to.eql('Coucou');
    });
});