import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../reducers';

export class ListMessage extends React.Component {
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
