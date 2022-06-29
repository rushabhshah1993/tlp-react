import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello/Hello';

ReactDOM.render(
    <Hello name={'Rushabh'} />,
    document.getElementById('root') || document.createElement('div')
);
