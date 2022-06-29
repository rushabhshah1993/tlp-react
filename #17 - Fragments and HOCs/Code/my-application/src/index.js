import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent/MyComponent';

ReactDOM.render(
    <table>
        <tbody>
            <tr>
                <MyComponent />
            </tr>
        </tbody>
    </table>,
    document.getElementById('root')
);
