import {combineReducers} from 'redux';
import messages, * as fromMessages from './messages';
import messageApp, * as fromMessageApp from './messageApp';

const reducers = combineReducers({
    messages,
    messageApp
});

export default reducers;

export const getMessage = (state, id) => fromMessages.getMessage(state, id);
export const getMessages = (state) => {
    const ids = fromMessages.getIds(state);
    return ids.map(id => fromMessages.getMessage(state.byId, id));
};
export const getIds = (state) => fromMessages.getIds(state.ids);
export const getIsSending = (state) => fromMessages.getIsSending(state.isSending);
export const getIsFetching = (state) => fromMessages.getIsFetching(state.isFetching);
export const getErrorMessage = (state) => fromMessages.getErrorMessage(state.errorMessage);

export const getNewMessage = (state) => fromMessageApp.getNewMessage(state.messageApp);
