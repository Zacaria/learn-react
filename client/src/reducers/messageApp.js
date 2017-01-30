import * as actionTypes from '../actionTypes';

const newMessage = (state = '', action = {}) => {
    switch (action.type) {
        case actionTypes.CHANGE_NEW_MESSAGE:
            return action.message;
        default:
            return state;
    }
};

export default newMessage;

export const getNewMessage = (state) => state;
