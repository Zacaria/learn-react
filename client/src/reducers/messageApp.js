import * as actionTypes from '../actionTypes';

const newMessage = (state = '', action = {}) => {
    // On change event : update
    // on submit : reset
    switch (action.type) {
        // Reset input when form submitted
        case actionTypes.SEND_MESSAGE_REQUEST:
            return '';
        case actionTypes.CHANGE_NEW_MESSAGE:
            return action.message;
        default:
            return state;
    }
};

export default newMessage;

export const getNewMessage = (state) => state;
