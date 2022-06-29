import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ToDo from './ToDo/ToDo';

import store from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>,
    document.getElementById('root') || document.createElement('div')
);

