import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card/Card';

let container = (
    <div>
        <Card 
            title={'Oranges'}
            img={'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg'}
            content={'Oranges are rich in Vitamin C and they also make up for a tasty snack.'}
        />
    </div>
)

ReactDOM.render(
    container,
    document.getElementById('root')
);
