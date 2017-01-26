import React from 'react';
import Button from '../../components/button/Button';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Submit'
        };
    }

    handleClick() {
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <span>Coucou</span>
                <Button text={this.state.text} onClick={() => this.handleClick()}/>
            </div>
        );
    }
}

export default App;