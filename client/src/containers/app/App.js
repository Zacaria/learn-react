import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {getNewMessage} from '../../reducers';
import {sendMessage, changeNewMessage} from '../../actions';

import MessageForm from '../../components/messageForm/MessageForm';

export class App extends React.Component {
  static isValidMessage(value) {
    return !!(value && value.trim());
  }

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    App.isValidMessage = App.isValidMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  onSubmit(e, value) {
    e.preventDefault();
    App.isValidMessage(value) && this.submit(value);
  }

  submit(value) {
    this.props.sendMessage(value);
    this.props.changeNewMessage('');
  }

  onInputChange(e) {
    this.props.changeNewMessage(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <MessageForm onSubmit={(e) => this.onSubmit(e, this.props.newMessage)}
                     messageValue={this.props.newMessage}
                     onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newMessage: getNewMessage(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sendMessage,
    changeNewMessage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
