// import React, { Component } from 'react';

// export class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         }
//     }    

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.counter} times</p>
//                 <button onClick={() => this.setState({counter: this.state.counter +1})}>
//                     Increment
//                 </button>
//             </div>
//         )
//     }
// }

// export default Counter;

import React, { useState } from 'react';

const Counter = props => {
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState(null);

    return (
        <div>
            <p>You clicked {counter} times</p>
            <p>The title is {title}</p>
            <button onClick={() => setCounter(counter+1)}>
                Increment
            </button>
            <button onClick={() => setTitle('My name is Rushabh Shah')}>
                Change title
            </button>
        </div>
    )
}

export default Counter;
