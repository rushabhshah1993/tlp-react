import React from 'react';

const List = props => {
    console.log("props:   ", props);

    let list = props.data.map(item => {
        return (
            <li key={item.id}>
                {item.title} by {item.author}
            </li>
        );
    });

    return (
        <div className='container'>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default List;