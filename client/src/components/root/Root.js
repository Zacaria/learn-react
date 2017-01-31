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
