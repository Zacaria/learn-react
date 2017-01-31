import React, { PropTypes } from 'react';

const MessageForm = ({ onSubmit, onInputChange, messageValue }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={messageValue} onChange={onInputChange}/>
  </form>
);

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  messageValue: PropTypes.string.isRequired,
};

MessageForm.defaultProps = {
  messageValue: '',
};

export default MessageForm;
