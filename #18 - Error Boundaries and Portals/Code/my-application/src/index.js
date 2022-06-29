import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent/MyComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

ReactDOM.render(
    <ErrorBoundary>
        <MyComponent />
    </ErrorBoundary>,
    document.getElementById('root')
);
