import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../reducers';

class ListMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {
        this.props.messages.map(message =>
          (<div key={message.id}>{message.text}</div>)
        )
      }
    </div>);
  }
}

const mapStateToProps = (state) => ({
  messages: getMessages(state),
});

ListMessage = connect(mapStateToProps)(ListMessage);

export default ListMessage;

