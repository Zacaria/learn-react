import React from 'react';
import { Provider } from 'react-redux';

import AddMessage from '../../containers/addMessage/AddMessage';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <AddMessage/>
    </Provider>
  );
};

export default Root;
