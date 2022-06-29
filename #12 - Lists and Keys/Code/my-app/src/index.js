import React from 'react';
import ReactDOM from 'react-dom';

import List from './List/List';

const usernames = [
    'Rushabh Mulraj Shah',
    'Unnati Vora',
    'John Doe',
    'Jane Dias',
    'Manuel Lazini',
    'Cristiano Ronaldo'
];

const books = [
    {
        id: "B001",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K.Rowling"
    },
    {
        id: "B002",
        title: "The Fist of God",
        author: "Frederick Forsyth"
    },
    {
        id: "B003",
        title: "Decoding JavaScript",
        author: "Rushabh Mulraj Shah"
    }
]

ReactDOM.render(
    <List data={books} />,
    document.getElementById('root')
);
