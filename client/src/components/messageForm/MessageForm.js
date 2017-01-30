import React, {PropTypes} from 'react';

const MessageForm = ({onSubmit, onInputChange, messageValue}) => (
    <form onSubmit={onSubmit}>
        <input type="text" value={messageValue} onChange={onInputChange}/>
    </form>
);

MessageForm.propTypes = {
    onSubmit: PropTypes.func,
    onInputChange: PropTypes.func
};

export default MessageForm;