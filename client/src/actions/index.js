import {normalize} from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import * as actionTypes from '../actionTypes';

export const sendMessage = (text) => dispatch => api
    .sendMessage(text)
    .then(response => {
        dispatch({
            type: actionTypes.SEND_MESSAGE_SUCCESS,
            response: normalize(response, schema.message)
        })
    });