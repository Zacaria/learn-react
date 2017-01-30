import {normalize} from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import * as actionTypes from '../actionTypes';

export const sendMessage = (message) => dispatch => api
    .sendMessage(message)
    .then(response => {
        dispatch({
            type: actionTypes.SEND_MESSAGE_SUCCESS,
            response: normalize(response, schema.message)
        })
    });

export const changeNewMessage = (message) => dispatch => dispatch({
    type: actionTypes.CHANGE_NEW_MESSAGE,
    message: message
});