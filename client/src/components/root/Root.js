import React from 'react';
import { Provider } from 'react-redux';

import App from '../../containers/app/App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};

export default Root;
