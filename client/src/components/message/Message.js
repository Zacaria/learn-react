import React, { PropTypes } from 'react';

const Message = ({ text }) => (
  <div>
    {text}
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
