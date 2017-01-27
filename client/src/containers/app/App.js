import React from 'react';
import MessageForm from '../../components/messageForm/MessageForm';

class App extends React.Component {
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

    onSubmit(value) {
        this.isValidInput(value) && this.submit(value);
    }

    isValidInput(value) {
        return value && value.trim();
    }

    submit(value) {
        console.log('go for', value)
    }

    onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <MessageForm onSubmit={() => this.onSubmit(this.state.inputValue)} onInputChange={this.onInputChange}/>
            </div>
        );
    }
}

export default App;