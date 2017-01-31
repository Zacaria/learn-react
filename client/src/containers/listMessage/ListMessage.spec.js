import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import spies from 'chai-spies';

import { ListMessage } from './ListMessage';
import Message from '../../components/message/Message';

const expect = chai.expect;
chai.use(spies);

describe('<ListMessage />', () => {
  it('should render zero messages', () => {
    const wrapper = shallow(<ListMessage messages={[]}/>);
    expect(wrapper.find(Message)).to.have.length(0);
  });

  it('should render undefined messages', () => {
    const wrapper = shallow(<ListMessage messages={undefined}/>);
    expect(wrapper.find(Message)).to.have.length(0);
  });

  it('should render some messages', () => {
    const messages = [
      {
        id: '1',
        text: 'toto',
      }, {
        id: '2',
        text: 'to',
      }, {
        id: '3',
        text: 'tata',
      }, {
        id: '4',
        text: 'tIti',
      },
    ];
    const wrapper = shallow(<ListMessage messages={messages}/>);
    expect(wrapper.find(Message)).to.have.length(messages.length);
  });
});
