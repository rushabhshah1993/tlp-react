import React from 'react';

const Hello = props => {
    if(props.name) {
        return <p>Hey, {props.name}</p>;
    } else {
        return <p>Hey, stranger!</p>;
    }
}

export default Hello;
