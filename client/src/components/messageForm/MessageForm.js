import React, {PropTypes} from 'react';

const MessageForm = ({onSubmit, onInputChange}) => (
    <div>
        <input type="submit" onChange={onInputChange} onSubmit={onSubmit}/>
        <button onClick={onSubmit}>Submit</button>
    </div>
);

MessageForm.propTypes = {
    onSubmit: PropTypes.func,
    onInputChange: PropTypes.func
};

export default MessageForm;