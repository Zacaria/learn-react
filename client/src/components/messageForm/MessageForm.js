import React, {PropTypes} from 'react';

const MessageForm = ({onSubmit, onInputChange}) => (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange}/>
    </form>
);

MessageForm.propTypes = {
    onSubmit: PropTypes.func,
    onInputChange: PropTypes.func
};

export default MessageForm;