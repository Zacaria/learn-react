# Redux

Casting

---

## Action creator

Dev : Simple function creating action.

![](assets/imgs/action_creator.png)

----

```
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'; 
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

export const toggleSidebar = (isOpen) => ({
  type: TOGGLE_SIDEBAR,
  isOpen
});

// Asynchronous
export const addTodo = (text) => (dispatch) => api
  .addTodo(text)
  .then((response) => {
    dispatch({
      type: ADD_TODO_SUCCESS,
      response
    })
  });
```

---

## Store

Redux : Holds state of the app as the single source of truth.

![](assets/imgs/store.png)

----

Redux store shape

![](assets/imgs/redux_store.png)

---

## Reducers

![](assets/imgs/reducer.png)

----

Creates new versions of the state using action and current state.

```
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {id: action.id, text: action.text, completed: false}
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

export default todo;
```

----

Combine reducers

```
import { combineReducers } from 'redux';
import messages, * as fromMessages from './messages';
import messageApp, * as fromMessageApp from './messageApp';

const reducers = combineReducers({
  messages,
  messageApp
});

export default reducers;
```

---

## Views

![](assets/imgs/views.png)

----

* The smart passes data to the dumb via props.
* The dumb is not Redux aware.
* No one uses internal state.

---

## View layer binding

![](assets/imgs/binder.png)

----

Map Redux state to comtainer props

```
const mapStateToProps = (state) => {
  return {
    newMessage: getNewMessage(state)
  };
};

export default connect(mapStateToProps)(AddMessage);
```

---

## Root component

![](assets/imgs/root.png)

----

```
import React from 'react';
import { Provider } from 'react-redux';

import ListMessage from '../../containers/listMessage/ListMessage';
import AddMessage from '../../containers/addMessage/AddMessage';

export const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <ListMessage/>
      <AddMessage/>
    </div>
  </Provider>
);

export default Root;
```

---

## Init store

![](assets/imgs/start_1.png)

----

Reducers have the same shape as the store.

```
import {createStore, applyMiddleware} from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configureStore = () => {
  //only plain object reach createLogger middleware and then reducers
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
```

---

## Connect store and components

![](assets/imgs/start_2.png)

----

Inject into root component

```
const store = configureStore();

ReactDOM.render(
  <Root store={store}/>, document.getElementById('mount-point'));
```

---

## Prepare action Callbacks

![](assets/imgs/start_3.png)

----

Map dispatch to props

```
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sendMessage,
    changeNewMessage,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);`
```

---

## Workflow

![](assets/imgs/redux.gif)


---


### Credits

> Lin Clark : code-cartoons.com
