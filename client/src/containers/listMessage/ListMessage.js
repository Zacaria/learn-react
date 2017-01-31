import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../reducers';

import Message from '../../components/message/Message';

export class ListMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {
        this.props.messages.map(message =>
          (<Message key={message.id} text={message.text}/>)
        )
      }
    </div>);
  }
}

ListMessage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

ListMessage.defaultProps = {
  messages: [],
};

const mapStateToProps = (state) => ({
  messages: getMessages(state),
});

export default connect(mapStateToProps)(ListMessage);
