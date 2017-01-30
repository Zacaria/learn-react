import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {sendMessage} from '../../actions';

import MessageForm from '../../components/messageForm/MessageForm';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValidInput = this.isValidInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    onSubmit(e, value) {
        this.isValidInput(value) && this.submit(e, value);
    }

    isValidInput(value) {
        return value && value.trim();
    }

    submit(e, value) {
        e.preventDefault();
        console.log('go for', value);
        console.log(this.props);
        this.props.sendMessage(value);
    }

    onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <MessageForm onSubmit={(e) => this.onSubmit(e, this.state.inputValue)}
                             onInputChange={this.onInputChange}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendMessage}, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
