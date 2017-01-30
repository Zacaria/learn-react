import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {getNewMessage} from '../../reducers';
import {sendMessage, changeNewMessage} from '../../actions';

import MessageForm from '../../components/messageForm/MessageForm';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.isValidMessage = this.isValidMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.submit = this.submit.bind(this);
    }

    onSubmit(e, value) {
        e.preventDefault();
        this.isValidMessage(value) && this.submit(value);
    }

    isValidMessage(value) {
        return !!(value && value.trim());
    }

    submit(value) {
        this.props.sendMessage(value);
    }

    onInputChange(e) {
        this.props.changeNewMessage(e.target.value);
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <MessageForm onSubmit={(e) => this.onSubmit(e, this.props.newMessage)}
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
