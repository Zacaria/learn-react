import { combineReducers } from 'redux';
import * as actionTypes from '../actionTypes';

const byId = (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE_SUCCESS:
      return Object.assign(state, action.response.entities.messages);
    default:
      return state;
  }
};

const ids = (state = [], action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE_REQUEST:
      return [
        ...state,
        action.response.result,
      ];
    default:
      return state;
  }
};

const isSending = (state = false, action) => {
  return state;
};

const isFetching = (state = false, action) => {
  return state;
};

const errorMessage = (state = null, action) => {
  return state;
};

const messages = combineReducers({
  byId,
  ids,
  isSending,
  isFetching,
  errorMessage,
});

export default messages;

export const getMessage = (state, id) => state[id];
export const getIds = (state) => state.ids;
export const getIsSending = (state) => state.isSending;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
